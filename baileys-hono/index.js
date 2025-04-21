import dotenv from "dotenv";
dotenv.config();

import {
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeWASocket,
  useMultiFileAuthState,
} from "@whiskeysockets/baileys";
import fs from "fs";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { createServer } from "http";
import path from "path";
import { Server } from "socket.io";

const app = new Hono();
const PORT = process.env.PORT || 5000;

// Create HTTP server separately for Socket.io
const httpServer = createServer(async (req, res) => {
  const request = new Request(`http://${req.headers.host}${req.url}`, {
    method: req.method,
    headers: req.headers,
    body: req.method !== "GET" && req.method !== "HEAD" ? req : null,
    duplex: "half", // tambahkan ini untuk Node.js 18+ agar stream berfungsi
  });

  const response = await app.fetch(request);

  res.writeHead(
    response.status,
    Object.fromEntries(response.headers.entries())
  );

  const body = await response.arrayBuffer();
  res.end(Buffer.from(body));
});

const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Apply CORS middleware
app.use(
  "*",
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    allowMethods: ["GET", "POST"],
    credentials: true,
  })
);

const SESSION_PATH = path.join(process.cwd(), "sessions");

if (!fs.existsSync(SESSION_PATH)) {
  fs.mkdirSync(SESSION_PATH, { recursive: true });
}

const sessions = {};

async function cleanupSession(sessionId) {
  if (sessions[sessionId]?.waSocket) {
    try {
      await sessions[sessionId].waSocket.end();
    } catch (err) {
      console.error(`[${sessionId}] Error closing connection:`, err);
    }
  }

  delete sessions[sessionId];
  const sessionFolder = path.join(SESSION_PATH, sessionId);
  if (fs.existsSync(sessionFolder)) {
    fs.rmSync(sessionFolder, { recursive: true, force: true });
  }
}

async function initWASession(sessionId, socket) {
  const sessionFolder = path.join(SESSION_PATH, sessionId);
  console.log(`[${sessionId}] Initializing session`);

  try {
    if (!fs.existsSync(sessionFolder)) {
      fs.mkdirSync(sessionFolder, { recursive: true });
    }

    const { state, saveCreds } = await useMultiFileAuthState(sessionFolder);
    const { version } = await fetchLatestBaileysVersion();

    const waSocket = makeWASocket({
      version,
      auth: state,
      printQRInTerminal: true,
      browser: ["Baileys", "Chrome", "121.0.0.0"],
      connectTimeoutMs: 60000,
      shouldIgnoreJid: () => false,
    });

    sessions[sessionId] = {
      waSocket,
      status: "connecting",
      socketId: socket.id,
    };

    waSocket.ev.on("creds.update", saveCreds);

    waSocket.ev.on("connection.update", (update) => {
      const { connection, lastDisconnect, qr } = update;
      console.log(`[${sessionId}] Connection update:`, update);

      if (qr) {
        socket.emit("qr_generated", { sessionId, qr, status: "awaiting_qr" });
      }

      if (connection) {
        console.log(`[${sessionId}] Connection update: ${connection}`);
        sessions[sessionId].status = connection;
        socket.emit("status_change", { sessionId, status: connection });

        if (connection === "open") {
          console.log(`[${sessionId}] Connected to WhatsApp`);
          socket.emit("status_change", { sessionId, status: "connected" });
        }
      }

      if (connection === "close") {
        const statusCode = lastDisconnect?.error?.output?.statusCode;
        const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

        console.log(
          `[${sessionId}] Disconnected, reason:`,
          DisconnectReason[statusCode] || statusCode
        );

        if (shouldReconnect) {
          console.log(`[${sessionId}] Reconnecting...`);
          setTimeout(() => initWASession(sessionId, socket), 5000);
        } else {
          console.log(`[${sessionId}] Session logged out`);
          cleanupSession(sessionId);
          socket.emit("status_change", { sessionId, status: "logged_out" });
        }
      }
    });

    waSocket.ev.on("messages.upsert", (m) => {
      const msg = m.messages[0];
      const sender = msg.key.remoteJid;
      const text =
        msg.message?.conversation ||
        msg.message?.extendedTextMessage?.text ||
        "";

      console.log(`[${sessionId}] Message from ${sender}: ${text}`);

      socket.emit("message_received", {
        sessionId,
        from: sender,
        message: text,
        messageId: msg.key.id,
        isGroup: msg.key.remoteJid.endsWith("@g.us"),
      });
    });

    return waSocket;
  } catch (error) {
    console.error(`[${sessionId}] Init error:`, error);
    await cleanupSession(sessionId);
    socket.emit("session_error", { sessionId, error: error.message });
    throw error;
  }
}

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  const activeSessions = Object.entries(sessions).map(([id, session]) => ({
    id,
    status: session.status,
  }));

  socket.emit("sessions", activeSessions);

  socket.on("start_session", async (sessionId) => {
    console.log(`Received start_session for: ${sessionId}`);

    try {
      if (sessions[sessionId]) {
        console.log(`[${sessionId}] Session already exists`);
        return socket.emit("session_exists", { sessionId });
      }

      console.log(`[${sessionId}] Initializing new session...`);
      await initWASession(sessionId, socket);
      socket.emit("session_ready", { sessionId });
    } catch (error) {
      console.error(`[${sessionId}] Init failed:`, error);
      socket.emit("session_error", {
        sessionId,
        error: error.message,
      });
    }
  });

  socket.on("disconnect_session", async (sessionId) => {
    if (sessions[sessionId]) {
      console.log(`[${sessionId}] Disconnecting session...`);
      await cleanupSession(sessionId);
      io.emit("status_change", { sessionId, status: "disconnected" });
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
    Object.entries(sessions).forEach(([sessionId, session]) => {
      if (session.socketId === socket.id) {
        cleanupSession(sessionId);
      }
    });
  });
});

// API Routes
app.post("/send-message", async (c) => {
  const { sessionId, number, message } = await c.req.json();

  if (!sessionId || !number || !message) {
    return c.json(
      {
        success: false,
        message: "sessionId, number, and message are required",
      },
      400
    );
  }

  try {
    const session = sessions[sessionId];
    if (!session || !session.waSocket) {
      return c.json(
        {
          success: false,
          message: "Session not found or not connected",
        },
        404
      );
    }

    const id = number.includes("@") ? number : `${number}@s.whatsapp.net`;
    await session.waSocket.sendMessage(id, { text: message });

    return c.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error sending message: ", error);
    return c.json(
      {
        success: false,
        message: error.message || "Failed to send message",
      },
      500
    );
  }
});

app.post("/reply-message", async (c) => {
  const { sessionId, number, message, messageId } = await c.req.json();

  if (!sessionId || !number || !message || !messageId) {
    return c.json(
      {
        success: false,
        message: "sessionId, number, message, and messageId are required",
      },
      400
    );
  }

  try {
    const session = sessions[sessionId];
    if (!session || !session.waSocket) {
      return c.json(
        {
          success: false,
          message: "Session not found or not connected",
        },
        404
      );
    }

    const id = number.includes("@") ? number : `${number}@s.whatsapp.net`;

    await session.waSocket.sendMessage(id, {
      text: message,
      quoted: {
        key: {
          remoteJid: id,
          id: messageId,
          fromMe: false,
        },
        message: { conversation: message },
      },
    });

    return c.json({
      success: true,
      message: "Reply sent successfully",
    });
  } catch (error) {
    console.error("Error replying message: ", error);
    return c.json(
      {
        success: false,
        message: error.message || "Failed to send reply",
      },
      500
    );
  }
});

app.get("/health", (c) => {
  return c.json({
    status: "ok",
    socket: io.engine?.clientsCount || 0,
  });
});

httpServer.listen(PORT, () => {
  console.log(`✅ WhatsApp Server running on port ${PORT}`);
});

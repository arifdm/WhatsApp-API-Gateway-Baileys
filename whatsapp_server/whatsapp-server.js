require("dotenv").config();

const {
  makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
} = require("@whiskeysockets/baileys");
const { Boom } = require("@hapi/boom");
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require("path");
const fs = require("fs");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 5000;
const SESSION_PATH = path.join(__dirname, "sessions");

// Ensure sessions directory exists
if (!fs.existsSync(SESSION_PATH)) {
  fs.mkdirSync(SESSION_PATH, { recursive: true });
}

app.use(express.json());

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

  // Cleanup session folder if exists
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

      // Tambahkan logging untuk debug
      console.log(`[${sessionId}] Connection update:`, update);

      if (qr) {
        console.log(`[${sessionId}] QR Code generated`);
        // Pastikan mengirim data lengkap
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
      console.log(
        `[${sessionId}] New message:`,
        m.messages[0]?.message?.conversation
      );
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

  // socket.on("start_session", async (sessionId) => {
  //   if (sessions[sessionId]) {
  //     socket.emit("session_exists", { sessionId });
  //     return;
  //   }

  //   try {
  //     await initWASession(sessionId, socket);
  //     socket.emit("session_ready", { sessionId });
  //   } catch (error) {
  //     socket.emit("session_error", { sessionId, error: error.message });
  //   }
  // });

  socket.on("start_session", async (sessionId) => {
    console.log(`Received start_session for: ${sessionId}`); // [!++]

    try {
      if (sessions[sessionId]) {
        console.log(`[${sessionId}] Session already exists`);
        return socket.emit("session_exists", { sessionId });
      }

      console.log(`[${sessionId}] Initializing new session...`);
      await initWASession(sessionId, socket);
      socket.emit("session_ready", { sessionId });
    } catch (error) {
      console.error(`[${sessionId}] Init failed:`, error); // [!++]
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
    // Cleanup sessions owned by this socket
    Object.entries(sessions).forEach(([sessionId, session]) => {
      if (session.socketId === socket.id) {
        cleanupSession(sessionId);
      }
    });
  });
});

app.post("/send-message", async (req, res) => {
  const { number, message } = req.body;

  if (!number || !message) {
    return res.status(400).json({
      success: false,
      message: "Number and message are required",
    });
  }

  try {
    const id = number + "@s.whatsapp.net"; // WhatsApp ID
    await sock.sendMessage(id, { text: message });

    res.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error sending message: ", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    socket: io.engine.clientsCount,
  });
});

httpServer.listen(PORT, () => {
  console.log(`✅ WhatsApp Server running on port ${PORT}`);
});

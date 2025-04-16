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
    origin: process.env.FRONTEND_URL || "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 5000;
const SESSION_PATH = path.join(__dirname, "sessions");

app.use(express.json());

const sessions = {};

async function initWASession(sessionId, socket) {
  const sessionFolder = path.join(SESSION_PATH, sessionId);

  try {
    if (!fs.existsSync(sessionFolder)) {
      fs.mkdirSync(sessionFolder, { recursive: true });
    }

    const { state, saveCreds } = await useMultiFileAuthState(sessionFolder);

    const { version, isLatest } = await fetchLatestBaileysVersion();

    const waSocket = makeWASocket({
      version,
      auth: state,
      printQRInTerminal: true,
      browser: ["Baileys", "Chrome", "121.0.0.0"],
      connectTimeoutMs: 60000,
      shouldIgnoreJid: () => false,
    });

    sessions[sessionId] = { waSocket, status: "connecting" };

    waSocket.ev.on("creds.update", saveCreds);

    waSocket.ev.on("connection.update", async (update) => {
      const { connection, lastDisconnect, qr } = update;

      if (qr) {
        console.log(`[${sessionId}] QR Code received`);
        socket.emit("qr_generated", { sessionId, qr });
      }

      if (connection) {
        console.log(`[${sessionId}] Connection update:`, connection);
        socket.emit("status_change", { sessionId, status: connection });
      }

      if (connection === "open") {
        sessions[sessionId].status = "connected";
        console.log(`[${sessionId}] Connected to WhatsApp`);

        try {
          const me = waSocket?.user;
          console.log(`[${sessionId}] Connected as:`, me?.id);
        } catch (err) {
          console.error(`[${sessionId}] Failed to get user info:`, err);
        }

        socket.emit("status_change", { sessionId, status: "connected" });
      }

      if (connection === "close") {
        const statusCode =
          lastDisconnect?.error instanceof Boom
            ? lastDisconnect.error.output.statusCode
            : "unknown";

        const reasonText =
          DisconnectReason[statusCode] ||
          lastDisconnect?.error?.message ||
          "Unknown";

        console.error(`[${sessionId}] Disconnected: ${reasonText}`);
        sessions[sessionId].status = "disconnected";

        if (
          [
            DisconnectReason.connectionClosed,
            DisconnectReason.connectionLost,
            DisconnectReason.restartRequired,
            DisconnectReason.timedOut,
          ].includes(statusCode)
        ) {
          console.log(`[${sessionId}] Reconnecting in 5 seconds...`);
          setTimeout(() => initWASession(sessionId, socket), 5000);
        } else if (statusCode === DisconnectReason.loggedOut) {
          console.log(`[${sessionId}] Session logged out, removing data`);
          delete sessions[sessionId];
          fs.rmSync(sessionFolder, { recursive: true, force: true });
          socket.emit("status_change", { sessionId, status: "logged_out" });
        }
      }
    });

    // Optional: Debug incoming message
    waSocket.ev.on("messages.upsert", (m) => {
      console.log("📩 Message received:", JSON.stringify(m, null, 2));
    });

    return waSocket;
  } catch (error) {
    console.error(`[${sessionId}] Init error:`, error);
    socket.emit("session_error", { sessionId, error: error.message });
    throw error;
  }
}

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  const activeSessions = Object.entries(sessions).map(([id, client]) => ({
    id,
    status: client?.status || "unknown",
  }));
  socket.emit("sessions", activeSessions);

  socket.on("start_session", async (sessionId) => {
    try {
      if (sessions[sessionId]) {
        console.log(`[${sessionId}] Session already exists`);
        socket.emit("session_exists", { sessionId });
        return;
      }

      console.log(`[${sessionId}] Starting new session`);
      await initWASession(sessionId, socket);
      socket.emit("session_ready", { sessionId });
    } catch (error) {
      socket.emit("session_error", { sessionId, error: error.message });
    }
  });

  socket.on("get-sessions", () => {
    const activeSessions = Object.entries(sessions).map(([id, client]) => ({
      id,
      status: client?.status || "unknown",
    }));
    socket.emit("sessions", activeSessions);
  });

  // Mulai sesi baru
  socket.on("start", async (sessionId) => {
    await initWASession(io, sessionId);
  });

  // Putuskan sesi
  socket.on("disconnect-session", async (sessionId) => {
    if (sessions[sessionId]) {
      await sessions[sessionId].logout();
      delete sessions[sessionId];
      io.emit("status", {
        sessionId,
        status: "disconnected",
        reason: "Session diputus oleh pengguna",
      });
    }
  });
});

httpServer.listen(PORT, () => {
  console.log(`✅ WhatsApp Server running on port ${PORT}`);
});

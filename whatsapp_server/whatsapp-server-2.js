require("dotenv").config();

const {
  makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
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

// Middleware
app.use(express.json());

// Session Management
const sessions = {};

async function initWASession(sessionId, socket) {
  const sessionFolder = path.join(SESSION_PATH, sessionId);

  try {
    if (!fs.existsSync(sessionFolder)) {
      fs.mkdirSync(sessionFolder, { recursive: true });
    }

    const { state, saveCreds } = await useMultiFileAuthState(sessionFolder);

    const waSocket = makeWASocket({
      auth: state,
      printQRInTerminal: true,
      browser: ["MyApp", "Chrome", "1.0.0"],
      connectTimeoutMs: 60000,
      // Tambahkan keepalive dan pengaturan tambahan
      keepAliveIntervalMs: 30000,
      maxIdleTimeMs: 60000,
      // Tambahkan syncFullHistory untuk memastikan sinkronisasi penuh
      syncFullHistory: false,
      // Tambahkan retry untuk koneksi
      getMessage: async (key) => {
        return {
          conversation: "retrying connection...",
        };
      },
    });

    sessions[sessionId] = { waSocket, status: "connecting" };

    // Event Handlers yang diperbaiki
    waSocket.ev.on("creds.update", async () => {
      try {
        await saveCreds();
        console.log(`[${sessionId}] Credentials updated and saved`);
      } catch (err) {
        console.error(`[${sessionId}] Error saving credentials:`, err);
      }
    });

    waSocket.ev.on("connection.update", (update) => {
      console.log(
        `[${sessionId}] Connection update:`,
        JSON.stringify(update, null, 2)
      );
      handleConnectionUpdate(sessionId, socket, update);
    });

    // waSocket.ev.on("qr", (qr) => {
    //   console.log(`[${sessionId}] QR Code generated`);
    //   socket.emit("qr_generated", { sessionId, qr });
    // });

    // Error handling yang lebih komprehensif
    waSocket.ev.on("connection.error", (error) => {
      console.error(`[${sessionId}] Connection error:`, error);
      socket.emit("status_change", {
        sessionId,
        status: "error",
        error: error.message,
      });

      // Coba ulang koneksi untuk error tertentu
      if (
        error.message.includes("ECONNRESET") ||
        error.message.includes("ETIMEDOUT")
      ) {
        setTimeout(() => initWASession(sessionId, socket), 5000);
      }
    });

    return waSocket;
  } catch (error) {
    console.error(`[${sessionId}] Init error:`, error);
    socket.emit("session_error", {
      sessionId,
      error: error.message,
      stack: error.stack,
    });
    throw error;
  }
}

function handleConnectionUpdate(sessionId, socket, update) {
  const {
    connection,
    lastDisconnect,
    qr,
    isNewLogin,
    receivedPendingNotifications,
  } = update;
  const session = sessions[sessionId];

  if (qr) {
    socket.emit("qr_generated", { sessionId, qr });
  }

  if (connection === "open") {
    session.status = "connected";
    console.log(`[${sessionId}] Successfully connected to WhatsApp.`);
    socket.emit("status_change", {
      sessionId,
      status: "connected",
      isNewLogin,
      receivedPendingNotifications,
    });

    // Verifikasi koneksi benar-benar terbuka
    if (session.waSocket) {
      session.waSocket.ev.on("messages.upsert", () => {
        console.log(`[${sessionId}] Received messages - connection verified`);
      });
    }
  }

  if (connection === "close") {
    const shouldReconnect = handleDisconnect(sessionId, socket, lastDisconnect);
    if (shouldReconnect) {
      setTimeout(() => initWASession(sessionId, socket), 5000);
    }
  }
}

function handleDisconnect(sessionId, socket, lastDisconnect) {
  const session = sessions[sessionId];
  session.status = "disconnected";

  const reasonCode =
    lastDisconnect?.error?.output?.statusCode ||
    lastDisconnect?.error?.code ||
    lastDisconnect?.error?.name;

  const reasonMessage = lastDisconnect?.error?.message || "Unknown";
  const reasonText = DisconnectReason[reasonCode] || reasonMessage;

  console.error(`[${sessionId}] Disconnected:`, reasonCode, reasonText);

  // Kirim status ke client
  socket.emit("status_change", {
    sessionId,
    status: "disconnected",
    reasonCode,
    reasonText,
  });

  // Logika reconnect
  if (reasonCode === DisconnectReason.loggedOut) {
    console.log(`[${sessionId}] Session logged out, cleaning up`);
    cleanupSession(sessionId);
    socket.emit("status_change", { sessionId, status: "logged_out" });
    return false;
  }

  // Reconnect untuk error yang bisa di-recover
  return true;
}

function cleanupSession(sessionId) {
  delete sessions[sessionId];
  const sessionFolder = path.join(SESSION_PATH, sessionId);
  if (fs.existsSync(sessionFolder)) {
    fs.rmSync(sessionFolder, { recursive: true, force: true });
  }
}

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("start_session", async (sessionId) => {
    try {
      if (sessions[sessionId]) {
        socket.emit("session_exists", { sessionId });
        return;
      }

      await initWASession(sessionId, socket);
      socket.emit("session_ready", { sessionId });
    } catch (error) {
      socket.emit("session_error", { sessionId, error: error.message });
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log(`WhatsApp Server running on port ${PORT}`);
});

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

  // Clean up existing session folder if any
  if (fs.existsSync(sessionFolder)) {
    console.log(
      `[${sessionId}] Detected existing session folder, cleaning up...`
    );
    fs.rmSync(sessionFolder, { recursive: true, force: true });
  }

  try {
    // Ensure session directory exists
    if (!fs.existsSync(sessionFolder)) {
      fs.mkdirSync(sessionFolder, { recursive: true });
    }

    const { state, saveCreds } = await useMultiFileAuthState(sessionFolder);

    const customLogger = {
      level: "warn", // Reduce verbosity
      trace: () => {}, // Remove trace logs
      debug: () => {}, // Remove debug logs
      info: (...args) => console.info(...args),
      warn: (...args) => console.warn(...args),
      error: (...args) => console.error(...args),
      fatal: (...args) => console.error("FATAL:", ...args),
      child: () => customLogger,
    };

    const waSocket = makeWASocket({
      auth: state,
      logger: customLogger,
      printQRInTerminal: true,
      browser: ["MyApp", "Chrome", "1.0.0"], // Browser information
      connectTimeoutMs: 60000, // Timeout for connecting
    });

    // Store session
    sessions[sessionId] = { waSocket, status: "connecting" };

    // Event Handlers
    waSocket.ev.on("creds.update", saveCreds);
    waSocket.ev.on("connection.update", (update) => {
      handleConnectionUpdate(sessionId, socket, update);
    });

    return waSocket;
  } catch (error) {
    console.error(`[${sessionId}] Init error:`, error);
    socket.emit("session_error", { sessionId, error: error.message });
    throw error;
  }
}

function handleConnectionUpdate(sessionId, socket, update) {
  const { connection, lastDisconnect, qr } = update;
  const session = sessions[sessionId];

  if (qr) {
    console.log(`[${sessionId}] QR Code received`);
    socket.emit("qr_generated", { sessionId, qr });
  }

  if (connection) {
    console.log(`[${sessionId}] Connection update:`, connection);
    socket.emit("status_change", { sessionId, status: connection });
  }

  if (connection === "open") {
    session.status = "connected";
    console.log(`[${sessionId}] Successfully connected to WhatsApp.`);
    socket.emit("status_change", { sessionId, status: "connected" });
  }

  if (connection === "close") {
    session.status = "disconnected";

    const reason =
      lastDisconnect?.error instanceof Boom
        ? lastDisconnect.error.output.statusCode
        : lastDisconnect?.error?.message || "Unknown";

    const reasonText = DisconnectReason[reason] || reason;
    console.error(`[${sessionId}] Disconnected:`, reasonText);

    // Reconnect logic
    if (
      [
        DisconnectReason.connectionClosed,
        DisconnectReason.timedOut,
        DisconnectReason.restartRequired,
        DisconnectReason.connectionLost,
      ].includes(reason)
    ) {
      console.log(`[${sessionId}] Attempting to reconnect in 5 seconds...`);
      setTimeout(() => initWASession(sessionId, socket), 5000);
    }

    if (reason === DisconnectReason.loggedOut) {
      console.log(`[${sessionId}] Session logged out, cleaning up`);
      delete sessions[sessionId];
      const sessionFolder = path.join(SESSION_PATH, sessionId);
      fs.rmSync(sessionFolder, { recursive: true, force: true });
      socket.emit("status_change", { sessionId, status: "logged_out" });
    }
  }
}

// Socket.IO Events
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  // Get active sessions
  socket.on("get_active_sessions", () => {
    const activeSessions = Object.entries(sessions).map(
      ([sessionId, session]) => ({
        sessionId,
        status: session.status,
      })
    );
    socket.emit("active_sessions", activeSessions);
  });

  // Start a new session
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

  // Disconnect a session
  socket.on("disconnect_session", (sessionId) => {
    if (sessions[sessionId]) {
      sessions[sessionId].waSocket.ev.emit("connection.update", {
        connection: "close",
      });
      delete sessions[sessionId];
      const sessionFolder = path.join(SESSION_PATH, sessionId);
      fs.rmSync(sessionFolder, { recursive: true, force: true });
      console.log(`[${sessionId}] Session disconnected`);
      socket.emit("status_change", { sessionId, status: "disconnected" });
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log(`WhatsApp Server running on port ${PORT}`);
});

// Global error handling
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
});

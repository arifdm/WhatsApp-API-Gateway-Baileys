const {
  makeWASocket,
  useMultiFileAuthState,
} = require("@whiskeysockets/baileys");
const { Agent } = require("https");
const express = require("express");
const qrcode = require("qrcode-terminal");
const fs = require("fs");
const path = require("path");
const http = require("http");
const socketIO = require("socket.io");
const qrcodeGenerator = require("qrcode");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = 3000;

// Middleware untuk parse JSON body
app.use(express.json());
app.use(express.static("public")); // Serve static files from public folder

const config = {
  printQRInTerminal: true,
  authPath: path.join(__dirname, "sessions"),
};

const sessions = {};

async function startSession(sessionId, socket) {
  try {
    const { state, saveCreds } = await useMultiFileAuthState(
      `./sessions/${sessionId}`
    );

    const sock = makeWASocket({
      auth: state,
      printQRInTerminal: true,
      fetchAgent: new Agent({ keepAlive: true }),
    });

    // Simpan socket ke sessions object
    sessions[sessionId] = {
      waSocket: sock,
      status: "connecting",
    };

    // Simpan credential setiap ada perubahan
    sock.ev.on("creds.update", saveCreds);

    // Handle koneksi & auto-reconnect
    sock.ev.on("connection.update", async (update) => {
      const { connection, lastDisconnect, qr } = update;

      if (qr) {
        console.log("Silakan scan QR code ini:");
        qrcode.generate(qr, { small: true });

        // Generate QR untuk frontend
        const qrImage = await qrcodeGenerator.toDataURL(qr);
        socket.emit("qr-update", qrImage);
      }

      if (connection === "close") {
        sessions[sessionId].status = "disconnected";
        socket.emit("status-update", "disconnected");

        const shouldReconnect =
          lastDisconnect?.error?.output?.statusCode !== 401;
        if (shouldReconnect) {
          console.log("Mencoba reconnect...");
          startSession(sessionId, socket); // Reconnect otomatis
        }
      } else if (connection === "open") {
        sessions[sessionId].status = "connected";
        socket.emit("status-update", "connected");
        console.log("Berhasil terhubung!");
        keepAlive(sock); // Mulai keep-alive
      } else if (connection === "connecting") {
        sessions[sessionId].status = "connecting";
        socket.emit("status-update", "connecting");
      }
    });

    return sock;
  } catch (error) {
    console.error("Error starting session:", error);
    socket.emit("status-update", "error");
    throw error;
  }
}

// Fungsi untuk menjaga koneksi tetap aktif
function keepAlive(sock) {
  setInterval(() => {
    sock.sendPresenceUpdate("available"); // Tetap online
  }, 30_000); // Kirim setiap 30 detik
}

// Socket.IO connection handler
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  // Handle session creation from frontend
  socket.on("create-session", (sessionId) => {
    console.log(`Creating session for ${sessionId}`);
    startSession(sessionId, socket)
      .then(() => {
        socket.emit("session-created", sessionId);
      })
      .catch((error) => {
        socket.emit("session-error", error.message);
      });
  });

  // Handle status request
  socket.on("get-status", (sessionId) => {
    if (sessions[sessionId]) {
      socket.emit("status-update", sessions[sessionId].status);
    } else {
      socket.emit("status-update", "not-found");
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

app.post("/session/create", async (req, res) => {
  if (!req.body || typeof req.body !== "object") {
    return res.status(400).json({
      success: false,
      error: "Request body harus berupa JSON",
    });
  }

  const { sessionId } = req.body;

  if (!sessionId || typeof sessionId !== "string") {
    return res.status(400).json({
      success: false,
      error: "sessionId harus berupa string dan wajib diisi",
      contoh: {
        sessionId: "device1",
      },
    });
  }

  try {
    // For API requests, we need to handle the socket differently
    // This is a simplified version for API-only usage
    const sock = await startSession(sessionId, { emit: () => {} });
    res.json({
      success: true,
      message: "Silakan scan QR code di terminal/server",
      sessionId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Gagal membuat session",
      detail: error.message,
    });
  }
});

server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
  console.log("Buat session dengan:");
  console.log("curl -X POST http://localhost:3000/session/create \\");
  console.log('  -H "Content-Type: application/json" \\');
  console.log('  -d \'{"sessionId":"device1"}\'');
});

// Handle sinyal lain (e.g., SIGTERM dari Docker/Kubernetes)
process.on("SIGTERM", () => {
  console.log("Menerima SIGTERM...");
  shutdown();
});

// Fungsi reusable untuk shutdown
function shutdown() {
  Object.values(sessions).forEach((session) => {
    session.waSocket.logout();
  });
  setTimeout(() => process.exit(0), 5000); // Force exit setelah 5 detik
}

// Tangkap error yang tidak terhandle
process.on("uncaughtException", (err) => {
  console.error("Error tidak terhandle:", err);
  shutdown();
});

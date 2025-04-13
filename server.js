const {
  makeWASocket,
  useMultiFileAuthState,
} = require("@whiskeysockets/baileys");
const express = require("express");
const qrcode = require("qrcode-terminal");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// Middleware untuk parse JSON body
app.use(express.json());

const config = {
  printQRInTerminal: true,
  authPath: path.join(__dirname, "sessions"),
};

const sessions = {};

async function startSession(sessionId) {
  try {
    const sessionPath = path.join(config.authPath, sessionId);

    if (!fs.existsSync(config.authPath)) {
      fs.mkdirSync(config.authPath, { recursive: true });
    }

    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);

    const sock = makeWASocket({
      ...config,
      auth: state,
    });

    sock.ev.on("creds.update", saveCreds);
    sock.ev.on("connection.update", ({ qr, connection }) => {
      if (qr) {
        console.log("\n=== SCAN INI ===");
        qrcode.generate(qr, { small: true });
        console.log("=================");
      }
      if (connection === "open") {
        console.log(`[${sessionId}] Berhasil terhubung!`);
      }
    });

    sessions[sessionId] = sock;
    return sock;
  } catch (error) {
    console.error(`Error membuat session ${sessionId}:`, error);
    throw error;
  }
}

app.post("/session/create", async (req, res) => {
  // Validasi request body
  if (!req.body || typeof req.body !== "object") {
    return res.status(400).json({
      success: false,
      error: "Request body harus berupa JSON",
    });
  }

  const { sessionId } = req.body;

  // Validasi sessionId
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
    await startSession(sessionId);
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

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
  console.log("Buat session dengan:");
  console.log("curl -X POST http://localhost:3000/session/create \\");
  console.log('  -H "Content-Type: application/json" \\');
  console.log('  -d \'{"sessionId":"device1"}\'');
});

// Menangani SIGINT untuk membersihkan session saat server dihentikan
process.on("SIGINT", () => {
  console.log("\nMenghentikan server...");
  Object.values(sessions).forEach((sock) => {
    sock.logout();
  });
  process.exit(0);
});

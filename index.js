const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const express = require('express');
const { Boom } = require('@hapi/boom');
const qrcode = require('qrcode-terminal');  // Tambahkan ini


const app = express();
const port = 3000;

app.use(express.json());

let sock;

const connectToWhatsApp = async () => {
  try {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');

    sock = makeWASocket({
      auth: state,
      printQRInTerminal: false, // Nonaktifkan opsi bawaan, kita akan menanganinya secara manual
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update;
      
        if (qr) {
          qrcode.generate(qr, { small: true });  // Menampilkan QR code di terminal
        }
      
        if (connection === 'close') {
          const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
          if (shouldReconnect) {
            console.log('Connection closed. Reconnecting...');
            connectToWhatsApp();  // Rekoneksi jika tidak logout
          } else {
            console.log('Connection closed due to logout. Please re-scan QR code.');
          }
        } else if (connection === 'open') {
          console.log('Successfully connected to WhatsApp');
        }
      });
      

  } catch (err) {
    console.log('Error connecting to WhatsApp: ', err);
  }
};

// Panggil fungsi untuk koneksi ke WhatsApp
connectToWhatsApp();

// API endpoint untuk mengirim pesan
app.post('/send-message', async (req, res) => {
  const { number, message } = req.body;

  if (!number || !message) {
    return res.status(400).json({
      success: false,
      message: 'Number and message are required'
    });
  }

  try {
    const id = number + '@s.whatsapp.net'; // WhatsApp ID
    await sock.sendMessage(id, { text: message });

    res.json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Error sending message: ', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message'
    });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

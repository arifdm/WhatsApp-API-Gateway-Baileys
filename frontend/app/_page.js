"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io(
  process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:5000"
);

export default function Home() {
  const [sessionId, setSessionId] = useState("admin");
  const [qrCode, setQrCode] = useState(null);
  const [status, setStatus] = useState("disconnected");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  // Inisialisasi koneksi
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to socket server");
    });

    socket.on("qr_generated", (data) => {
      if (data.sessionId === sessionId) {
        setQrCode(data.qr);
        setStatus("awaiting_qr");
      }
    });

    socket.on("status_change", (data) => {
      if (data.sessionId === sessionId) {
        setStatus(data.status);
        if (data.status === "connected") {
          setQrCode(null);
        }
      }
    });

    socket.on("session_ready", () => {
      console.log("Session is ready");
    });

    socket.on("session_exists", () => {
      console.log("Session already exists");
    });

    socket.on("session_error", (data) => {
      console.error("Session error", data);
    });

    // Mulai sesi saat load pertama kali
    socket.emit("start_session", sessionId);

    return () => {
      socket.disconnect();
    };
  }, [sessionId]);

  const handleSendMessage = async () => {
    setFeedback("");
    try {
      const res = await fetch(
        `${
          process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:5000"
        }/send-message`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ number, message }),
        }
      );

      const data = await res.json();
      if (data.success) {
        setFeedback("Pesan berhasil dikirim!");
      } else {
        setFeedback("Gagal mengirim pesan.");
      }
    } catch (err) {
      console.error(err);
      setFeedback("Terjadi kesalahan saat mengirim.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">WhatsApp Bot Dashboard</h1>

      <p className="mb-4">
        Status: <strong>{status}</strong>
      </p>

      {status === "awaiting_qr" && qrCode && (
        <div className="mb-4">
          <p className="mb-2">Scan QR Code dengan WhatsApp:</p>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
              qrCode
            )}&size=200x200`}
            alt="QR Code"
          />
        </div>
      )}

      {status === "connected" && (
        <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Kirim Pesan WhatsApp</h2>
          <input
            type="text"
            placeholder="Nomor WhatsApp (6281234567890)"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 mb-2"
          />
          <textarea
            placeholder="Isi pesan"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 mb-2"
          />
          <button
            onClick={handleSendMessage}
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Kirim Pesan
          </button>
          {feedback && <p className="mt-2 text-sm text-gray-600">{feedback}</p>}
        </div>
      )}
    </main>
  );
}

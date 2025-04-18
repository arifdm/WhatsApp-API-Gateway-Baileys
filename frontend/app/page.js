"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import QRCode from "react-qr-code";

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
  const [lastConnectionTime, setLastConnectionTime] = useState(null);

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
          setLastConnectionTime(new Date());
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
      const res = await axios.post(
        `${
          process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:5000"
        }/send-message`,
        { number, message, sessionId }
      );

      const data = res?.data;
      console.log("Response data:", data);

      if (data?.success) {
        setFeedback("Pesan berhasil dikirim!");
      } else {
        setFeedback("Gagal mengirim pesan.");
      }
    } catch (err) {
      console.error(err);
      setFeedback("Terjadi kesalahan saat mengirim.");
    }
  };

  const handleDisconnect = () => {
    socket.emit("logout_session", sessionId);
    setStatus("disconnected");
    setFeedback("Sesi telah diputuskan");
  };

  const getStatusColor = () => {
    switch (status) {
      case "connected":
        return "bg-green-100 text-green-800";
      case "disconnected":
        return "bg-red-100 text-red-800";
      case "awaiting_qr":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case "connected":
        return "Terhubung";
      case "disconnected":
        return "Terputus";
      case "awaiting_qr":
        return "Menunggu Scan QR";
      default:
        return status;
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
              <h1 className="text-2xl font-bold mb-6 text-gray-800">
                WhatsApp Bot Dashboard
              </h1>

              <div className="space-y-4">
                <div>
                  <h2 className="text-sm font-medium text-gray-500 mb-1">
                    Session ID
                  </h2>
                  <p className="text-lg font-semibold text-gray-800">
                    {sessionId}
                  </p>
                </div>

                <div>
                  <h2 className="text-sm font-medium text-gray-500 mb-1">
                    Status Koneksi
                  </h2>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}
                    >
                      {getStatusLabel()}
                    </span>
                    {status === "connected" && (
                      <button
                        onClick={handleDisconnect}
                        className="text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                      >
                        Putuskan
                      </button>
                    )}
                  </div>
                </div>

                {lastConnectionTime && status === "connected" && (
                  <div>
                    <h2 className="text-sm font-medium text-gray-500 mb-1">
                      Terhubung Sejak
                    </h2>
                    <p className="text-gray-800 text-md">
                      {lastConnectionTime.toLocaleString()}
                    </p>
                  </div>
                )}

                {status === "awaiting_qr" && qrCode && (
                  <div className="pt-4">
                    <h2 className="text-sm font-medium text-gray-500 mb-2">
                      Scan QR Code
                    </h2>
                    <div className="bg-white p-2 rounded border border-gray-200">
                      {/* <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
                          qrCode
                        )}&size=200x200`}
                        alt="QR Code"
                        className="mx-auto"
                      /> */}
                      <QRCode
                        value={qrCode}
                        size={200}
                        className="mx-auto"
                        style={{ width: "200px" }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Buka WhatsApp &gt; Menu &gt; Perangkat Tertaut &gt; Pindai
                      Kode QR
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3">
            {status === "connected" ? (
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Kirim Pesan WhatsApp
                  </h2>
                  <p className="text-sm text-gray-500">
                    Kirim pesan ke nomor WhatsApp tujuan
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="number"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nomor WhatsApp
                    </label>
                    <input
                      id="number"
                      type="text"
                      placeholder="Contoh: 6281234567890"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Gunakan format kode negara tanpa tanda '+' atau '0' di
                      depan
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Isi Pesan
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tulis pesan yang akan dikirim..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <button
                    onClick={handleSendMessage}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
                  >
                    Kirim Pesan
                  </button>

                  {feedback && (
                    <div
                      className={`p-3 rounded-lg ${
                        feedback.includes("berhasil")
                          ? "bg-green-50 text-green-800"
                          : "bg-red-50 text-red-800"
                      }`}
                    >
                      {feedback}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mx-auto text-gray-400 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    {status === "awaiting_qr"
                      ? "Menunggu Scan QR Code"
                      : "Tidak Terhubung"}
                  </h3>
                  <p className="text-gray-500">
                    {status === "awaiting_qr"
                      ? "Silakan scan QR code di sidebar untuk menghubungkan perangkat"
                      : "Anda perlu terhubung ke WhatsApp untuk mengirim pesan"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

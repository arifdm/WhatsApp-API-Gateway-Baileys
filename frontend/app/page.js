"use client"; // Wajib karena menggunakan hooks dan socket

import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { QRCode } from "react-qr-code";

export default function Home() {
  const [sessionId, setSessionId] = useState("");
  const [sessions, setSessions] = useState({});
  const [qrData, setQrData] = useState(null);
  const socketRef = useRef(null);

  useEffect(() => {
    // Inisialisasi socket dengan port 5000
    socketRef.current = io("http://localhost:5000", {
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    // Setup event listeners
    const socket = socketRef.current;

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    socket.on("qr_generated", ({ sessionId, qr }) => {
      console.log("QR Received for session:", sessionId);
      setQrData({ sessionId, qr });
      setSessions((prev) => ({
        ...prev,
        [sessionId]: {
          ...prev[sessionId],
          qr,
          status: "waiting_qr_scan",
          lastUpdate: new Date().toISOString(),
        },
      }));
    });

    socket.on("status_change", ({ sessionId, status, reason }) => {
      console.log(`Status update for ${sessionId}:`, status, reason);
      setSessions((prev) => ({
        ...prev,
        [sessionId]: {
          ...prev[sessionId],
          status,
          reason,
          lastUpdate: new Date().toISOString(),
        },
      }));

      // Clear QR if connected
      if (status === "connected") {
        setQrData((prev) => (prev?.sessionId === sessionId ? null : prev));
      }
    });

    socket.on("session_ready", ({ sessionId }) => {
      console.log("Session ready:", sessionId);
      setSessions((prev) => ({
        ...prev,
        [sessionId]: {
          ...prev[sessionId],
          status: "initializing",
          lastUpdate: new Date().toISOString(),
        },
      }));
    });

    socket.on("session_exists", ({ sessionId }) => {
      alert(`Session ${sessionId} sudah ada!`);
    });

    socket.on("session_error", ({ sessionId, error }) => {
      setSessions((prev) => ({
        ...prev,
        [sessionId]: {
          ...prev[sessionId],
          status: "error",
          error,
          lastUpdate: new Date().toISOString(),
        },
      }));
    });

    socket.on("connection_timeout", ({ sessionId }) => {
      alert(`Koneksi untuk session ${sessionId} timeout!`);
      setSessions((prev) => ({
        ...prev,
        [sessionId]: {
          ...prev[sessionId],
          status: "timeout",
          lastUpdate: new Date().toISOString(),
        },
      }));
    });

    return () => {
      if (socketRef.current) socketRef.current.disconnect();
    };
  }, []);

  const startSession = () => {
    if (!sessionId.trim()) return;

    // Initialize session in state
    setSessions((prev) => ({
      ...prev,
      [sessionId]: {
        status: "starting",
        lastUpdate: new Date().toISOString(),
      },
    }));

    socketRef.current.emit("start_session", sessionId.trim());
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "connected":
        return "bg-green-50 border-green-200";
      case "connecting":
      case "starting":
      case "waiting_qr_scan":
        return "bg-yellow-50 border-yellow-200";
      case "disconnected":
      case "error":
      case "timeout":
        return "bg-red-50 border-red-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">WhatsApp Bot Manager</h1>

      <div className="flex gap-4 mb-8">
        <input
          type="text"
          value={sessionId}
          onChange={(e) => setSessionId(e.target.value)}
          placeholder="Masukkan Session ID"
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={startSession}
          disabled={!sessionId.trim()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Mulai Session
        </button>
      </div>

      {/* Current QR Display */}
      {qrData && (
        <div className="mb-8 p-4 bg-white rounded-lg shadow border border-blue-200">
          <h2 className="text-lg font-semibold mb-2">
            QR Code untuk Session: {qrData.sessionId}
          </h2>
          <div className="flex flex-col items-center">
            <QRCode value={qrData.qr} size={256} level="H" className="mb-2" />
            <p className="text-sm text-gray-600">
              Scan QR ini dengan WhatsApp di perangkat Anda
            </p>
          </div>
        </div>
      )}

      {/* Sessions List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(sessions).map(([id, session]) => (
          <div
            key={id}
            className={`p-4 rounded-lg shadow border ${getStatusColor(
              session.status
            )}`}
          >
            <h3 className="font-bold text-lg">{id}</h3>
            <div className="my-2">
              <p>
                Status:{" "}
                <span className="capitalize font-medium">
                  {session.status?.replace(/_/g, " ")}
                </span>
              </p>
              {session.reason && (
                <p className="text-sm text-gray-600 mt-1">
                  Alasan: {session.reason}
                </p>
              )}
              {session.error && (
                <p className="text-sm text-red-600 mt-1">
                  Error: {session.error}
                </p>
              )}
            </div>

            {session.qr && (
              <div className="mt-4">
                <QRCode
                  value={session.qr}
                  size={128}
                  level="H"
                  className="mx-auto"
                />
              </div>
            )}

            <p className="text-xs text-gray-500 mt-2">
              Terakhir update: {new Date(session.lastUpdate).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

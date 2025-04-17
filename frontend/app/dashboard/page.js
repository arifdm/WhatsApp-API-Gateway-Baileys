"use client";

import { useEffect, useState } from "react";
import { initializeSocket, getSocket } from "../lib/socket";
import SessionList from "../components/SessionList";
import QRCodeModal from "../components/QRCodeModal";
import ChatInterface from "../components/ChatInterface";

export default function Dashboard() {
  const [sessions, setSessions] = useState([]);
  const [activeSession, setActiveSession] = useState(null);
  const [qrData, setQrData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pendingQRSession, setPendingQRSession] = useState(null);

  useEffect(() => {
    // Initialize socket connection
    initializeSocket();
    const socket = getSocket();

    // Load initial sessions
    socket.emit("get-sessions");

    // Socket event handlers
    const onSessions = (data) => {
      setSessions(
        data.map((session) => ({
          sessionId: session.id,
          status: session.status,
          id: session.id, // Added for consistency
        }))
      );
    };

    const onQrGenerated = (data) => {
      console.log("QR Received:", data); // Log untuk debug
      if (data.sessionId === pendingQRSession) {
        setQrData(data.qr);
        setSessions((prev) =>
          prev.map((s) =>
            s.sessionId === data.sessionId ? { ...s, status: "awaiting_qr" } : s
          )
        );
      }
    };

    const onStatusChange = (data) => {
      setSessions((prev) =>
        prev.map((s) =>
          s.sessionId === data.sessionId ? { ...s, status: data.status } : s
        )
      );
    };

    const onSessionError = (data) => {
      setError(`Session ${data.sessionId} error: ${data.error}`);
      setSessions((prev) => prev.filter((s) => s.sessionId !== data.sessionId));
    };

    socket.on("sessions", onSessions);
    socket.on("qr_generated", onQrGenerated);
    socket.on("status_change", onStatusChange);
    socket.on("session_error", onSessionError);

    return () => {
      socket.off("sessions", onSessions);
      socket.off("qr_generated", onQrGenerated);
      socket.off("status_change", onStatusChange);
      socket.off("session_error", onSessionError);
    };
  }, [pendingQRSession]);

  const createNewSession = async () => {
    try {
      setIsLoading(true);
      const sessionId = `session_${Date.now()}`;
      const socket = getSocket();

      console.log("Emitting start_session for:", sessionId); // [!++]

      // [!++] Tambahkan timeout fallback
      const timeout = setTimeout(() => {
        setError("Server response timeout");
        setIsLoading(false);
      }, 10000);

      socket.emit("start_session", sessionId, (ack) => {
        clearTimeout(timeout);
        console.log("Server ACK:", ack); // [!++]
      });
    } catch (err) {
      console.error("Create session error:", err); // [!++]
      setError(err.message);
      setIsLoading(false);
    }
  };

  const disconnectSession = async (sessionId) => {
    try {
      const socket = getSocket();
      socket.emit("disconnect_session", sessionId);

      setSessions((prev) => prev.filter((s) => s.sessionId !== sessionId));

      if (activeSession?.sessionId === sessionId) {
        setActiveSession(null);
      }
    } catch (err) {
      setError("Failed to disconnect session: " + err.message);
    }
  };

  const closeQRModal = () => {
    setQrData(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          WhatsApp Chatbot Dashboard
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Sessions</h2>
              <button
                onClick={createNewSession}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50 cursor-pointer"
              >
                {isLoading ? "Creating..." : "New Session"}
              </button>
            </div>

            <SessionList
              sessions={sessions}
              onSelect={setActiveSession}
              onDisconnect={disconnectSession}
              isLoading={isLoading}
            />
          </div>

          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
            {activeSession ? (
              <ChatInterface session={activeSession} />
            ) : (
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-500">
                  {sessions.length > 0
                    ? "Select a session to view chat"
                    : "No active sessions"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {qrData && <QRCodeModal qrData={qrData} onClose={closeQRModal} />}
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { socket } from "../lib/socket";
import Sidebar from "../components/Sidebar";
import MessageForm from "../components/MessageForm";
import DisconnectedState from "../components/DisconnectedState";
import { createOrUpdateSession, getSession } from "../lib/sessionClient";

export default function Home() {
  const [sessionId, setSessionId] = useState("admin");
  const [qrCode, setQrCode] = useState(null);
  const [status, setStatus] = useState("disconnected");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [lastConnectionTime, setLastConnectionTime] = useState(null);

  // Socket event handlers
  useEffect(() => {
    const loadSession = async () => {
      try {
        const sessionData = await getSession(sessionId);
        if (sessionData?.status) {
          setStatus(sessionData.status);
          if (sessionData.status === "connected") {
            setLastConnectionTime(new Date(sessionData.updatedAt));
          }
        }
      } catch (error) {
        console.error("Failed to load session:", error);
      }
    };

    loadSession();
  }, [sessionId]);

  // Socket event handlers
  useEffect(() => {
    const handleQrGenerated = async (data) => {
      if (data.sessionId === sessionId) {
        setQrCode(data.qr);
        setStatus("awaiting_qr");
        await createOrUpdateSession(sessionId, "awaiting_qr");
      }
    };

    const handleStatusChange = async (data) => {
      if (data.sessionId === sessionId) {
        setStatus(data.status);
        await createOrUpdateSession(sessionId, data.status);
        if (data.status === "connected") {
          setQrCode(null);
          setLastConnectionTime(new Date());
        }
      }
    };

    socket.on("qr_generated", handleQrGenerated);
    socket.on("status_change", handleStatusChange);

    socket.on("message_received", (data) => {
      console.log("MESSAGE_RECEIVED", data);
    });

    // Start session on initial load
    socket.emit("start_session", sessionId);
    createOrUpdateSession(sessionId, "initializing");

    return () => {
      socket.off("qr_generated", handleQrGenerated);
      socket.off("status_change", handleStatusChange);
    };
  }, [sessionId]);

  const handleDisconnect = () => {
    socket.emit("logout_session", sessionId);
    setStatus("disconnected");
    setFeedback("Sesi telah diputuskan");
  };

  return (
    <main className="min-h-screen container mx-auto lg:w-7xl">
      <div className="p-4 md:p-8">
        <div className="flex flex-col md:flex-row gap-6">
          <Sidebar
            sessionId={sessionId}
            status={status}
            qrCode={qrCode}
            lastConnectionTime={lastConnectionTime}
            onDisconnect={handleDisconnect}
          />

          <div className="w-full md:w-2/3">
            {status === "connected" ? (
              <MessageForm
                number={number}
                message={message}
                feedback={feedback}
                onNumberChange={setNumber}
                onMessageChange={setMessage}
                onSendMessage={() => {
                  setFeedback("");
                  sendMessage(number, message, sessionId)
                    .then((data) => {
                      if (data?.success) {
                        setFeedback("Pesan berhasil dikirim!");
                      } else {
                        setFeedback("Gagal mengirim pesan.");
                      }
                    })
                    .catch(() => {
                      setFeedback("Terjadi kesalahan saat mengirim.");
                    });
                }}
              />
            ) : (
              <DisconnectedState status={status} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

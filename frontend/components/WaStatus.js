"use client";

import { createOrUpdateSession, getSession } from "@/lib/sessionClient";
import { socket } from "@/lib/socket";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function WaStatus({ sessionId, setSessionId }) {
  const [qrCode, setQrCode] = useState(null);
  const [status, setStatus] = useState("disconnected");
  const [feedback, setFeedback] = useState("");
  const [lastConnectionTime, setLastConnectionTime] = useState(null);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!sessionId) return;

    const handleQrGenerated = (data) => {
      if (data.sessionId === sessionId) {
        setQrCode(data.qr);
        setStatus("awaiting_qr");
        createOrUpdateSession(sessionId, "awaiting_qr");
      }
    };

    const handleStatusChange = (data) => {
      if (data.sessionId === sessionId) {
        setStatus(data.status);
        createOrUpdateSession(sessionId, data.status);

        if (data.status === "connected") {
          setQrCode(null);
          setLastConnectionTime(new Date());
        }
      }
    };

    const handleUserInfo = (data) => {
      if (data.sessionId === sessionId && data.phone) {
        setPhone(data.phone);
        createOrUpdateSession(sessionId, "connected", data.phone);
      }
    };

    const handleSessionError = (data) => {
      if (data.sessionId === sessionId) {
        setStatus("error");
        setFeedback(data.error);
      }
    };

    // Setup event listeners
    socket.on("qr_generated", handleQrGenerated);
    socket.on("status_change", handleStatusChange);
    socket.on("user_info", handleUserInfo);
    socket.on("session_error", handleSessionError);

    // Load initial session data
    const loadSession = async () => {
      try {
        const sessionData = await getSession(sessionId);
        if (sessionData) {
          setStatus(sessionData.status || "disconnected");
          if (sessionData.phone) setPhone(sessionData.phone);
          if (sessionData.status === "connected" && sessionData.updatedAt) {
            setLastConnectionTime(new Date(sessionData.updatedAt));
          }
        }
      } catch (error) {
        console.error("Failed to load session:", error);
      }
    };

    loadSession();

    // Start session
    socket.emit("start_session", sessionId);
    createOrUpdateSession(sessionId, "initializing");

    return () => {
      // Cleanup event listeners
      socket.off("qr_generated", handleQrGenerated);
      socket.off("status_change", handleStatusChange);
      socket.off("user_info", handleUserInfo);
      socket.off("session_error", handleSessionError);
    };
  }, [sessionId]);

  const handleDisconnect = () => {
    if (!sessionId) return;

    socket.emit("disconnect_session", sessionId);
    setStatus("disconnected");
    setFeedback("Sesi telah diputuskan");
    setPhone("");
  };

  return (
    <Sidebar
      sessionId={sessionId}
      status={status}
      qrCode={qrCode}
      phone={phone}
      lastConnectionTime={lastConnectionTime}
      feedback={feedback}
      onDisconnect={handleDisconnect}
    />
  );
}

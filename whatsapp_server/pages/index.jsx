import { useState, useEffect } from "react";
import io from "socket.io-client";

export default function WhatsAppBot() {
  const [sessionId, setSessionId] = useState("");
  const [sessions, setSessions] = useState({});
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Inisialisasi socket.io client
    const newSocket = io("http://localhost:3001");
    setSocket(newSocket);

    return () => {
      if (newSocket) newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    // Setup event listeners
    socket.on("qr", (data) => {
      setSessions((prev) => ({
        ...prev,
        [data.sessionId]: {
          ...prev[data.sessionId],
          qr: data.qr,
          status: "QR Code diperlukan",
          timestamp: data.timestamp,
        },
      }));
    });

    socket.on("status", (data) => {
      setSessions((prev) => ({
        ...prev,
        [data.sessionId]: {
          ...prev[data.sessionId],
          status: data.status,
          reason: data.reason || null,
          qr: data.status === "connected" ? null : prev[data.sessionId]?.qr,
        },
      }));
    });

    socket.on("error", (data) => {
      alert(`Error: ${data.message}`);
    });

    return () => {
      socket.off("qr");
      socket.off("status");
      socket.off("error");
    };
  }, [socket]);

  const startSession = () => {
    if (!sessionId.trim()) {
      alert("Masukkan Session ID terlebih dahulu");
      return;
    }
    socket.emit("start", sessionId.trim());
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>WhatsApp Bot Status</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={sessionId}
          onChange={(e) => setSessionId(e.target.value)}
          placeholder="Masukkan Session ID"
          style={{ padding: "8px", marginRight: "10px", width: "200px" }}
        />
        <button
          onClick={startSession}
          style={{
            padding: "8px 15px",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Mulai Session
        </button>
      </div>

      <div>
        {Object.entries(sessions).map(([id, session]) => (
          <div
            key={id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "5px",
              backgroundColor:
                session.status === "connected"
                  ? "#e6ffed"
                  : session.status === "disconnected"
                  ? "#ffebe9"
                  : "#fff",
            }}
          >
            <h3>Session: {id}</h3>
            <p>
              Status: <strong>{session.status}</strong>
            </p>
            {session.reason && <p>Alasan: {session.reason}</p>}

            {session.qr && (
              <div style={{ margin: "15px 0", textAlign: "center" }}>
                <p>Scan QR Code berikut:</p>
                <img
                  src={session.qr}
                  alt="QR Code"
                  style={{ maxWidth: "200px", border: "1px solid #ddd" }}
                />
                <p style={{ fontSize: "12px", color: "#666" }}>
                  Terakhir diperbarui:{" "}
                  {new Date(session.timestamp).toLocaleTimeString()}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

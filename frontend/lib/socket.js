import io from "socket.io-client";
import { createOrUpdateSession } from "./sessionService";

const socket = io(
  process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:5000"
);

// Tambahkan event listener untuk session created
socket.on("connect", async () => {
  console.log("Connected to socket server");
});

socket.on("session_created", async (data) => {
  try {
    await createOrUpdateSession(data.sessionId, "initializing");
    console.log(`Session ${data.sessionId} created in database`);
  } catch (error) {
    console.error("Failed to create session in database:", error);
  }
});

export { socket };

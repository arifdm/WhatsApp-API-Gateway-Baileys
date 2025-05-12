"use client";

import MessageForm from "@/components/MessageForm";
import { sendMessage } from "@/lib/api";
import { getSession } from "@/lib/sessionClient";
import { useEffect, useState } from "react";

export default function Page() {
  const sessionId = "admin"; // Replace with your actual session ID
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const loadSession = async () => {
      try {
        const sessionData = await getSession(sessionId);
        console.log("SESSION_DATA: ", sessionData);
      } catch (error) {
        console.error("Failed to load session:", error);
      }
    };

    loadSession();
  }, [sessionId]);

  return (
    <main className="flex-grow container mx-auto px-4 py-6 w-3xl">
      <h1 className="text-3xl font-bold mb-4">Kirim Pesan WhatsApp</h1>
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
    </main>
  );
}

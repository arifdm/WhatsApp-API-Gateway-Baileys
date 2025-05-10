"use client";

import MessageForm from "@/components/MessageForm";
import { sendMessage } from "@/lib/api";
import { useState } from "react";

export default function Page() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

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

// src/components/ChatInterface.js
"use client";

import { useState, useEffect } from "react";
import StatusIndicator from "./StatusIndicator";

export default function ChatInterface({ session }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    setMessages([
      {
        id: "1",
        text: "Hello, how can I help you?",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  }, [session]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    setIsSending(true);

    try {
      const userMessage = {
        id: Date.now().toString(),
        text: newMessage,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setNewMessage("");

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            text: "Thanks for your message! This is an automated response.",
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
      }, 1000);
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="border-b pb-4 mb-4">
        <div className="flex items-center space-x-3">
          <StatusIndicator status={session.status} />
          <div>
            <h2 className="text-xl font-semibold">
              {session.name || session.phone || session.sessionId}
            </h2>
            <p className="text-sm text-gray-500">
              {session.status === "connected" ? "Connected" : "Not connected"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <p>{message.text}</p>
              <p className="text-xs mt-1 opacity-70">
                {new Date(message.timestamp).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={session.status !== "connected"}
          />
          <button
            onClick={handleSendMessage}
            disabled={isSending || session.status !== "connected"}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}

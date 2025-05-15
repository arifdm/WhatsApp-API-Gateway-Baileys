"use client";

import ListStatusDevices from "@/components/ListStatusDevices";
import WaStatus from "@/components/WaStatus";
import { createOrUpdateSession } from "@/lib/sessionClient";
import { socket } from "@/lib/socket";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [sessionId, setSessionId] = useState("");
  const [lastConnectionTime, setLastConnectionTime] = useState(null);
  const [qrCode, setQrCode] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!sessionId) return;

    socket.on("message_received", (data) => {
      console.log("MESSAGE_RECEIVED", data);
      if (
        data.sessionId === sessionId &&
        data.from.endsWith("@s.whatsapp.net")
      ) {
        // console.log("Pesan diterima:", data.message);
        const phone = data.from.split("@")[0];
        createOrUpdateSession(sessionId, "connected", phone).then((res) => {
          if (res) router.push("/");
        });
      }
    });
  }, [sessionId]);

  const handleAddSession = (newSessionId) => {
    setSessionId(newSessionId);
    setQrCode(null);
    setStatus("initializing");
    setLastConnectionTime(null);

    socket.emit("start_session", newSessionId);
    createOrUpdateSession(newSessionId, "initializing");
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-6 w-7xl">
      <div className="flex flex-col md:flex-row gap-6">
        <WaStatus sessionId={sessionId} setSessionId={setSessionId} />
        <div className="w-full md:w-4/5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newSessionId = e.target.elements.sessionId.value.trim();
              if (newSessionId) {
                handleAddSession(newSessionId);
              }
            }}
            className="flex flex-row gap-4 rounded-lg bg-white shadow-md p-4 mb-6"
          >
            <input
              type="text"
              name="sessionId"
              placeholder="Masukkan Session ID"
              className="border border-gray-400 rounded px-4 w-full mb-2 h-[45px] focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 rounded hover:bg-green-500 w-sm h-[45px] flex items-center justify-center cursor-pointer"
            >
              Tambah Device
            </button>
          </form>
          <ListStatusDevices
            sessionId={sessionId}
            setSessionId={setSessionId}
          />
        </div>
      </div>
    </main>
  );
}

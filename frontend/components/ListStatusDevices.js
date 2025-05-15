"use client";

import { createOrUpdateSession, getAllSession } from "@/lib/sessionClient";
import { socket } from "@/lib/socket";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ListStatusDevices({ sessionId, setSessionId }) {
  const router = useRouter();
  const [status, setStatus] = useState("disconnected");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const sessionData = await getAllSession();
        if (sessionData) {
          setData(sessionData);
        }
      } catch (error) {
        console.error("Failed to load session:", error);
      }
    };

    getData();
  }, []);

  const handleDisconnect = (id) => {
    socket.emit("disconnect_session", id);
    setStatus("disconnected");
    setSessionId(id);
    createOrUpdateSession(id, "disconnected");
  };

  const handleConnect = (id) => {
    socket.emit("connect_session", id);
    setStatus("connected");
    setSessionId(id);
    createOrUpdateSession(id, "connected");
  };

  console.log("SESSION_ID: ", sessionId);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-gray-800 mb-6">Daftar Device</h3>
        {data.length > 0 ? (
          data.map((session) => (
            <div
              key={session.sessionId}
              className="flex flex-row items-center justify-between mb-3 pb-3 border-b border-gray-200"
            >
              <div className="text-gray-500 text-md items-center flex gap-2 font-bold">
                <div
                  className={`w-2 h-2 rounded-full ${
                    session.status === "connected"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                />
                {session.sessionId}{" "}
                <div className="rounded-md px-2 py-1 bg-gray-100 text-gray-500 text-sm font-normal">
                  {session.phone}
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center">
                {session.userId && (
                  <div className="text-gray-500 text-sm">{session.userId}</div>
                )}
                <div className="text-gray-500 text-sm">
                  {new Date(session.createdAt).toLocaleString()}
                  {", "}
                </div>
                {/* <div className="text-gray-500 text-sm italic">
                  {session.status}
                </div> */}
                {session.status === "connected" || session.status === "open" ? (
                  <div
                    className="rounded-md px-2 py-1 bg-green-600 text-white text-sm cursor-pointer hover:bg-green-500"
                    onClick={() => handleDisconnect(session.sessionId)}
                  >
                    Connect
                  </div>
                ) : (
                  <div
                    className="rounded-md px-2 py-1 bg-red-600 text-white text-sm cursor-pointer hover:bg-red-500"
                    onClick={() => handleConnect(session.sessionId)}
                  >
                    Disconnect
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">
            Tidak ada perangkat yang terhubung.
          </div>
        )}
      </div>
    </div>
  );
}

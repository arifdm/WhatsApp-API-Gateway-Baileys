// src/components/SessionList.js
"use client";

import StatusIndicator from "./StatusIndicator";

export default function SessionList({
  sessions,
  onSelect,
  onDisconnect,
  isLoading,
}) {
  console.log("Sessions:", sessions);

  return (
    <div className="space-y-4">
      {isLoading && sessions.length === 0 ? (
        <p className="text-gray-500">Loading sessions...</p>
      ) : sessions.length === 0 ? (
        <p className="text-gray-500">No sessions available</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {/* {sessions.map((session) => (
            <li key={session.sessionId} className="py-3">
              <div
                className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded"
                onClick={() => onSelect(session)}
              >
                <div className="flex items-center space-x-3">
                  <StatusIndicator status={session.status} />
                  <div>
                    <p className="font-medium text-gray-900">
                      {session.name || session.phone || session.sessionId}
                    </p>
                    <p className="text-sm text-gray-500">{session.sessionId}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {session.status === "connected" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDisconnect(session.sessionId);
                      }}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Disconnect
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))} */}
        </ul>
      )}
    </div>
  );
}

// src/components/StatusIndicator.js
"use client";

export default function StatusIndicator({ status }) {
  const getStatusColor = () => {
    switch (status) {
      case "connected":
        return "bg-green-500";
      case "connecting":
        return "bg-yellow-500";
      case "disconnected":
      case "logged_out":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <span className="flex items-center">
      <span className={`h-3 w-3 rounded-full ${getStatusColor()}`}></span>
    </span>
  );
}

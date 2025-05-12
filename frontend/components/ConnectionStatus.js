export default function ConnectionStatus({ status, onDisconnect }) {
  const getStatusColor = () => {
    switch (status) {
      case "connected":
        return "bg-green-100 text-green-800";
      case "disconnected":
        return "bg-red-100 text-red-800";
      case "awaiting_qr":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case "connected":
        return "Terhubung";
      case "disconnected":
        return "Terputus";
      case "awaiting_qr":
        return "Menunggu Scan QR";
      default:
        return status;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor()}`}>
        {getStatusLabel()}
      </span>
      {status === "connected" && (
        <button
          onClick={onDisconnect}
          className="text-sm bg-red-300 hover:bg-red-400 text-white px-3 py-1 rounded-full transition duration-200 cursor-pointer"
        >
          Putuskan
        </button>
      )}
    </div>
  );
}

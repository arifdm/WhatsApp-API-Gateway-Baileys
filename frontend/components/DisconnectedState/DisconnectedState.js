export default function DisconnectedState({ status }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center min-h-[300px]">
      <div className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mx-auto text-gray-400 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          {status === "awaiting_qr"
            ? "Menunggu Scan QR Code"
            : "Tidak Terhubung"}
        </h3>
        <p className="text-gray-500">
          {status === "awaiting_qr"
            ? "Silakan scan QR code di sidebar untuk menghubungkan perangkat"
            : "Anda perlu terhubung ke WhatsApp untuk mengirim pesan"}
        </p>
      </div>
    </div>
  );
}

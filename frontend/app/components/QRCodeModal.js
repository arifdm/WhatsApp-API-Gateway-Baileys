// src/components/QRCodeModal.js
"use client";

export default function QRCodeModal({ qrData, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Scan QR Code</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center">
          <p className="mb-4 text-sm text-gray-600">
            Session: {qrData.sessionId}
          </p>
          <img
            src={qrData.qr}
            alt="WhatsApp QR Code"
            className="w-64 h-64 border border-gray-200"
          />
          <p className="mt-4 text-sm text-gray-600">
            Scan this QR code with your WhatsApp mobile app
          </p>
        </div>
      </div>
    </div>
  );
}

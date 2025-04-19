import QRCode from "react-qr-code";

export default function QRCodeDisplay({ qrCode }) {
  return (
    <div className="pt-4">
      <h2 className="text-sm font-medium text-gray-500 mb-2">Scan QR Code</h2>
      <div className="bg-white p-2 rounded border border-gray-200">
        <QRCode
          value={qrCode}
          size={200}
          className="mx-auto"
          style={{ width: "200px" }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-2 text-center">
        Buka WhatsApp &gt; Menu &gt; Perangkat Tertaut &gt; Pindai Kode QR
      </p>
    </div>
  );
}

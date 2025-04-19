import ConnectionStatus from "../ConnectionStatus";
import QRCodeDisplay from "../QRCodeDisplay";

export default function Sidebar({
  sessionId,
  status,
  qrCode,
  lastConnectionTime,
  onDisconnect,
}) {
  return (
    <div className="w-full md:w-1/3">
      <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          WhatsApp Bot Dashboard
        </h1>

        <div className="space-y-4">
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-1">
              Session ID
            </h2>
            <p className="text-lg font-semibold text-gray-800">{sessionId}</p>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-1">
              Status Koneksi
            </h2>
            <ConnectionStatus status={status} onDisconnect={onDisconnect} />
          </div>

          {lastConnectionTime && status === "connected" && (
            <div>
              <h2 className="text-sm font-medium text-gray-500 mb-1">
                Terhubung Sejak
              </h2>
              <p className="text-gray-800 text-sm">
                {lastConnectionTime.toLocaleString()}
              </p>
            </div>
          )}

          {status === "awaiting_qr" && qrCode && (
            <QRCodeDisplay qrCode={qrCode} />
          )}
        </div>
      </div>
    </div>
  );
}

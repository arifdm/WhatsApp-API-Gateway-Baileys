export default function MessageForm({
  number,
  message,
  feedback,
  onNumberChange,
  onMessageChange,
  onSendMessage,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Kirim Pesan WhatsApp
        </h2>
        <p className="text-sm text-gray-500">
          Kirim pesan ke nomor WhatsApp tujuan
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="number"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nomor WhatsApp
          </label>
          <input
            id="number"
            type="text"
            placeholder="Contoh: 6281234567890"
            value={number}
            onChange={(e) => onNumberChange(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            Gunakan format kode negara tanpa tanda '+' atau '0' di depan
          </p>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Isi Pesan
          </label>
          <textarea
            id="message"
            placeholder="Tulis pesan yang akan dikirim..."
            value={message}
            onChange={(e) => onMessageChange(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <button
          onClick={onSendMessage}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 cursor-pointer"
        >
          Kirim Pesan
        </button>

        {feedback && (
          <div
            className={`p-3 rounded-lg ${
              feedback.includes("berhasil")
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
}

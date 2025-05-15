import axios from "axios";

export const sendMessage = async (number, message, sessionId) => {
  if (!number || !message || !sessionId) {
    throw new Error(
      "All parameters (number, message, sessionId) are required."
    );
  }

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SOCKET_URL}/send-message`,
      { number, message, sessionId }
    );
    return res?.data;
  } catch (err) {
    console.error("Error sending message:", err);
    throw err;
  }
};

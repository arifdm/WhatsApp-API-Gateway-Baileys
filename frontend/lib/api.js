import axios from "axios";

export const sendMessage = async (number, message, sessionId) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SOCKET_URL}/send-message`,
      { number, message, sessionId }
    );
    return res?.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

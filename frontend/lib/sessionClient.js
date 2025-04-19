import axios from "axios";

export const createOrUpdateSession = async (
  sessionId,
  status,
  phone = null,
  name = null
) => {
  const response = await axios.post("/api/sessions", {
    sessionId,
    status,
    phone,
    name,
  });

  if (!response) {
    console.log("Error response:", response);
    // throw new Error("Failed to update session");
  }

  return await response.data;
};

export const getSession = async (sessionId) => {
  const response = await axios.get(`/api/sessions?sessionId=${sessionId}`);
  console.log("RESPONSE_SESSION", response.data);

  if (!response) {
    throw new Error("Failed to get session");
  }

  return await response.data;
};

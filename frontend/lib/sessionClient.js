import axios from "axios";

export const createOrUpdateSession = async (
  sessionId,
  status,
  phone = null,
  userId = null
) => {
  const response = await axios.post("/api/sessions", {
    sessionId,
    status,
    phone,
    userId,
  });

  if (!response) {
    console.log("Error response:", response);
    // throw new Error("Failed to update session");
  }

  return await response.data;
};

export const getSession = async (sessionId) => {
  if (!sessionId) {
    throw new Error("Session ID is required");
  }

  const response = await axios.get(`/api/sessions/${sessionId}`);
  // console.log("RESPONSE_SESSION", response.data);

  if (!response) {
    throw new Error("Failed to get session");
  }

  return await response.data;
};

export const getAllSession = async () => {
  const response = await axios.get("/api/sessions");
  // console.log("RESPONSE_SESSION", response.data);

  if (!response) {
    throw new Error("Failed to get session");
  }

  return await response.data;
};

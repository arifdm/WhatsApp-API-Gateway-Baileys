export const createOrUpdateSession = async (
  sessionId,
  status,
  phone = null,
  name = null
) => {
  const response = await fetch("/api/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sessionId, status, phone, name }),
  });
  return await response.json();
};

export const getSession = async (sessionId) => {
  const response = await fetch(`/api/sessions?sessionId=${sessionId}`);
  return await response.json();
};

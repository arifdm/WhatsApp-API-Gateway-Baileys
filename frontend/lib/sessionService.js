import prisma from "./prisma";

export const createOrUpdateSession = async (
  sessionId,
  status,
  phone = null,
  name = null
) => {
  return await prisma.sessionFrontEnd.upsert({
    where: { sessionId },
    update: {
      status,
      phone,
      name,
      updatedAt: new Date(),
    },
    create: {
      sessionId,
      status,
      phone,
      name,
    },
  });
};

export const getSession = async (sessionId) => {
  return await prisma.sessionFrontEnd.findUnique({
    where: { sessionId },
  });
};

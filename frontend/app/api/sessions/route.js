import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { sessionId, status, phone, name } = await request.json();

    const session = await prisma.sessionFrontEnd.upsert({
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

    return NextResponse.json(session);
  } catch (error) {
    console.error("Session API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("sessionId");
    console.log("SESSION_ID", sessionId);

    const session = await prisma.sessionFrontEnd.findUnique({
      where: { sessionId },
    });

    return NextResponse.json(session || {});
  } catch (error) {
    console.error("Session API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

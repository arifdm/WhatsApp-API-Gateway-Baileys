import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id: sessionId } = await params;
  console.log("SESSION_ID", sessionId);

  if (!sessionId) {
    return NextResponse.json(
      { error: "Session ID is required" },
      { status: 400 }
    );
  }

  try {
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

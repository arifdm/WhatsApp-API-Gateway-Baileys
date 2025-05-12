import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { sessionId, status, phone, userId } = await request.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }
    if (!status) {
      return NextResponse.json(
        { error: "Status is required" },
        { status: 400 }
      );
    }

    const session = await prisma.sessionFrontEnd.upsert({
      where: { sessionId },
      update: {
        status,
        phone,
        userId,
        updatedAt: new Date(),
      },
      create: {
        sessionId,
        status,
        phone,
        userId,
      },
    });
    // console.log("SESSION_CREATED: ", session);

    return NextResponse.json(session);
  } catch (error) {
    console.error("Session API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const sessions = await prisma.sessionFrontEnd.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
    // console.log("SESSION_CREATED: ", session);

    return NextResponse.json(sessions || []);
  } catch (error) {
    console.error("Session API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function DELETE(request) {
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

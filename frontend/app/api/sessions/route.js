// src/app/api/sessions/route.js
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
  try {
    const sessions = await prisma.session.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(sessions);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch sessions" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { sessionId } = await request.json();

    const newSession = await prisma.session.create({
      data: {
        sessionId,
        status: "connecting",
      },
    });

    return NextResponse.json(newSession);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create session" },
      { status: 500 }
    );
  }
}

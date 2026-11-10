import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json(
      {
        success: true,
        message: "Concierge dispatch successfully documented.",
        sender: body.name || body.email || "guest",
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid contact inquiry." },
      { status: 400 }
    );
  }
}

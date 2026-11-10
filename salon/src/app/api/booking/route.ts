import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Generate unique atelier reference
    const referenceCode = `C4U-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json(
      {
        success: true,
        referenceCode,
        message: "Studio appointment successfully reserved.",
        booking: {
          ...body,
          confirmedAt: new Date().toISOString(),
          status: "confirmed",
        },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid reservation payload." },
      { status: 400 }
    );
  }
}

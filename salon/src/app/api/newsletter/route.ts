import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json(
      {
        success: true,
        message: "Email registered to editorial journal dispatch.",
        email: body.email,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid email subscription." },
      { status: 400 }
    );
  }
}

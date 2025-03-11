import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { cookieName, cookieValue } = await request.json();

  const response = NextResponse.json({ message: "Cookie created" });
  response.cookies.set(cookieName, cookieValue, { path: "/" });

  return response;
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { cookieName, cookieValue } = await request.json();

  const response = NextResponse.json({ message: "Cookie created" });

  response.headers.set(
    "Set-Cookie",
    `${cookieName}=${cookieValue}; Path=/; Max-Age=31536000; Secure; HttpOnly`
  );

  return response;
}

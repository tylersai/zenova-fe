import { ACCESS_TOKEN_KEY } from "@/utils/constant";
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set(ACCESS_TOKEN_KEY, "", {
    expires: new Date(0), // Expire immediately
  });

  return response;
}

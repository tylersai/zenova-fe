import { cookies } from "next/headers";
import "server-only";

export const createSession = async (accessToken: string) => {
  const cookieStore = await cookies();
  cookieStore.set("session", accessToken, {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });
};

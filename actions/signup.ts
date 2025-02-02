"use server";

import { ACCESS_TOKEN_KEY, ApiUrl } from "@/utils/constant";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type FormState = { errorMessage: string } | undefined;

export const signupAction = async (state: FormState, data: FormData) => {
  const cookieStore = await cookies();

  const name = data.get("name");
  const email = data.get("email");
  const password = data.get("password");
  const resp = await fetch(`${ApiUrl.SIGNUP}`, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!resp.ok) {
    const { message } = (await resp.json()) as { message: string | string[] };
    console.error(message);
    return { errorMessage: typeof message === "string" ? message : message[0] };
  } else {
    const { access_token } = await resp.json();
    cookieStore.set(ACCESS_TOKEN_KEY, access_token);
    redirect("/");
  }
};

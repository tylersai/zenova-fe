"use server";

import { ACCESS_TOKEN_KEY, ApiUrl } from "@/utils/constant";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type FormState = { errorMessage: string } | undefined;

export const loginAction = async (state: FormState, data: FormData) => {
  const cookieStore = await cookies();

  const email = data.get("email");
  const password = data.get("password");
  const resp = await fetch(`${ApiUrl.LOGIN}`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (resp.status === 401) {
    return { errorMessage: "Incorrect email and password" };
  }
  if (!resp.ok) {
    const { message } = (await resp.json()) as { message: string | string[] };
    console.error(message);
    return { errorMessage: typeof message === "string" ? message : message[0] };
  } else {
    const { access_token } = await resp.json();
    cookieStore.set(ACCESS_TOKEN_KEY, access_token, {
      sameSite: "lax",
      path: "/",
    });
    redirect("/");
  }
};

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
    cookieStore.set(ACCESS_TOKEN_KEY, access_token, {
      sameSite: "lax",
      path: "/",
    });
    redirect("/");
  }
};

export const logoutAction = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(ACCESS_TOKEN_KEY);
};

// "use server";

import { ACCESS_TOKEN_KEY, ApiUrl } from "@/utils/constant";
import { redirect } from "next/navigation";

export type FormState = { errorMessage: string } | undefined;

export const loginAction = async (state: FormState, data: FormData) => {
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
    localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
    redirect("/");
  }
};

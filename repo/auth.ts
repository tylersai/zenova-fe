import { ApiUrl } from "@/utils/constant";
import { getBearerToken } from "@/utils/helper";

// export const processLogin = async (payload: { email: string; password: string }) => {
//   const resp = await fetch(`${ApiUrl.LOGIN}`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });
//   const result = await resp.json();
//   return result;
// };

// export const processSignup = async (payload: { name?: string; email: string; password: string }) => {
//   const resp = await fetch(`${ApiUrl.LOGIN}`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });
//   const result = await resp.json();
//   return result;
// };

export const getProfile = async (accessToken?: string) => {
  const url = `${ApiUrl.PROFILE}`;
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken ? `Bearer ${accessToken}` : getBearerToken(),
    },
  });
  const result = await resp.json();
  return result;
};

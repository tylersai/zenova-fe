import { ApiUrl } from "@/utils/constant";
import { getBearerToken } from "@/utils/helper";

export const getProfile = async (accessToken?: string) => {
  const url = `${ApiUrl.PROFILE}`;
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken ? `Bearer ${accessToken}` : getBearerToken(),
    },
  });
  const { ok, status, statusText } = resp;
  if (!ok) {
    return { status, statusText };
  }
  const result = await resp.json();
  return result;
};

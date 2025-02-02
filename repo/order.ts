import { ApiUrl } from "@/utils/constant";
import { getBearerToken } from "@/utils/helper";

export const getMyOrders = async (accessToken?: string) => {
  const url = `${ApiUrl.MY_ORDERS}`;
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

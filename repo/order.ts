import { ApiUrl } from "@/utils/constant";
import { getBearerToken } from "@/utils/helper";

export const getMyOrders = async () => {
  const url = `${ApiUrl.MY_ORDERS}`;
  const resp = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: getBearerToken() },
  });
  const result = await resp.json();
  return result;
};

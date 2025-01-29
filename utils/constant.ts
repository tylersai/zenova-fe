export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

export const ApiUrl = {
  PRODUCT: `${BASE_URL}/product`,
  CATEGORY: `${BASE_URL}/category`,
  ORDER: `${BASE_URL}/order`,
  MY_ORDERS: `${BASE_URL}/order/my-orders`,
  LOGIN: `${BASE_URL}/auth/login`,
  SIGNUP: `${BASE_URL}/auth/signup`,
  PROFILE: `${BASE_URL}/auth/profile`,
};

export const ACCESS_TOKEN_KEY = "access_token";

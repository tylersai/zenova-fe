import { ACCESS_TOKEN_KEY } from "./constant";

export const formatMoney = (amount: number): string => {
  return amount.toLocaleString("en-US", { useGrouping: true, minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export const getFormValue = (inputId: string): string => {
  const el = document.getElementById(inputId);
  if (el) {
    const inputEl = el as HTMLInputElement;
    return inputEl.value;
  } else return "";
};

export const getBearerToken = () => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (token) {
    return `Bearer ${token}`;
  }
  return "";
};

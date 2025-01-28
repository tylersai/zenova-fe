export const formatMoney = (amount: number): string => {
  return amount.toLocaleString("en-US", { useGrouping: true, minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

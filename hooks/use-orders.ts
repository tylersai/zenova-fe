import { useEffect, useState } from "react";
import { getBearerToken } from "@/utils/helper";
import { getMyOrders } from "@/repo/order";
import { CreateOrderPayload } from "@/types/order";

export type Order = CreateOrderPayload & { id: string; createdAt: Date };

export const useMyOrders = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null);
  const [data, setData] = useState<Order[]>([]);

  const fetchData = async () => {
    setLoading(true);
    const res = await getMyOrders();
    setLoading(false);
    if (res.statuCode && res.statuCode !== 200) {
      setError(res);
    } else {
      setData(res as Order[]);
    }
  };

  useEffect(() => {
    if (getBearerToken()) {
      fetchData();
    } else {
      setData([]);
    }
  }, []);

  return {
    loading,
    error,
    data,
  };
};

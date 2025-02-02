import { useEffect, useState } from "react";
import { getMyOrders } from "@/repo/order";
import { CreateOrderPayload } from "@/types/order";
import { useAppSelector } from "@/redux/hooks";

export type Order = CreateOrderPayload & { id: string; createdAt: Date };

export const useMyOrders = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null);
  const [data, setData] = useState<Order[]>([]);

  const fetchData = async () => {
    setLoading(true);
    const res = await getMyOrders(accessToken);
    setLoading(false);
    if (res.statuCode && res.statuCode !== 200) {
      setError(res);
    } else {
      setData(res as Order[]);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchData();
    } else {
      setData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return {
    loading,
    error,
    data,
  };
};

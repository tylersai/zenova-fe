import { useEffect, useState } from "react";
import { getProfile } from "@/repo/auth";
import { Profile } from "@/types/user";
import { getBearerToken } from "@/utils/helper";

export const useProfile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null);
  const [data, setData] = useState<Profile | null>(null);

  const fetchData = async () => {
    if (getBearerToken()) {
      setLoading(true);
      const res = await getProfile();
      const { statuCode, name, email } = res;
      setLoading(false);
      if (statuCode && statuCode !== 200) {
        setError(res);
      } else {
        setData({ name, email });
      }
    } else {
      setData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    error,
    data,
    fetchData,
  };
};

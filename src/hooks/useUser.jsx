"use client";
import { useEffect, useState } from "react";
import { getUser } from "@/lib/actions";

export const useUser = (shouldRefetch = false) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const userData = await getUser();
      setUser(userData);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [shouldRefetch]); // refetch when shouldRefetch changes

  return { user, loading, refetch: fetchUser };
};

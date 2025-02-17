"use client";

import { useSession } from "next-auth/react";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../config/config";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      const fetchUser = async () => {
        try {
          const res = await axios.post(`${baseUrl}api/user`, {
            email: session.user.email,
          });
          setUser(res.data);
        } catch (error) {
          console.error("Error fetchingsss user:", error);
        }
      };
      fetchUser();
    }
  }, [session?.user, status]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;

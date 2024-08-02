"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    const minLength = /.{8,}/;
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const number = /[0-9]/;
    const symbol = /[@%!#]/;
    return (
      minLength.test(password) &&
      upperCase.test(password) &&
      lowerCase.test(password) &&
      number.test(password) &&
      symbol.test(password)
    );
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!validatePassword(newPassword)) {
      setPasswordError(
        "Enter at least 8 characters, an uppercase letter, a lowercase letter, a number, and a symbol (@, %, !, #)."
      );
    } else {
      setPasswordError("");
    }
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <AuthContext.Provider
      value={{
        password,
        passwordError,
        handlePasswordChange,
        responsive,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

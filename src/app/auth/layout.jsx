"use client";

import React from "react";
import Sidebar from "@/components/layouts/Sidebar";
import Navbar from "@/components/shared/NavBar/nav";

const AuthLayout = ({ children }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row h-screen justify-between items-center">
        <Sidebar Header="" Message="" />
        <div className="flex flex-col h-screen lg:pr-12 md:ml-[46%] lg:ml-[50%] w-full justify-center items-center overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;

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
      <div className="flex w-full h-screen items-center justify-center gap-8">
        <div className="w-[40%] hidden md:flex flex-col bg-secondary h-screen border-r border-appAsh2 h-full bg-appPink">
          <Sidebar Header="" Message="" />
        </div>
        <div className="flex flex-col mx-auto w-full md:w-[50%] justify-center items-center overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;

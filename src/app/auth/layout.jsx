"use client";

import React from "react";
import Sidebar from "@/components/layouts/Sidebar";
import Navbar from "@/components/shared/NavBar/nav";

const AuthLayout = ({ children }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='flex flex-col md:flex-row w-full h-full justify-between overflow-y-hidden items-center'>
      <div className='w-[45%] bg-green-400 h-full'>
        <Sidebar Header='Hello ' Message='' />
      </div>
      <div className='flex flex-row h-screen lg:pr-12 w-full md:w-[55%] justify-center overflow-y-scroll items-center'>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

"use client";

import React from "react";
import Sidebar from "@/components/layouts/Sidebar";
import Navbar from "@/components/shared/NavBar/nav";

const AuthLayout = ({ children }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='flex flex-col  md:flex-row w-full h-screen justify-between overflow-y-hidden items-center'>
      <div className='w-[50%] hidden md:flex bg-green-400'>
        <Sidebar Header='Hello ' Message='' />
      </div>
      <div className='flex   justify-center items-center w-full lg:w-[50%] h-screen overflow-y-auto'>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

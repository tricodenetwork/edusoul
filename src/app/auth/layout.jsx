"use client";

import React from "react";
import Sidebar from "@/components/layouts/Sidebar";
import Navbar from "@/components/shared/NavBar/nav";

const AuthLayout = ({ children }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='flex flex-col md:flex-row w-full h-screen justify-between overflow-y-hidden items-center'>
      <div className='fixed w-[45%] bg-green-400'>
        <Sidebar Header='Hello ' Message='' />
      </div>
      <div className='flex flex-col mx-auto mt-14 md:mt-4 md:mb-14 md:pr-5 md:pl-[47%] lg:pl-[50%] justify-center items-center w-full h-screen overflow-y-auto'>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

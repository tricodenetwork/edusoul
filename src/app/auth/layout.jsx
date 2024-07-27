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
      <div className='flex flex-row h-screen justify-between items-center'>
        <Sidebar Header='' Message='' />
        <div className='flex flex-col mx-auto md:ml-[18rem] lg:ml-[29rem] xl:ml-[35rem] justify-center items-center w-full lg:w-[50%] overflow-y-auto'>
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;

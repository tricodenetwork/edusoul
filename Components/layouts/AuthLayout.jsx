import React from "react";

import Sidebar from "@/Components/layouts/Sidebar";
import Navbar from "@/Components/shared/NavBar/nav";
const AuthLayout = (children) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <>
      <Navbar />
      <div className="flex flex-row h-screen justify-between items-center">
        <Sidebar Header="" Message="" />
        <div className="flex flex-col md:px-14 md:ml-[24rem] xl:ml-[30rem] justify-center items-center md:w-[80%] overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;

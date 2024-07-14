import React from "react";
import Sidebar from "@/Components/layouts/Sidebar";
// import Navbar from "@/Components/shared/NavBar/nav";

const AuthLayout = (children) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex flex-row h-screen justify-between items-center">
        <Sidebar Header="" Message="" />
        <div className="flex flex-col mx-auto md:ml-[18rem] lg:ml-[27rem] xl:ml-[30rem] justify-center items-center w-full overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;

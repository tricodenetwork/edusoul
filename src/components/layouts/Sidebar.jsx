"use client";

import useFunctions from "@/hooks/useFunctions";
import Image from "next/image";

const Sidebar = ({ Header, Message }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS
  const { imageLoader } = useFunctions();

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className="hidden md:flex pt-[8em] p-10 flex-col justify-between items-center sm:w-[16em] md:w-[45%] bg-secondary h-screen fixed overflow-y-auto">
      <div className="relative w-[90%] h-[207px] lg:w-[80%] lg:h-[307px]">
        <Image
          loader={imageLoader}
          alt="logo"
          fill
          className=""
          src="/assets/images/sidebar_img.png"
        />
      </div>
      <p className="flex text-black xl:text-2xl font-bold w-[70%] text-center">
        Join Us As We Take Your Christ-centered Education to the next level
      </p>
    </div>
  );
};

export default Sidebar;

"use client";

import useFunctions from "@/hooks/useFunctions";
import Image from "next/image";

const Sidebar = ({ Header, Message }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS
  const { imageLoader } = useFunctions();

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className="fixed flex px-6 py-10 mt-[6rem] xl:mt-[8rem] flex-col justify-center items-start">
      <div className="relative w-[70%] h-[227px] xl:w-[60%] xl:h-[307px]">
        <Image
          loader={imageLoader}
          alt="logo"
          fill
          className=""
          src="/assets/images/sidebar_img.png"
        />
      </div>
      <p className="flex text-black xl:text-2xl font-bold w-[70%] text-center mt-[5rem]">
        Join Us As We Take Your Christ-centered Education to the next level
      </p>
    </div>
  );
};

export default Sidebar;

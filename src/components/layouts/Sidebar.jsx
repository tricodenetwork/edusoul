"use client";

import useFunctions from "@/hooks/useFunctions";
import Image from "next/image";

const Sidebar = ({ Header, Message }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS
  const { imageLoader } = useFunctions();

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className="fixed hidden md:flex px-6 py-10 flex-col sm:w-[16em] md:w-[16em] lg:w-[25em] xl:w-[30em] bg-secondary h-screen justify-center">
      <div className="flex flex-col gap-2">
        <div className="h-[22rem]">
          <Image
            loader={imageLoader}
            alt="logo"
            width={350}
            height={260}
            className=""
            src="/assets/images/sidebar_img.png"
          />
        </div>
        <p className="flex text-black font-bold w-full text-center mt-0 xl:mt-[10rem]">
          Join Us As We Take Your Christ-centered Education to the next level
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

"use client";

import useFunctions from "@/hooks/useFunctions";
import Image from "next/image";
import { Montserrat } from "next/font/google";
const mont = Montserrat({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic"],
});

const Sidebar = ({ Header, Message }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS
  const { imageLoader } = useFunctions();

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='hidden relative md:flex pt-[11em] p-10 flex-col justify-start items-center md:w-full bg-primary h-screen'>
      <div className='relative flex items-center justify-center w-[90%] h-[207px] lg:w-[80%] lg:h-[307px]'>
        <Image
          alt='logo'
          width={24}
          height={24}
          className='object-cover absolute top-0 left-0'
          src='/assets/icons/star.svg'
        />
        <Image
          alt='logo'
          width={24}
          height={24}
          className='object-cover absolute bottom-0 right-0 '
          src='/assets/icons/star.svg'
        />
        <Image
          loader={imageLoader}
          alt='logo'
          width={113.5}
          height={119.5}
          className='object mr-5'
          src='/assets/icons/logo.svg'
        />
        <h5
          style={mont.style}
          className='text-[56px] text-white  italic font-bold'
        >
          Edusoul
        </h5>
      </div>
      <p className='flex text-appPink xl:text-2xl absolute bottom-[8%] font-bold w-[70%] text-center'>
        Join Us As We Take Your Christ-centered Education to the next level
      </p>
    </div>
  );
};

export default Sidebar;

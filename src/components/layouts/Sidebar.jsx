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
    <div className='hidden relative md:flex  p-10 flex-col justify-center items-center md:w-full bg-[#FFF5F6] h-screen'>
      <div className='relative flex  mb-0  items-center justify-center w-max h-[207px] lg:w-[75%] lg:h-max py-6 px-8'>
        <Image
          alt='logo'
          width={24}
          height={24}
          className='object-cover absolute top-0 left-0'
          src='/assets/icons/red_star.svg'
        />
        <Image
          alt='logo'
          width={24}
          height={24}
          className='object-cover absolute bottom-0 right-0 '
          src='/assets/icons/red_star.svg'
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
          className='text-[56px] text-primary leading-normal  italic font-bold'
        >
          Edusoul
        </h5>
      </div>

      <p className='flex text-appBlack xl:text-2xl h-[100px] items-center  w-[80%] text-center'>
        Join us as we take your Christ-Centered education to the next level
      </p>
    </div>
  );
};

export default Sidebar;

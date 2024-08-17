"use client";

import CourseList from "@/components/shared/Courses/courseList";
import AppButton from "@/components/ui/AppButton";
import TopNav from "@/components/ui/TopNav";
import { coursesData } from "@/data";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});
const Index = () => {
  return (
    <div style={poppins.style} className='h-max pl-[5%] pr-[20%]  pt-[2.5%]'>
      <Link
        href={"courses"}
        className='font-medium flex items-center gap-5  mb-[40px]'
      >
        <Image
          src={"/assets/icons/back.svg"}
          width={24}
          height={24}
          alt='back'
        />
        <p className='text-xs text-[#1A1818]'>Back</p>
      </Link>
      <div className='flex w-full justify-between'>
        <TopNav
          first={"Courses"}
          second={"Add Course"}
          secondLink={""}
          firstLink={"/admin/courses"}
        />
      </div>
      <div className='border border-[#99B2C6] w-full h-max pl-[5%] pr-[12%] pt-[40px] pb-[120px] my-4 bg-white rounded-[8px]'>
        <div className='flex flex-col '>
          <p className='text-sm text-appBlack px-1 mb-[6px]'>Name of course</p>
          <input
            type='text'
            placeholder='Enter name of course'
            className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2 focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
          />
        </div>
        <div className='flex flex-col mt-[30px] '>
          <p className='text-sm text-appBlack px-1 mb-[6px]'>Price</p>
          <input
            type='text'
            placeholder='Enter course amount'
            className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
          />
        </div>
        <div className='flex flex-col mt-[30px] '>
          <p className='text-sm text-appBlack px-1 mb-[6px]'>
            Course description
          </p>
          <textarea
            type='text'
            placeholder='Enter course objective'
            className='bg-white rounded-[8px] border-[#D0D5DD] h-[164px] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
          />
        </div>
        <div className='flex flex-col mt-[30px] w-full bg-white rounded-[8px] border-[#D0D5DD] h-[305px]  border-2   py-3 px-[14px]   '>
          <p className='text-sm text-appBlack px-1 mb-[6px]'>Course Image</p>
          <div className='w-full flex-1 flex flex-col items-center justify-center '>
            <Image
              src={"/assets/icons/image.svg"}
              width={40}
              height={40}
              alt='upload'
            />
            <h6 className='text-appBlack2 mt-3 mb-1 text-sm'>Upload Image</h6>
            <p className='text-appBlack2 font-light text-xs'>
              click to upload or drag and drop
            </p>
          </div>
        </div>
        <AppButton
          style={{ marginTop: 60 }}
          title={"Add Course"}
          action={() => console.log("hello")}
        />
      </div>
    </div>
  );
};

export default Index;

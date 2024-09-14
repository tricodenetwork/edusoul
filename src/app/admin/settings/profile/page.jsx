"use client";

import CourseList from "@/components/shared/Courses/courseList";
import AppButton from "@/components/ui/AppButton";
import { Button } from "@/components/ui/Button";
import TopNav from "@/components/ui/TopNav";
import { coursesData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const state = ["Enroll", "In progress", "Completed", "Recommended"];
const courses = [
  {
    name: "Introduction to the Old Testament",
    dueDate: "15/07/24",
    Instructor: "John Smith",
  },
  {
    name: "Introduction to the New Testament",
    dueDate: "15/07/24",
    Instructor: "John Smith",
  },
  {
    name: "New Testament",
    dueDate: "15/07/24",
    Instructor: "John Smith",
  },
];

const Index = () => {
  return (
    <div className='border border-[#99B2C6] w-full h-max px-[3%]  mt-4 pt-[40px] pb-[40px] my-4 bg-white rounded-[8px]'>
      <div className='w-full h-[203px] bg-[#d9d9d9] relative rounded-[12px]'>
        <Image
          width={24}
          height={24}
          src={"/assets/icons/gallery.svg"}
          className='absolute bottom-4 right-4'
        />
        <div className='border-2 border-white absolute flex items-center justify-center -bottom-[66px] left-[5%] w-[132px] h-[132px] bg-[#d9d9d9] rounded-full'>
          <Image width={33} height={33} src={"/assets/icons/camera.png"} />
        </div>
      </div>
      <div className=' flex flex-col px-[5%]'>
        <div className='flex justify-between mt-[112px]  items-center'>
          <div className='flex flex-col w-[45%] mt-[0px] '>
            <p className='text-sm text-appBlack px-1 mb-[6px]'>First Name</p>
            <input
              type='text'
              placeholder='Jane'
              className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
            />
          </div>
          <div className='flex flex-col w-[45%] mt-[0px] '>
            <p className='text-sm text-appBlack px-1 mb-[6px]'>Last Name</p>
            <input
              type='text'
              placeholder='Doe'
              className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
            />
          </div>
        </div>
        <div className='flex flex-col mt-[82px] '>
          <p className='text-sm text-appBlack px-1 mb-[6px]'>Bio</p>
          <textarea
            type='text'
            placeholder='Enter module objectives'
            className='bg-white rounded-[8px] border-[#D0D5DD] h-[164px] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
          />
        </div>
        <AppButton
          style={{ marginTop: 60, alignSelf: "flex-end" }}
          title={"Update Profile"}
          action={() => console.log("hello")}
        />
      </div>
    </div>
  );
};

export default Index;

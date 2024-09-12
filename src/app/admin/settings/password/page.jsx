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
      <div className=' flex flex-col px-[5%]'>
        <div className='flex flex-col items-start mt-[20px] gap-[48px]'>
          <div className='flex flex-col w-[60%] mt-[0px] '>
            <p className='text-sm text-appBlack px-1 mb-[6px]'>
              Current Password
            </p>
            <input
              type='text'
              placeholder=''
              className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
            />
          </div>
          <div className='flex flex-col w-[60%] mt-[0px] '>
            <p className='text-sm text-appBlack px-1 mb-[6px]'>New Password</p>
            <input
              type='text'
              placeholder=''
              className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
            />
          </div>
          <div className='flex flex-col w-[60%] mt-[0px] '>
            <p className='text-sm text-appBlack px-1 mb-[6px]'>
              Re-Type New Password
            </p>
            <input
              type='text'
              placeholder=''
              className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
            />
          </div>
        </div>
        <AppButton
          style={{ marginTop: 60, alignSelf: "flex-start" }}
          title={"Reset Password"}
          action={() => console.log("hello")}
        />
      </div>
    </div>
  );
};

export default Index;

"use client";

import CourseList from "@/components/shared/Courses/courseList";
import AppButton from "@/components/ui/AppButton";
import SelectComponent from "@/components/ui/Select";
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
    <div className='h-max pl-[5%] pr-[13%]  pt-[1%]'>
      <h4 className='font-medium text-xl text-appBlack mb-[23px]'>
        Your Events
      </h4>
      <div className='flex w-full justify-between'>
        <TopNav first={"Events"} firstLink={"/admin/events"} />
        <AppButton href={"events/add"} title={"Add Event"} />
      </div>

      {/* Courses */}
      <div className='rounded-[8px] mb-10  bg-white mt-[43px] w-full h-max flex flex-col border border-appAsh2 p-3 lg:p-6'>
        <p className='text-appBlack'>Courses</p>

        <SelectComponent
          items={["Course 1", "Course 2", "Course 3", "Course 4"]}
          placeholder={"Live Events"}
        />

        <div className=' border-[#99B2C6] border rounded-[8px] mt-[42px]'>
          <div className='grid border-[#99b2c6] bg-[#f6f6f6] h-[40px] rounded-t-[8px] place-content-center px-[25px] grid-cols-[3fr,1fr,1fr]'>
            <p className='text-[13px]'>Event Name</p>
            <p className='text-[13px] text-center flex items-center justify-center'>
              Total Attendees
            </p>
            <p className='text-[13px]'></p>
          </div>
          <div className='grid border-[#99b2c6]  h-[80px] rounded-t-[8px] place-content-center px-[25px] grid-cols-[3fr,1fr,1fr]'>
            <div className=''>
              <h4 className='text-[16px] font-semibold text-appBlack'>
                Event One
              </h4>
              <p className='text-[13px]'>Introduction to the Old Testament</p>
            </div>
            <p className='text-[13px] text-center flex items-center justify-center'>
              10
            </p>
            <AppButton
              title={"Edit Event"}
              action={() => console.log("Hello")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

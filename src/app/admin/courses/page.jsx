"use client";

import CourseList from "@/components/shared/Courses/courseList";
import AppButton from "@/components/ui/AppButton";
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
        Your Courses
      </h4>
      <div className='flex w-full justify-between'>
        <TopNav first={"Courses"} firstLink={"/admin/courses"} />
        <AppButton href={"courses/add"} title={"Add Course"} />
      </div>

      {/* Courses */}
      <div className='rounded-[8px] mb-10  bg-white mt-[43px] w-full h-max flex flex-col border border-appAsh2 p-3 lg:p-6'>
        <div className='flex items-center justify-between'>
          <p className='font-semibold  text-appBlack'>Courses</p>
          <Link
            href={"/courses"}
            className='text-xs text-appAsh uppercase font-bold'
          >
            View All Courses
          </Link>
        </div>
        <div className=' w-full grid  place-items-center  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxxl:grid-cols-4 gap-x-6 gap-y-6  mt-6'>
          {coursesData.slice(0, 4).map((course) => (
            <CourseList key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

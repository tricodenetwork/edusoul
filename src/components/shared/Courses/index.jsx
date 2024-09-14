"use client";

import React from "react";
import CourseList from "./courseList";
import Link from "next/link";
import { coursesData } from "@/data";

export default function Courses() {
  return (
    <section
      className='pb-[80px]  w-full  pt-[2rem] box-border justify-center items-center'
      id='courses'
    >
      <div className='flex flex-col justify-start  items-center gap-4'>
        <div className='text-center text-slate-900 text-[28px]  md:text-[56px] font-bold'>
          Access transformational courses
        </div>
        <div className='text-center text-slate-900 text-lg font-normal'>
          Here are a list of all courses we currently offer at Edusoul
        </div>

        <div className=' w-full grid  place-items-center  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-[25px] mt-6'>
          {coursesData.slice(0, 4).map((course) => (
            <CourseList key={course.id} course={course} />
          ))}
        </div>

        <Link href={"/courses"}>
          <button className='px-5 py-2.5 mt-8 rounded-[10px] hover:bg-white border-2 hover:border-primary justify-center items-center flex bg-primary transition-all duration-300 group'>
            <div className='group-hover:text-primary text-xl font-medium leading-normal tracking-wide text-white'>
              View All Courses
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
}

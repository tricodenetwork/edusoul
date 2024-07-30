"use client";

import React from "react";
import CourseList from "./courseList";
import Link from "next/link";
import { coursesData } from "@/data";

export default function Courses() {
  return (
    <>
      <section
        className="mb-[80px] w-full px-3 sm:px-6 md:px-10 lg:px-6 xl:px-14 pt-[2rem] box-border justify-center items-center"
        id="courses"
      >
        <div className="flex flex-col justify-start items-center gap-4">
          <div className="text-center text-slate-900 text-[30px] md:text-[56px] font-bold">
            Access transformational courses
          </div>
          <div className="text-center text-slate-900 text-lg font-normal">
            Sed ut vestibulum eget purus ornare. Risus elit et fringilla
            habitant ut facilisi.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-3 mt-6">
            {coursesData.slice(0, 6).map((course) => (
              <CourseList key={course.id} id={course.id} course={course} />
            ))}
          </div>

          <Link href={"/page/courses"}>
            <button className="px-5 py-2.5 mt-8 rounded-[10px] border-2 border-primary justify-center items-center flex hover:bg-primary transition-all duration-300 group">
              <div className="text-primary text-xl font-medium leading-normal tracking-wide group-hover:text-white">
                View All Courses
              </div>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

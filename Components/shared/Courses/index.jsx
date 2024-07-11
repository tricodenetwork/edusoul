import { useState, useEffect } from "react";
import CourseList from "./courseList";
import { coursesData } from "@/Data/data";

export default function Courses({ mobile }) {
  return (
    <>
      <section
        className="md:mt-24 w-full justify-center items-center"
        id="courses"
      >
        <div className="flex flex-col justify-start items-center gap-4">
          <div className="text-center text-slate-900 text-[30px] md:text-[56px] font-bold font-['Roboto']">
            Access transformational courses
          </div>
          <div className="text-center text-slate-900 text-lg font-normal font-['Roboto'] leading-[28.80px]">
            Sed ut vestibulum eget purus ornare. Risus elit et fringilla
            habitant ut facilisi.
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 gap-3 mt-10">
            {coursesData.slice(0, 4).map((course) => (
              <CourseList key={course.id} course={course} />
            ))}
          </div>

          <button className="px-5 py-2.5 mt-8 rounded-[10px] border-2 border-primary justify-center items-center flex hover:bg-primary transition-all duration-300 group">
            <div className="text-primary text-xl font-medium font-['Roboto'] leading-normal tracking-wide group-hover:text-white">
              View All Courses
            </div>
          </button>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import CourseList from "@/components/shared/Courses/courseList";
import { coursesData } from "@/data";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/NavBar/nav";

const state = [
  "All Programme",
  "Program 1",
  "Program 2",
  "Program 3",
  "Program 4",
];

export default function Courses() {
  const [active, setActive] = useState("All Programme");

  return (
    <>
      <Navbar />
      <section
        className="pt-[7em] sm:pt-2 md:pt-[9em] mb-8 w-full justify-center items-center"
        id="courses"
      >
        <div className="flex flex-col justify-start items-center gap-4">
          <div className="text-center text-slate-600 text-xl font-bold font-['Roboto'] uppercase leading-tight tracking-[3px]">
            OUR courses
          </div>
          <div className="text-center text-slate-900 text-[30px] md:text-[56px] font-bold font-['Roboto']">
            Access transformational courses
          </div>
          <div className="text-center text-slate-900 text-lg font-normal font-['Roboto']">
            Sed ut vestibulum eget purus ornare. Risus elit et fringilla
            habitant ut facilisi.
          </div>

          <div className="w-[90%] flex gap-4 justify-center items-center">
            {state.map((item, index) => (
              <button
                onClick={() => setActive(item)}
                key={index.toString()}
                className={`font-medium ${
                  item === active && "text-white bg-primary"
                } px-5 py-2.5 mt-8 rounded-[10px] border border-primary justify-center items-center flex hover:bg-primary text-primary hover:text-white font-medium leading-normal tracking-wide transition-all duration-300 group`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-3 gap-3 mt-6">
            {coursesData.map((course) => (
              <CourseList key={course.id} id={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

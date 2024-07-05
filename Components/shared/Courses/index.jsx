import { useState, useEffect } from "react";

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
          <button className="p-3 rounded-[10px] border-2 border-red-800 justify-center items-center flex">
            <div className="text-red-800 text-xl font-medium font-['Roboto'] leading-normal tracking-wide">
              View Our Courses
            </div>
          </button>
        </div>

        <div className="flex flex-col-reverse md:flex-row mt-16 justify-start items-center gap-12">
          <img
            className="w-full md:w-[350px] lg:w-[400px] h-[300px] rounded-lg"
            src="/assets/images/courses.png"
          />
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="text-primary text-[15px] font-bold uppercase tracking-[3px]">
                No limits
              </div>
              <div className="text-black text-[36px] font-bold font-['Roboto']">
                What we plan to achieve with you
              </div>
            </div>
            <div className="text-slate-900 text-lg font-normal font-['Roboto']">
              EduSoul aims to provide a Christ-centered education program that
              raises distinctive educators. The goal is to equip 21st-century
              leaders with skills and methodologies for successful, life-long
              professionalism within the Christian education sector.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

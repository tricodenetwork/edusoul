"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function CourseList({ id }) {
  return (
    <div className="bg-white text-left cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-[14px] shadow-lg shadow-[#000000]/20">
      <div className="relative w-full h-[179px]">
        <Image
          alt="courses"
          fill
          quality={100}
          className="rounded-t-[14px]"
          src="/assets/images/course-1.png"
        />
      </div>
      <div className="flex px-2.5 py-[5px] bg-white mt-[-20px] gap-[5px] mx-4 z-50 relative rounded-[40px] justify-start items-center shadow-lg">
        <div className="flex px-2">
          <div className="w-[29.19px] h-[29.19px] mr-[-15px] bg-yellow-300 rounded-full justify-center items-center">
            <div className="w-[22.22px] h-[46.60px] relative"></div>
          </div>
          <div className="w-[29.19px] h-[29.19px] mr-[-15px] bg-indigo-700 rounded-full justify-center items-center">
            <div className="w-[21.36px] h-[30.81px] relative"></div>
          </div>
          <div className="w-[29.19px] h-[29.19px] mr-[-15px] bg-indigo-400 rounded-[100px] justify-start items-center">
            <div className="w-[19.46px] h-[23.72px] relative"></div>
          </div>
          <div className="w-[29.19px] h-[29.19px] mr-[-15px] bg-pink-400 rounded-full justify-end items-center">
            <div className="w-[36.84px] h-[39.11px] relative"></div>
          </div>
          <div className="w-[29.19px] h-[29.19px] -z-4 bg-gradient-to-t from-indigo-400 to-blue-600 rounded-full justify-end items-center">
            <div className="w-[43.53px] h-[96.60px] relative"></div>
          </div>
        </div>
        <p className="text-center text-gray-800 text-base font-normal font-['Kanit'] leading-7">
          + 40 students
        </p>
      </div>

      <div className="px-4 py-5">
        <div className="flex flex-col gap-3">
          <p className="text-slate-500 text-[10px] font-normal font-['Raleway'] leading-[15px]">
            1 - 28 July 2022
          </p>
          <div className="text-red-800 text-base font-extrabold font-['Raleway'] leading-normal tracking-tight">
            Course {id}
          </div>
          <h4 className="text-neutral-600 text-[12px] font-normal font-['Raleway']">
            Product Management Masterclass, you will learn with Sarah Johnson -
            Head of Product Customer Platform Gojek Indonesia.
          </h4>
          <div className="w-[264.27px] h-[16.17px]" />
        </div>

        <div className="flex justify-between items-center gap-5">
          <div className="flex gap-3 relative items-center">
            <p className="text-orange-500 text-base font-bold font-['Inter'] leading-[25.02px]">
              $ 380
            </p>
            <del className="text-stone-900 text-[14.83px] opacity-50 font-normal font-['Inter'] leading-snug">
              $ 500
            </del>
          </div>

          <div className="px-5 py-2.5 bg-white rounded-[5px] border border-red-800 justify-start items-start gap-2.5 flex hover:bg-primary transition-all duration-300 group shadow-lg shadow-[#000000]/20">
            <div className="text-red-800 text-xs font-medium font-['Raleway'] capitalize group-hover:text-white">
              enroll now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

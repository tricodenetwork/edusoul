"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CourseList({ course }) {
  const path = usePathname();
  return (
    <div className='bg-white text-left w-full md:w-[296px] lg:w-[100%] h-[450px] relative cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-[0_4px_4px] hover:shadow-black/25 rounded-[14px] shadow-[0_10px_60px] shadow-appBlue/10 '>
      <div className='relative w-full h-[179px]'>
        <Image
          alt='courses'
          fill
          quality={100}
          className='rounded-t-[14px] object-cover bg-primary/80'
          src={`/assets/images${course.imgURL}`}
        />
      </div>
      <div className='flex px-2.5 py-[5px] bg-white mt-[-20px] gap-[5px] mx-4 z-50 relative rounded-[40px] justify-start items-center shadow-lg'>
        <div className='flex px-2'>
          <div className='w-[29.19px] h-[29.19px] relative mr-[-15px] rounded-full justify-center items-center'>
            <Image
              src={`/assets/images/blink.svg`}
              fill
              alt='profile'
              className='object-cover'
            />
          </div>
          <div className='w-[29.19px] h-[29.19px] relative mr-[-15px] rounded-full justify-center items-center'>
            <Image
              src={`/assets/images/ander.svg`}
              fill
              alt='profile'
              className='object-cover'
            />
          </div>
          <div className='w-[29.19px] h-[29.19px] relative mr-[-15px] rounded-full justify-start items-center'>
            <Image
              src={`/assets/images/bigbird.svg`}
              fill
              alt='profile'
              className='object-cover'
            />
          </div>
          <div className='w-[29.19px] h-[29.19px] relative mr-[-15px] rounded-full justify-end items-center'>
            <Image
              src={`/assets/images/bartender.svg`}
              fill
              alt='profile'
              className='object-cover'
            />
          </div>
          <div className='w-[29.19px] h-[29.19px] relative -z-4 bg-gradient-indigo-400 to-blue-600 rounded-full justify-end items-center'>
            <Image
              src={`/assets/images/bill.svg`}
              fill
              alt='profile'
              className='object-cover'
            />
          </div>
        </div>
        <p className='text-center text-[#263238] text-sm'>+ 40 students</p>
      </div>

      <div className='px-4 py-5 '>
        <div className='flex flex-col gap-3'>
          <p className="text-slate-500 text-[10px] font-normal font-['Raleway'] leading-[15px]">
            1 - 28 July 2022
          </p>
          <div className='text-primary text-base font-extrabold '>
            {course.id}
          </div>
          <h4 className="text-neutral-600 mt-2 text-[12px] font-normal font-['Raleway']">
            {course.snippet}
          </h4>
          <div className='w-[264.27px] h-[16.17px]' />
        </div>

        <div className='flex px-4  absolute bottom-4 w-full   left-0  justify-between items-center gap-5'>
          <div className='flex gap-3 relative items-center'>
            <p className='text-app_dark_green text-base font-extrabold'>
              $ 380
            </p>
            {/* <del className="text-stone-900 text-[14.83px] opacity-50 font-normal font-['Inter'] leading-snug">
              $ 500
            </del> */}
          </div>

          <div className='px-5 py-2.5 bg-white rounded-[5px] border border-[#8F060E] justify-start items-start gap-2.5 flex hover:bg-primary transition-all duration-300 group shadow- shadow-[#000000]/20'>
            <Link
              href={"/admin/modules"}
              className='text-[#8F060E] text-xs font-medium  capitalize group-hover:text-white'
            >
              {path.includes("/admin") ? "Manage Course" : " enroll now"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

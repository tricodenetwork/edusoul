"use client";

import React from "react";
import Image from "next/image";

export default function Limits() {
  return (
    <div className='flex h-[374px] flex-col-reverse md:flex-row mt-16 justify-between items-center'>
      <div className='relative w-[48%] h-full'>
        <Image
          alt='limits'
          fill
          quality={100}
          className='rounded-lg object-cover'
          src='/assets/images/courses.png'
        />
      </div>
      <div className='flex-col w-[48%] h-full justify-center items-start gap-4 flex'>
        <div className='flex-col justify-start items-start gap-3 flex'>
          <h5 className='text-[#475569] text-xl font-bold uppercase tracking-[3px]'>
            No limits
          </h5>
          <h3 className='text-appBlack text-[56px] leading-none w-[80%] font-extrabold'>
            What we plan to achieve with you
          </h3>
        </div>
        <div className='text-appBlack mt-4 text-lg w-[90%]'>
          EduSoul aims to provide a Christ-centered education program that
          raises distinctive educators. The goal is to equip 21st-century
          leaders with skills and methodologies for successful, life-long
          professionalism within the Christian education sector.
        </div>
      </div>
    </div>
  );
}

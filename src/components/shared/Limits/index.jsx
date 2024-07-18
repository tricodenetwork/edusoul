"use client";

import React from "react";
import Image from "next/image";

export default function Limits() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row mt-16 justify-start items-center gap-12">
        <img
          className="w-full md:w-[350px] lg:w-[400px] h-[300px] rounded-lg"
          src="/assets/images/courses.png"
        />
        {/* <Image
          alt="limits"
          width={400}
          height={300}
          quality={100}
          className="rounded-lg"
          src="/assets/images/courses.png"
        /> */}
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
    </>
  );
}

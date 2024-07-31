"use client";

import React from "react";
import Image from "next/image";
import Teams from "./Teams";

export default function Mandate({ mobile }) {
  return (
    <>
      <div className="flex h-[374px] flex-col-reverse md:flex-row md:my-[80px] px-3 sm:px-6 md:px-10 lg:px-6 xl:px-14 justify-between items-center">
        <div className="flex-col md:w-[48%] h-full justify-center items-start gap-4 flex">
          <div className="flex-col justify-start items-start gap-3 flex">
            <h5 className="text-[#475569] text-xl font-bold uppercase tracking-[3px]">
              Our Mandate
            </h5>
            <h3 className="text-appBlack text-[36px] md:text-[56px] leading-none xl:w-[80%] font-extrabold">
              What drives us to do what we do
            </h3>
          </div>
          <p className="text-appBlack mt-4 text-lg lg:w-[90%]">
            EduSoul focuses on transformational learning relevant to both
            age-old and current societal challenges. The program encourages
            participants to think critically about learning and how to best
            support each child's unique potential.
          </p>
        </div>
        <div className="relative md:w-[48%] h-full">
          <Image
            alt="limits"
            fill
            quality={100}
            className="rounded-lg object-cover"
            src="/assets/images/our-mandate.png"
          />
        </div>
      </div>

      <Teams />
    </>
  );
}

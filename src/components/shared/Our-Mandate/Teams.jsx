"use client";

import Link from "next/link";
import React from "react";

export default function Teams({ mobile }) {
  return (
    <section
      className='flex flex-col pt-7 w-full gap-2 justify-center items-center'
      id=''
    >
      <div className='flex flex-col md:flex-row w-full justify-start items-start gap-2'>
        <img
          className='md:flex hidden h-[535px] md:w-[50vw]'
          src='/assets/images/ideas/ideas-1.png'
        />

        <div className='flex p-4 bg-rose-200 h-[535px] flex-col justify-center items-start pl-[5%] gap-8'>
          <div className='flex-col justify-start items-start gap-4 flex'>
            <h4 className='text-primary text-xl font-bold uppercase tracking-[3px]'>
              Team work
            </h4>
            <h3 className='text-primary text-[36px] lg:text-[56px] leading-none xl:w-[80%] font-extrabold'>
              Easily transition with our team{" "}
            </h3>
          </div>
          <p className='text-primary mt-3 text-lg xl:w-[90%]'>
            Led by professionals with over 75 years of combined experience in
            education, leadership, and management, the team has pioneered
            various high-achieving Christian schools globally.
          </p>
          <div className='justify-start items-center gap-4 inline-flex'>
            <Link
              href={"/auth/login"}
              className='font-bold bg-primary duration-300 text-white hover:bg-gray-100 hover:text-primary px-6 py-3 text-center w-full md:w-[15em] rounded-md shadow-sm shadow-gray-700/40'
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className='w-full justify-start items-start gap-2.5 inline-flex'>
        <img
          className='w-full h-[210px]'
          src='/assets/images/ideas/ideas-2.png'
        />
        <img
          className='w-[300px] h-[210px]'
          src='/assets/images/ideas/ideas-3.png'
        />
        <img
          className='w-full h-[210px]'
          src='/assets/images/ideas/ideas-4.png'
        />
        <img
          className='w-[420px] h-[210px]'
          src='/assets/images/ideas/ideas-5.png'
        />
      </div>
    </section>
  );
}

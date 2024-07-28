"use client";

import React from "react";

export default function Teams({ mobile }) {
  return (
    <>
      <section
        className='flex flex-col pt-7 w-full gap-2 justify-center items-center'
        id=''
      >
        <div className='flex flex-col md:flex-row w-full justify-start items-start gap-2'>
          <img
            className='md:flex hidden h-[535px] md:w-[50vw]'
            src='/assets/images/ideas/ideas-1.png'
          />

          <div className='flex p-6 bg-rose-200 lg:h-[535px] flex-col justify-center items-start gap-8'>
            <div className='flex-col justify-start items-start gap-4 flex'>
              <div className="text-primary text-xl font-bold uppercase tracking-[3px]">
                Team work
              </div>
              <div className="text-primary text-[56px] leading-none xl:w-[80%] font-extrabold">
                Easily transition with your team{" "}
              </div>
            </div>
            <div className="text-primary mt-4 text-lg xl:w-[90%]">
              Led by professionals with over 75 years of combined experience in
              education, leadership, and management, the team has pioneered
              various high-achieving Christian schools globally.
            </div>
            <div className='justify-start items-center gap-4 inline-flex'>
              <button className='font-bold bg-primary text-white hover:bg-gray-100 hover:text-primary px-6 py-3 text-center w-full md:w-[15em] rounded-md shadow-lg shadow-gray-50'>
                Get Started
              </button>
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
    </>
  );
}

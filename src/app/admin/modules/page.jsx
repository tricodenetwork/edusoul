"use client";
import AppButton from "@/components/ui/AppButton";
import SelectComponent from "@/components/ui/Select";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className='border border-[#99B2C6] w-full h-max pl-[5%] pr-[12%] mt-4 pt-[40px] pb-[120px] my-4 bg-white rounded-[8px]'>
      {/* <div className='flex flex-col '>
        <p className='text-sm text-appBlack px-1 mb-[6px]'>Select Course</p>
        <SelectComponent
          items={["Course 1", "Course 2", "Course 3", "Course 4"]}
          placeholder={"Choose course"}
        />
      </div> */}
      <div className='flex flex-col mt-[0px] '>
        <p className='text-sm text-appBlack px-1 mb-[6px]'>Module</p>
        <input
          type='text'
          placeholder='Enter module name'
          className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
        />
      </div>
      <div className='flex flex-col mt-[30px] '>
        <p className='text-sm text-appBlack px-1 mb-[6px]'>Module Objectives</p>
        <textarea
          type='text'
          placeholder='Enter module objectives'
          className='bg-white rounded-[8px] border-[#D0D5DD] h-[164px] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
        />
      </div>
      <div className='flex flex-col mt-[30px] '>
        <p className='text-sm text-appBlack px-1 mb-[6px]'>
          Module pre-requisite
        </p>
        <textarea
          type='text'
          placeholder='Enter module pre-requisites'
          className='bg-white rounded-[8px] border-[#D0D5DD] h-[164px] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
        />
      </div>
      <div className='flex flex-col mt-[30px] w-full bg-white rounded-[8px] border-[#D0D5DD] h-[305px]  border-2   py-3 px-[14px]   '>
        <p className='text-sm text-appBlack px-1 mb-[6px]'>Module Image</p>
        <div className='w-full flex-1 flex flex-col items-center justify-center '>
          <Image
            src={"/assets/icons/image.svg"}
            width={40}
            height={40}
            alt='upload'
          />
          <h6 className='text-appBlack2 mt-3 mb-1 text-sm'>Upload Image</h6>
          <p className='text-appBlack2 font-light text-xs'>
            click to upload or drag and drop
          </p>
        </div>
      </div>
      <AppButton
        style={{ marginTop: 60 }}
        title={"Save"}
        action={() => console.log("hello")}
      />
    </div>
  );
};

export default Index;

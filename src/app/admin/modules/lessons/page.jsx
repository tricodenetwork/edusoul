"use client";
import AddLesson from "@/components/AddLesson";
import AppButton from "@/components/ui/AppButton";
import SelectComponent from "@/components/ui/Select";
import Image from "next/image";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const Index = () => {
  const [add, setAdd] = useState(false);

  if (add) {
    return (
      <OutsideClickHandler onOutsideClick={() => setAdd(false)}>
        <div className=''>
          <AddLesson />
        </div>
      </OutsideClickHandler>
    );
  } else {
    return (
      <div className='border border-[#99B2C6] w-full h-max pl-[5%] pr-[5%] mt-4 pt-[40px] pb-[40px] my-4 bg-white rounded-[8px]'>
        <div className='flex flex-col gap-1'>
          <div className='flex py-3 border-b relative border-appAsh2 items-center '>
            <Image
              src={"/assets/icons/ham.svg"}
              alt='ham'
              width={20}
              height={20}
              className='mr-3'
            />
            <p className=''>
              Lesson 1: <span>Introduction to Course 1</span>
            </p>
            <div className='flex items-center gap-8 absolute right-[0%]'>
              <Image
                src={"/assets/icons/edit2.svg"}
                alt='ham'
                width={20}
                height={20}
                className='mr-3'
              />
              <Image
                src={"/assets/icons/trash.svg"}
                alt='ham'
                width={20}
                height={20}
                className='mr-3'
              />
            </div>
          </div>
          <div className='flex py-3 border-b relative border-appAsh2 items-center '>
            <Image
              src={"/assets/icons/ham.svg"}
              alt='ham'
              width={20}
              height={20}
              className='mr-3'
            />
            <p className=''>
              Lesson 2: <span>Introduction to Course 2</span>
            </p>
            <div className='flex items-center gap-8 absolute right-[0%]'>
              <Image
                src={"/assets/icons/edit2.svg"}
                alt='ham'
                width={20}
                height={20}
                className='mr-3'
              />
              <Image
                src={"/assets/icons/trash.svg"}
                alt='ham'
                width={20}
                height={20}
                className='mr-3'
              />
            </div>
          </div>
        </div>
        <AppButton
          style={{ marginTop: 60 }}
          title={"Add Lesson"}
          action={() => setAdd(true)}
        />
      </div>
    );
  }
};
export default Index;

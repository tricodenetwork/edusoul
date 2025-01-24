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
        <div className='flex flex-col mt-[0px]'>
          <p className='text-sm text-appBlack px-1 mb-[6px]'>
            Lesson assignments
          </p>
          <textarea
            type='text'
            placeholder='Enter module assignment'
            className='bg-white rounded-[8px] border-[#D0D5DD] h-[164px] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
          />
        </div>
        <AppButton
          style={{ marginTop: 60 }}
          title={"Save"}
          action={() => console.log(true)}
        />
      </div>
    );
  }
};
export default Index;

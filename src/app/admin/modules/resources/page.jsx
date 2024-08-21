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
        <div className='flex flex-col mt-[30px] w-full bg-white rounded-[8px] border-[#D0D5DD] h-[305px]  border-2   py-3 px-[14px]   '>
          <p className='text-sm text-[#344054] px-1 mb-[6px]'>
            Module Resource
          </p>
          <div className='w-full flex-1 flex flex-col items-center justify-center '>
            <Image
              src={"/assets/icons/image.svg"}
              width={40}
              height={40}
              alt='upload'
            />
            <h6 className='text-appBlack2 mt-3 mb-1 text-sm'>Add Resource</h6>
            <p className='text-appBlack2 font-light text-xs'>
              png, svg, doc, pdf
            </p>
          </div>
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

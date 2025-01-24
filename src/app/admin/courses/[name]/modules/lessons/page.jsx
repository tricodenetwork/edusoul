"use client";
import AddLesson from "@/components/AddLesson";
import AppButton from "@/components/ui/AppButton";
import SelectComponent from "@/components/ui/Select";
import { setActiveLesson } from "@/redux/slices/moduleSlice";
import Image from "next/image";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Index = () => {
  const [add, setAdd] = useState(false);
  const { module, course } = useSelector((state) => state.module);
  const dispatch = useDispatch();
  const activeModule = course?.modules?.find(
    (_, index) => index == module.split("Module")[1] - 1
  );

  if (add) {
    return (
      <OutsideClickHandler onOutsideClick={() => setAdd(false)}>
        <div className=''>
          <AddLesson setAdd={() => setAdd(false)} />
        </div>
      </OutsideClickHandler>
    );
  } else {
    return (
      <div className='border border-[#99B2C6] w-full h-max pl-[5%] pr-[5%] mt-4 pt-[40px] pb-[40px] my-4 bg-white rounded-[8px]'>
        <div className='flex flex-col gap-1'>
          {activeModule?.units.map((item, index) => (
            <div
              key={index.toString()}
              className='flex py-3 border-b relative border-appAsh2 items-center '
            >
              <Image
                src={"/assets/icons/ham.svg"}
                alt='ham'
                width={20}
                height={20}
                className='mr-3'
              />
              <p className=''>
                {`Unit ${index + 1}:`} <span>{item.title}</span>
              </p>
              <div className='flex items-center gap-8 absolute right-[0%]'>
                <button
                  className='hover:scale-95 duration-150 active:scale-100'
                  onClick={() => {
                    dispatch(setActiveLesson(item));
                    setAdd(true);
                  }}
                >
                  <Image
                    src={"/assets/icons/edit2.svg"}
                    alt='ham'
                    width={20}
                    height={20}
                    className='mr-3'
                  />
                </button>
                <Image
                  src={"/assets/icons/trash.svg"}
                  alt='ham'
                  width={20}
                  height={20}
                  className='mr-3'
                />
              </div>
            </div>
          ))}
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

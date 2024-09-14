"use client";
import AppButton from "@/components/ui/AppButton";
import { coursesData } from "@/data";
import Image from "next/image";
import React from "react";

const Index = ({ params }) => {
  const course = coursesData.find((item) => item.id == params.id);
  return (
    <div className='w-full mt-[60px] lg:mt-[80px] bg-appPink min-h-screen h-max'>
      <section className='w-full p-[30px] lg:p-[75px] flex flex-col  bg-[#F7D0D]'>
        <h3 className='text-primary w-full text-center uppercase  text-xl lg:text-4xl font-extrabold'>
          {course.name}
        </h3>
        {/* Course Contents */}
        <div className='w-full flex flex-col lg:flex-row lg:justify-between'>
          <div className='flex flex-col lg:w-[60%] gap-6  mt-8 lg:mt-12'>
            {course.intro?.map((item, index) => {
              return (
                <p
                  className='lg:text-lg leading-10 tracking-wide'
                  key={index.toString()}
                >
                  {item}
                </p>
              );
            })}
          </div>

          {/* Course Image and price */}
          <div className='w-max flex flex-col mt-12 lg:mt-8   items-center h-full gap-12'>
            <div className='w-[300px] h-[179px] relative'>
              <Image
                src={`/assets/images${course.imgURL}`}
                fill
                className='object-cover'
                alt={course.id}
              />
            </div>
            {/* Buy course price and button */}
            <div className='flex flex-col justify-center items-center gap-4'>
              <p className='text-app_dark_green text-3xl font-extrabold'>
                {`$${course.price}`}
              </p>
              <AppButton
                title={"Buy Course"}
                action={() => console.log("Kool")}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

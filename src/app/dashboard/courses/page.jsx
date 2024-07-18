"use client";

import Image from "next/image";
import { useState } from "react";

const state = ["Enroll", "In progress", "Completed", "Recommended"];
const courses = [
  {
    name: "Introduction to the Old Testament",
    dueDate: "15/07/24",
    Instructor: "John Smith",
  },
  {
    name: "Introduction to the New Testament",
    dueDate: "15/07/24",
    Instructor: "John Smith",
  },
  {
    name: "New Testament",
    dueDate: "15/07/24",
    Instructor: "John Smith",
  },
];

const Index = () => {
  const [active, setActive] = useState("Enroll");
  return (
    <div className='p-[44px] bg-appPink h-full'>
      <h4 className='font-medium text-xl text-appBlack mb-[40px]'>
        Your Courses
      </h4>
      <div className='flex items-center justify-between'>
        <div className='w-[60%] flex justify-between items-center'>
          {state.map((item, index) => (
            <button
              onClick={() => setActive(item)}
              key={index.toString()}
              className={`font-medium ${
                item === active && "border-b-2 border-primary"
              } text-appBlack  `}
            >
              {item}
            </button>
          ))}
        </div>
        <p className=' text-primary'>1/10 Completed</p>
      </div>
      {courses.map((item, index) => {
        return (
          <div className='flex relative items-center justify-between bg-white my-4 rounded-[8px] py-4 pl-4 pr-[55px]'>
            <div className='h-[85%] absolute right-[28%] bg-appAsh2 w-[1px]'></div>
            <Image
              src={"/assets/icons/more.svg"}
              width={15}
              height={15}
              alt='more'
              className='absolute top-4 right-4'
            />
            <Image
              src={"/assets/images/course.png"}
              width={250}
              height={120}
              alt='course'
              className='mr-[24px]'
            />
            <div className='w-[60%]'>
              <h5 className='font-medium text-primary text-xl '>{item.name}</h5>
              <p className='mt-[8px] text-appBlack  '>Course 1 Module 1</p>
              <div className='mt-[16px] flex items-center justify-between w-max space-x-3'>
                <p className='text-appBlack text-sm'>
                  <strong>Instructor:</strong>John Smith
                </p>
                <p className='text-appBlack text-sm'>
                  <strong>Due Date:</strong> 15/07/2024
                </p>
              </div>
            </div>
            <button className='bg-primary rounded-[8px] w-[180px] p-4 text-white text-sm font-semibold'>
              Continue Course
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Index;

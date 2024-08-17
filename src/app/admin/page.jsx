import CircularProgressBar from "@/components/CircularProgressBar";
import CourseList from "@/components/shared/Courses/courseList";
import { coursesData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const analytics = [
  {
    name: "Courses",
    img: "/assets/icons/courses_2.svg",
    desc: "Total number of Courses",
    num: 200,
  },
  {
    name: "Teachers",
    img: "/assets/icons/teachers.svg",
    desc: "Total number of Teachers",
    num: 50,
  },
  {
    name: "Students",
    img: "/assets/icons/students.svg",
    desc: "Total number of Students",
    num: 1500,
  },
];

const Index = () => {
  return (
    <div className='w-full flex-col  pl-[7%] pr-[9%] md:flex-row flex justify-between pt-[24px]'>
      {/* First Section */}
      <section className='w-full  h-full'>
        {/* Welcome Card */}
        <div className='bg-primary relative w-full overflow-hidden flex flex-col items-start px-[5%] justify-center space-y-6 rounded-[12px] h-[222px]'>
          <h3 className='text-2xl text-white font-semibold'>
            Welcome Back, Admin
          </h3>
          <p className='text-white z-50 max-w-[454px] text-xs'>
            You are making progress course journey. Keep going to achieve your
            educational goals! Click on the Continue button to proceed with your
            enrollment.
          </p>
          <button className='bg-white text-xs font-semibold w-[147px] py-[12px] text-primary rounded-[4px]'>
            Continue Course
          </button>
          <div></div>
          <div className='absolute hidde flex w-[150px] h-[80px] lg:w-[249px] lg:h-[200px] object-cover -right-3 bottom-0 lg:-top-[13px]'>
            <Image
              src={"/assets/images/books.png"}
              className='object-contain'
              fill
              alt='books'
            />
          </div>
        </div>
        {/* Analytics */}
        <section className='    w-full flex justify-between border-b border-appAsh2 py-6'>
          {analytics.map((item, ind) => {
            return (
              <div
                key={ind.toString()}
                className='flex w-[32%] flex-col h-[160px] px-[23px] py-[18px] border-[#99B2C6] border rounded-[8px]  justify-between'
              >
                <div className=''>
                  <Image width={35} height={35} src={item.img} />
                  <h5 className='capitalize mt-1 text-dark_B'>{item.name}</h5>
                </div>
                <div className=''>
                  <h4 className=' text-dark_B font-bold text-[28px] leading-tight'>
                    {item.num}
                  </h4>
                  <p className='text-dark_B text-[10px]'>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </section>

        {/* Courses */}
        <div className='rounded-[8px] mb-10  mt-[24px] w-full h-max flex flex-col border border-appAsh2 p-3 lg:p-6'>
          <div className='flex items-center justify-between'>
            <p className='font-semibold  text-appBlack'>Courses</p>
            <Link
              href={"/courses"}
              className='text-xs text-appAsh uppercase font-bold'
            >
              View All Courses
            </Link>
          </div>
          <div className=' w-full grid  place-items-center  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxxl:grid-cols-4 gap-x-6 gap-y-6  mt-6'>
            {coursesData.slice(0, 4).map((course) => (
              <CourseList key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Second Section */}
    </div>
  );
};

export default Index;

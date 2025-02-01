import CourseList from "@/components/shared/Courses/courseList";
import StatsCard from "@/components/ui/StatsCard";
import { coursesData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Index = async () => {
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
        <StatsCard />

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
    </div>
  );
};

export default Index;

"use client";

import CourseList from "@/components/shared/Courses/courseList";
import AppButton from "@/components/ui/AppButton";
import SelectComponent from "@/components/ui/Select";
import TopNav from "@/components/ui/TopNav";
import { coursesData } from "@/data";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});
const state = ["Module Information", "Lessons", "Assignments", "Resources"];

const Index = ({ children }) => {
  const path = usePathname();
  return (
    <div className='h- px-[5%]   pt-[2.5%] pb-[2%]'>
      <Link
        href={"courses"}
        className='font-medium flex items-center gap-5  mb-8'
      >
        <Image
          src={"/assets/icons/back.svg"}
          width={24}
          height={24}
          alt='back'
        />
        <p className='text-xs text-[#1A1818]'>Back</p>
      </Link>
      <div className='flex w-full  justify-between'>
        {/* <TopNav first={"Module"} firstLink={"modules"} /> */}
        <SelectComponent style={"w-[7.5vw]"} placeholder={"Module 1"} />
        <AppButton title={"Edit Course"} href={"/"} />
      </div>
      <div className='w-full flex mt-8 pr-[15%] justify-between items-center'>
        {state.map((item, index) => (
          <Link
            href={
              item.includes("Information")
                ? `/admin/modules`
                : `/admin/modules/${item.toLowerCase()}`
            }
            // onClick={() => setActive(item)}
            key={index.toString()}
            className={` ${
              path === "/admin/modules" && item.includes("Module")
                ? "border-b-[3px] border-primary border-opacity-100 font-medium"
                : path.includes(item.toLowerCase())
                ? "border-b-[3px] border-primary border-opacity-100 font-medium"
                : "border-appPink"
            } text-appBlack duration-150 ease-in border-b-[3px]  `}
          >
            {item}
          </Link>
        ))}
      </div>
      <div className='flex-1 pr-[15%]  mt-2'>{children}</div>
    </div>
  );
};

export default Index;

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
const state = ["Profile", "Students", "Password"];

const Index = ({ children }) => {
  const path = usePathname();
  const currentPath = path.split("/").pop();
  return (
    <div className='h- px-[5%]   pt-[2.5%] pb-[2%]'>
      <div className='flex w-full justify-between'>
        <TopNav
          first={"settings"}
          firstLink={"/admin/settings"}
          second={currentPath}
          secondLink={"/admin/settings/profile"}
        />
      </div>
      <div className='w-[65%]  flex mt-8 pr-[0%] justify-between items-center'>
        {state.map((item, index) => (
          <Link
            href={
              item.includes("Information")
                ? `/admin/settings`
                : `/admin/settings/${item.toLowerCase()}`
            }
            // onClick={() => setActive(item)}
            key={index.toString()}
            className={` ${
              path === "/admin/settings" && item.includes("Module")
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

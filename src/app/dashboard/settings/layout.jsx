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
const state = ["Profile", "Password"];

const Index = ({ children }) => {
  const path = usePathname();
  const currentPath = path.split("/").pop();
  return (
    <div className='h- px-[5%]   pt-[2.5%] pb-[2%]'>
      {/* <div className='flex w-full justify-between'>
        <TopNav
          first={"settings"}
          firstLink={"/admin/settings"}
          second={currentPath}
          secondLink={"/admin/settings/profile"}
        />
      </div> */}
      <div className='w-[30%]  flex mt-8 pr-[0%] justify-between items-center'>
        {state.map((item, index) => (
          <Link
            href={
              item.includes("Profile")
                ? `/dashboard/settings`
                : `/dashboard/settings/password`
            }
            // onClick={() => setActive(item)}
            key={index.toString()}
            className={` ${
              path === "/dashboard/settings" && item.includes("Profile")
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
      <div className='flex-1 pr-[15%]  mt-10'>{children}</div>
    </div>
  );
};

export default Index;

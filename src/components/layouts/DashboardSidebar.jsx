"use client";

import { adminNavData, userNavData } from "@/data";
import { signOutOfApp } from "@/lib/session";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardSidebar = () => {
  // --------------------------------------------VARIABLES
  const path = usePathname();
  const links = path.includes("admin") ? adminNavData : userNavData;

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='w-[18%] lg:w-[15%] hidden md:flex flex-col border-r border-appAsh2 h-full bg-appPink'>
      <Image
        className='ml-[17%] mt-[13%]'
        src={"/assets/images/logo.svg"}
        width={100.84}
        height={62}
        alt='logo'
      />

      <div className='h-[60%] w-full flex py-[10px] mt-[30%] items-center'>
        <div className='w-[30%] flex flex-col justify-center space-y-10 items-center rounded-r-[88px] h-full  bg-white py-[50px]'>
          {links.map((item) => {
            const isActive =
              item.href === path ||
              (path.includes(item.href) && item.label !== "Home");
            return (
              <span key={item.href}>
                {React.cloneElement(item.component, {
                  active: isActive,
                })}
              </span>
            );
          })}
        </div>
        <ul className='w-[70%] flex flex-col justify-center space-y-10 items-start px-[12%] h-full py-[50px]'>
          {links.map((link, index) => (
            <li
              key={index.toString()}
              className={`cursor-pointer ${
                path === "/dashboard" && link.label == "Home"
                  ? "text-primary hover:text-appAsh font-semibold"
                  : path === "/admin" && link.label == "Home"
                  ? "text-primary hover:text-appAsh font-semibold"
                  : link.label === "Home"
                  ? "text-appAsh hover:text-primary"
                  : path.includes(link.href)
                  ? "text-primary hover:text-appAsh font-semibold"
                  : "text-appAsh hover:text-primary"
              }`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => signOutOfApp()}
        className='flex absolute self-center  duration-150 bottom-[3%]  gap-[8px] items-center '
      >
        <Image
          src={"/assets/icons/logout.svg"}
          width={16}
          height={16}
          alt='logout'
        />
        <p className='text-[#676767] text-xm'>Sign Out</p>
      </button>
    </div>
  );
};
export default DashboardSidebar;

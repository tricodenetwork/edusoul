"use client";

import { useState } from "react";
import { Nunito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineMenu } from "react-icons/md";
import SegmentIcon from "@mui/icons-material/Segment";
import { IoCloseSharp } from "react-icons/io5";

const nunito = Nunito({ subsets: ["latin"] });
const links = [
  { href: "/admin", label: "Home", src: "/assets/icons/home.svg" },
  {
    href: "/admin/courses",
    label: "Courses",
    src: "/assets/icons/courses.svg",
  },
  // {
  //   href: "/admin/modules",
  //   label: "Module",
  //   src: "/assets/icons/module.svg",
  // },
  // {
  //   href: "/admin/assignment",
  //   label: "Assignment",
  //   src: "/assets/icons/assignment.svg",
  // },
  { href: "/admin/events", label: "Events", src: "/assets/icons/events.svg" },
  {
    href: "/admin/settings",
    label: "Settings",
    src: "/assets/icons/settings.svg",
  },
];

export default function RootLayout({ children }) {
  const path = usePathname();
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className='flex w-full h-screen items-center justify-center'>
      {/* Side Navigation */}
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
            {links.map((item, ind) => {
              return (
                <Image
                  key={ind.toString()}
                  className=''
                  src={item.src}
                  width={24}
                  height={24}
                  alt={item.label.toLowerCase()}
                />
              );
            })}
          </div>
          <ul className='w-[70%] flex flex-col justify-center space-y-10 items-start px-[12%] h-full py-[50px]'>
            {links.map((link, index) => (
              <li
                key={index.toString()}
                className={`cursor-pointer ${
                  link.label === "Home"
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
      </div>

      <div className='w-full md:w-[85%] bg-appPink  h-full'>
        {/* Top Section */}
        <div className='w-full px-3 mb-1 bg-appPink     sm:px-[20px] lg:px-[40px] border-b border-appAsh2 flex items-center justify-between py-[16px]  '>
          <div className='px-[16px] bg-white h-[51px] flex items-center justify-between relative w-[45%] rounded-[8px]  shadow-[0px_2px_8px] shadow-black/10'>
            <input
              style={nunito.style}
              placeholder='Search'
              className='absolute text-sm text-appAsh flex-1 px-4 focus:outline-none left-0'
            />
            <Image
              src={"/assets/icons/search.svg"}
              width={16}
              height={16}
              className='absolute right-[16px] '
              alt='search'
            />
          </div>
          <div className='flex items-center'>
            <Link
              href={"/"}
              className='w-[48px] bg-white h-[48px] mr-[16px] hidden sm:flex items-center justify-center rounded-full shadow-[0px_2px_8px] shadow-black/10'
            >
              <Image
                src={"/assets/icons/bell copy 2.svg"}
                width={18}
                height={18}
                alt='bell'
              />
            </Link>
            <Link
              href={"/"}
              className='w-[48px] bg-white h-[48px] mr-[16px] hidden sm:flex items-center justify-center rounded-full shadow-[0px_2px_8px] shadow-black/10'
            >
              <Image
                src={"/assets/icons/message copy 2.svg"}
                width={24}
                height={24}
                alt='bell'
              />
            </Link>
            <Link
              href={"/"}
              className='px-[16px] py-[9px] bg-white flex items-center justify-center rounded-full shadow-[0px_2px_8px] shadow-black/10'
            >
              <Image
                src={"/assets/images/pro.svg"}
                width={40}
                height={40}
                className='rounded-full mr-[12px]'
                alt='profile'
              />
              <Image
                src={"/assets/icons/down.svg"}
                width={12}
                height={6}
                alt='bell'
              />
            </Link>
            <button
              onClick={() => setSideNav(!sideNav)}
              className={`text-primary ml-4 text-[4vh] flex md:hidden`}
            >
              {sideNav ? (
                <IoCloseSharp className='' />
              ) : (
                <SegmentIcon className='' />
              )}
            </button>
          </div>
        </div>
        <div className='w-full  bg-appPink  pb-[100px]   overflow-y-scroll h-full'>
          {children}
        </div>
      </div>
    </div>
  );
}

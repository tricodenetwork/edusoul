"use client";

import React, { useEffect, useState } from "react";
import { Nunito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Home from "@/components/icons/Home";
import Settings from "@/components/icons/Settings";
import Courses from "@/components/icons/Courses";
import { usePathname } from "next/navigation";
import SegmentIcon from "@mui/icons-material/Segment";
import { IoCloseSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import UserContextProvider from "@/context/UserContext";

const nunito = Nunito({ subsets: ["latin"] });
const links = [
  { href: "/dashboard", label: "Home", component: <Home /> },
  {
    href: "/dashboard/courses",
    href2: "/dashboard/lessons",
    label: "Courses",
    component: <Courses />,
  },
  {
    href: "/dashboard/settings",
    href2: "/dashboard/settings/password",

    label: "Settings",
    component: <Settings />,
  },
];

export default function RootLayout({ children }) {
  const path = usePathname();
  const [sideNav, setSideNav] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      if (status !== "loading") {
        router.push("/auth/login");
      }
    },
  });

  return (
    <UserContextProvider>
      <div className='flex w-full h-screen items-center justify-center bg-appPink'>
        {/* Side Navigation */}
        <div className='w-[18%] relative lg:w-[15%]  hidden md:flex flex-col border-r border-appAsh2 h-full bg-appPink'>
          <Image
            className='ml-[17%] mt-[13%]'
            src={"/assets/images/logo.svg"}
            width={100.84}
            height={62}
            alt='logo'
          />

          <div className='h-[60%] w-full flex py-[10px] mt-[20%] items-center'>
            <div className='w-[30%] flex flex-col justify-center space-y-10 items-center rounded-r-[88px] h-full  bg-white py-[50px]'>
              {links.map((item) => {
                const isActive = path === item.href || path === item.href2;
                return (
                  <span>
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
                    path === link.href || path === link.href2
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
            onClick={() => signOut({ callbackUrl: "/auth/login" })}
            className='flex absolute self-center hover:translate-x-1 duration-150 bottom-[3%]  gap-[16px] items-center '
          >
            <Image
              src={"/assets/icons/logout.svg"}
              width={24}
              height={24}
              alt='logout'
            />
            <p className='text-[#676767]'>Sign Out</p>
          </button>
        </div>

        <div className='w-full flex flex-col md:w-[85%] pt-[11vh]  overflow-y-scroll h-full'>
          {/* Top Section */}
          <div className='w-full md:w-[85%] px-3 sm:px-[20px] fixed top-0 z-50  lg:px-[40px] border-b  bg-white border-appAsh2 flex items-center justify-between py-[16px]  '>
            <div className='px-[16px] h-[51px] flex items-center justify-between relative w-[45%] rounded-[8px]  shadow-[0px_2px_8px] shadow-black/10'>
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
                className='w-[48px] h-[48px] mr-[16px] hidden sm:flex items-center justify-center rounded-full shadow-[0px_2px_8px] shadow-black/10'
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
                className='w-[48px] h-[48px] mr-[16px] hidden sm:flex items-center justify-center rounded-full shadow-[0px_2px_8px] shadow-black/10'
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
                className='px-[16px] py-[9px] flex items-center justify-center rounded-full shadow-[0px_2px_8px] shadow-black/10'
              >
                <Image
                  src={session?.user?.image ?? "/assets/images/pro.svg"}
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
          {children}
        </div>
      </div>
    </UserContextProvider>
  );
}

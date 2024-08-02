"use client";

import React, { useCallback, useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import { navdata } from "@/data";
import useFunctions from "@/hooks/useFunctions";
import SideNavMobile from "./sidenavmobile";

const url = [
  "auth/login",
  "auth/register",
  "auth/forgot-password",
  "auth/verification",
];

const Navbar = () => {
  const pathname = usePathname();
  const [sideNav, setSideNav] = useState(false);
  const [sticky, setSticky] = useState(false);
  const { imageLoader } = useFunctions();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${sideNav ? "bg-white" : "bg-white"} ${
        pathname.includes("auth") && "hidden"
      } fixed border-b w-full h-[60px] sm:h-[80px] px-3 md:px-10 lg:px-6 xl:px-14 shadow-lg z-50 flex flex-row justify-between items-center`}
    >
      <motion.nav
        initial={{ x: 0 }}
        animate={{ x: [200, 0] }}
        className='flex flex-row mx-auto gap-5 lg:gap-8 justify-start items-center w-full'
      >
        <div className='flex w-[24vh] h-[16vh] justify-start items-center'>
          <Link href={"/"}>
            <Image
              loader={imageLoader}
              alt='logo'
              width={140}
              height={60}
              quality={100}
              className=''
              src='/assets/images/logo.svg'
            />
          </Link>
        </div>

        <div className='md:flex flex-row gap hidden justify-center items-center'>
          <ul
            onClick={() => setSideNav(false)}
            className='md:flex flex-row hidden lg:gap-3'
          >
            {navdata.map((link) => {
              const isSticky = pathname === link.route;

              return (
                <li
                  key={link.label}
                  className={` ${isSticky ? "text-primary" : "text-black"}`}
                >
                  <Link
                    href={`${pathname === "/" ? link.route : link.route2}`}
                    className={`flex gap-4 hover:text-primary text-sm duration-150 items-center p-4 `}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.nav>

      <motion.div
        initial={{ width: "30%" }}
        animate={{ width: "17%" }}
        transition={{ duration: 0.2 }}
        className='md:flex w-[15em] md:w-[20%] justify-end hidden items-center'
      >
        <Link
          href={"/auth/login"}
          className={`font-bold w-[150px] bg-primary text-white duration-300 hover:bg-gray-100 hover:text-primary ${
            pathname === `/auth/login` || `/${url}` ? "" : "block"
          } py-3 text-center w-full md:w-[150px] rounded-md`}
        >
          Get Started
        </Link>
      </motion.div>

      <button
        onClick={() => setSideNav(!sideNav)}
        className={`text-primary text-[4vh] flex md:hidden`}
      >
        {sideNav ? (
          <IoCloseSharp className='' />
        ) : (
          <MdOutlineMenu className='' />
        )}
      </button>
      {sideNav && <SideNavMobile setSideNav={setSideNav} />}
    </nav>
  );
};

export default Navbar;

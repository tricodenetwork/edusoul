"use client";

import useFonts from "@/hooks/useFonts";
import Image from "next/image";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import SegmentIcon from "@mui/icons-material/Segment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { fetchCourses, fetchUsers } from "@/redux/slices/networkSlice";
import { useUser } from "@/hooks/useUser";

const DashboardHeader = () => {
  // --------------------------------------------VARIABLES
  const [sideNav, setSideNav] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useUser();

  const { nunito } = useFonts();
  const { data: session, status } = useSession({
    required: true,

    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      if (status !== "loading") {
        router.push("/auth/login");
      }
    },
  });

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // if (status == "loading") {
  //   return (
  //     <div className='w-screen h-screen flex items-center justify-center'>
  //       <ClockLoader
  //         loading={true}
  //         width={500}
  //         height={500}
  //         color='#90050f'
  //         className=''
  //       />
  //     </div>
  //   );
  // } else {
  return (
    <div className="w-full md:w-[85%] px-3 sm:px-[20px] fixed top-0 z-50  lg:px-[40px] border-b  bg-white border-appAsh2 flex items-center justify-between py-[16px]  ">
      <div className="px-[16px] h-[51px] flex items-center justify-between relative w-[45%] rounded-[8px]  shadow-[0px_2px_8px] shadow-black/10">
        <input
          style={nunito.style}
          placeholder="Search"
          className="absolute text-sm text-appAsh flex-1 px-4 focus:outline-none left-0"
        />
        <Image
          src={"/assets/icons/search.svg"}
          width={16}
          height={16}
          className="absolute right-[16px] "
          alt="search"
        />
      </div>
      <div className="flex items-center">
        {/* <Link
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
        </Link> */}
        <Link
          href={"#"}
          className="px-[16px] py-[9px] flex items-center justify-center rounded-full shadow-[0px_2px_8px] shadow-black/10"
        >
          <Image
            src={user?.image ?? "/assets/images/pro.svg"}
            width={40}
            height={40}
            className="rounded-full mr-[12px]"
            alt="profile"
          />
          {/* <Image
            src={"/assets/icons/down.svg"}
            width={12}
            height={6}
            alt='bell'
          /> */}
        </Link>
        <button
          onClick={() => setSideNav(!sideNav)}
          className={`text-primary ml-4 text-[4vh] flex md:hidden`}
        >
          {sideNav ? (
            <IoCloseSharp className="" />
          ) : (
            <SegmentIcon className="" />
          )}
        </button>
      </div>
    </div>
  );
  // }
};
export default DashboardHeader;

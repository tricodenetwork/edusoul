"use client";
import CircularProgressBar from "@/components/CircularProgressBar";
import { Nunito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const nunito = Nunito({ subsets: ["latin"] });
const course = {
  title: "Advanced Classroom Assistant (Access Certificate to Diploma)",
  modules: [
    {
      name: "Module 1",
      lessons: [
        {
          name: "Lesson 1",
          title: "The Heart and Vision of Christian Educator Part 1",
        },
        {
          name: "Lesson 2",
          title: "Calling and Character of a Christian Teacher",
        },
        {
          name: "Lesson 3",
          title: "How Research is Done",
        },
      ],
    },
    {
      name: "Module 2",
      lessons: [
        {
          name: "Lesson 1",
          title: "Aims of Christian Education",
        },
        {
          name: "Lesson 2",
          title: "Foundation for Christian Education Part 1",
        },
        {
          name: "Lesson 3",
          title: "Christian Worldview",
        },
      ],
    },
    {
      name: "Module 3",
      lessons: [
        {
          name: "Lesson 1",
          title: "Christ-Centred Curriculum and Delivery 1",
        },
        {
          name: "Lesson 2",
          title: "Role of Holy Spirit in Teaching and Learning Process 1",
        },
        {
          name: "Lesson 3",
          title: "Holistic Culture",
        },
      ],
    },
    {
      name: "Module 4",
      lessons: [
        {
          name: "Lesson 1",
          title: "Learning Theory for Christian Teacher Part 1",
        },
        {
          name: "Lesson 2",
          title: "Stimulating Learning Environment and Displays",
        },
        {
          name: "Lesson 3",
          title: "Standards and Good Practice 1",
        },
        {
          name: "Lesson 4",
          title: "Play and Learn",
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  const path = usePathname();
  const [submenu, showSubmenu] = useState(null);
  return (
    <div className='flex w-full h-screen items-center'>
      {/* Side Navigation */}
      <div className='w-[18%] hidden md:flex flex-col border-r border-appAsh2 h-full bg-white'>
        <Image
          className='ml-[17%] mt-[13%]'
          src={"/assets/images/logo.svg"}
          width={100.84}
          height={62}
          alt='logo'
        />

        <div
          className=' h-[60%] pl-[40px] pr-[14px] w-full flex flex-col py-[10px] mt-[20%] items-center
         '
        >
          <CircularProgressBar diameter={80} radius={35} percentage={50} />
          <p className='mt-2 text-appBlack text-[10px]'>
            Course Progress: <span className='font-semibold'>50%</span>{" "}
            Completed
          </p>

          <h4 className=' mt-8 text-appBlack'>
            Course Title:{" "}
            <span className='font-medium'>
              Introduction to the New Testament
            </span>
          </h4>
          <div className='w-full px-4 mt-8'>
            {course.modules.map((item, index) => {
              return (
                <div>
                  <div
                    key={index.toString()}
                    className='flex  border-b py-4 border-ash w-full items-center'
                  >
                    <p className='text-appAsh w-[70%] font-medium'>
                      {item.name}
                    </p>
                    <button
                      onClick={() =>
                        submenu ? showSubmenu(null) : showSubmenu(index + 1)
                      }
                    >
                      <Image
                        src={"/assets/icons/down.svg"}
                        width={12}
                        height={6}
                        alt='down'
                        className={`${
                          submenu !== index + 1
                            ? "rotate-180 duration-150"
                            : "rotate-0"
                        }`}
                      />
                    </button>
                  </div>
                  {submenu === index + 1 &&
                    item.lessons.map((item, inde) => {
                      return (
                        <p className='text-appAsh my-2 w-[70%] font-medium'>
                          {item.name}
                        </p>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='w-full md:w-[82%]  bg-appPink overflow-y-scroll h-full'>
        {/* Top Section */}
        <div className='w-full px-[40px] border-b border-appAsh2 flex items-center justify-between py-[16px]  '>
          <div className='px-[16px] h-[51px] bg-white flex items-center justify-between relative w-[45%] rounded-[8px]  shadow-[0px_2px_8px] shadow-black/10'>
            <input
              style={nunito.style}
              placeholder='Search'
              className='absolute text-sm text-appAsh bg-white flex-1 px-4 focus:outline-none left-0'
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
              className='w-[48px] h-[48px] bg-white mr-[16px] flex items-center justify-center rounded-full shadow-[0px_2px_8px] shadow-black/10'
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
              className='w-[48px] h-[48px] bg-white mr-[16px] hidden md:flex items-center justify-center rounded-full shadow-[0px_2px_8px] shadow-black/10'
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
              className='px-[16px] py-[9px] flex  bg-white items-center justify-center rounded-full shadow-[0px_2px_8px] shadow-black/10'
            >
              <Image
                src={"/assets/images/pro.svg"}
                width={40}
                height={40}
                className='rounded-full mr-[8px]'
                alt='profile'
              />
              <Image
                src={"/assets/icons/down.svg"}
                width={12}
                height={6}
                alt='bell'
              />
            </Link>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

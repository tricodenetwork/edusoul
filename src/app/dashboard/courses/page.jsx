"use client";

import AppButton from "@/components/ui/AppButton";
import MoreOptions from "@/components/ui/MoreOptions";
import { coursesData } from "@/data";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../../config/config";
import { useSession } from "next-auth/react";

const state = ["In progress", "Completed", "Recommended"];
const courses = [
  {
    name: "Introduction to the Old Testament",
    dueDate: "15/07/24",
    Instructor: "John Smith",
  },
  {
    name: "Introduction to the New Testament",
    dueDate: "15/07/24",
    Instructor: "John Smith",
  },
  {
    name: "New Testament",
    dueDate: "15/07/24",
    Instructor: "John Smith",
  },
  {
    name: "Introduction to the Old Testament",
    dueDate: "15/07/24",
    Instructor: "John Smith",
  },
  {
    name: "Introduction to the New Testament",
    dueDate: "15/07/24",
    Instructor: "John Smith",
  },
  {
    name: "New Testament",
    dueDate: "15/07/24",
    Instructor: "John Smith",
  },
];

const notifications = [
  {
    category: "Course Progress",
    text: "You're 15% done with 'Introduction to Biblical Studies'. Keep going!",
    text2: "Great job! You've completed 50% of 'Christian Theology 101'.",
  },
  {
    category: "Assignment Reminders",
    text: "Assignment due in 3 days: 'The Parables of Jesus'.",
    text2: "You have an upcoming quiz on 'The Book of Genesis'. Prepare well!",
  },
  {
    category: "Assignment Reminders",
    text: "Assignment due in 3 days: 'The Parables of Jesus'.",
    text2: "You have an upcoming quiz on 'The Book of Genesis'. Prepare well!",
  },
];

const Index = () => {
  const [active, setActive] = useState("Recommended");
  const [isOpen, setIsOpen] = useState(null);
  const [user, setUser] = useState(null);
  const [activeCourseList, setActiveCourseList] = useState(coursesData);
  const { data: session, status } = useSession();

  useEffect(() => {
    switch (active) {
      case "Recommended":
        setActiveCourseList(coursesData);
        break;
      case "In progress":
        setActiveCourseList(user?.courses);
        break;
      case "Completed":
        setActiveCourseList(null);
        break;
      default:
        return;
    }
  }, [active]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.post(`${baseUrl}api/user`, {
          email: session?.user?.email,
        });
        setUser(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error.response);
      }
    };
    fetchUser();
  }, [session]);

  return (
    <div className='p-[44px] bg-white h-full'>
      <h4 className='font-medium text-xl text-appBlack mb-[40px]'>
        Your Courses
      </h4>
      <div className='flex items-center justify-between'>
        <div className='w-[60%] flex justify-between items-center'>
          {state.map((item, index) => (
            <button
              onClick={() => setActive(item)}
              key={index.toString()}
              className={`font-medium ${
                item === active ? " border-primary" : "border-transparent"
              } text-appBlack duration-200 border-b-2 w-[150px]`}
            >
              {item}
            </button>
          ))}
        </div>
        <p className=' text-primary'>1/10 Completed</p>
      </div>
      {/* Notifications */}
      {/* <div className='w-full p-6 mt-8 rounded-lg border border-stone-300 flex-col justify-start items-start gap-6 inline-flex'>
        <div className='w-full justify-between items-center inline-flex'>
          <div className='text-slate-900 text-base font-bold'>
            Notifications
          </div>
          <button className='text-center text-stone-500 text-xs'>
            VIEW ALL
          </button>
        </div>
        <table className='self-stretch rounded-lg font-medium border border-stone-300 text-slate-900 text-xs flex-col justify-start items-start flex'>
          <thead className='w-full px-6 bg-white rounded-t-lg border-b border-stone-300 justify-center items-center gap-6 inline-flex'>
            <tr className='w-full h-12 justify-start items-center gap-2.5 flex'>
              <td className='w-[40%] h-12 py-4 border-r'>Category</td>
              <td className='w-[50%]'>Notifications</td>
            </tr>
          </thead>

          <tbody className='w-full flex flex-col text-xs justify-center items-center'>
            {notifications.map((item, index) => (
              <tr
                key={index + 1}
                className='w-full px-6 border-b border-stone-300 justify-start items-center gap-2.5 flex'
              >
                <td className='w-[40%] py-[8%] md:py-4 border-r'>
                  {item.category}
                </td>
                <td className='w-[50%]'>
                  {item.text}
                  <br />
                  {item.text2}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      <div className='h-[90%] my-2 w-full overflow-y-scroll'>
        {activeCourseList?.map((item, index) => (
          <div
            key={index + 1}
            className='flex relative items-center justify-between bg-white my-4  rounded-[8px] py-4 pl-4 pr-[55px]'
          >
            <div className='h-[85%] absolute right-[25%] bg-appAsh2 w-[1px]'></div>
            <Image
              // src='/assets/images/course.png'
              src={`/assets/images${item.imgURL}`}
              width={250}
              height={120}
              alt='course'
              className='mr-[24px]'
            />
            <div className='w-[50%]'>
              <h5 className='font-medium text-primary text-xl '>
                {item.title}
              </h5>
              <p className='mt-[8px] text-appBlack'>{`Modules: ${
                item?.modules?.length ?? "0"
              }`}</p>
              <div className='mt-[16px] flex items-center justify-between w-max space-x-3'>
                {/* <p className='text-appBlack text-sm'>
                <strong>Instructor:</strong> John Smith
              </p> */}
                <p className='text-appBlack text-sm'>
                  <strong>Due Date:</strong> 15/07/2024
                </p>
              </div>
            </div>

            <Link
              href={`/dashboard/lessons/?course=${item.title}`}
              className='bg-primary hover:-translate-y-1 duration-200 text-white font-bold w-[180px] h-[52px] flex items-center justify-center rounded hover:bg-red-800'
            >
              {active == "Recommended" ? `Enroll` : `Continue Course`}
            </Link>

            <div className=''>
              <Image
                onClick={() => setIsOpen(isOpen === index ? null : index)}
                src='/assets/icons/more.svg'
                width={15}
                height={15}
                alt='more'
                className='absolute top-4 right-4 cursor-pointer'
              />
              {isOpen === index && (
                <div className='w-32 h-30 bg-white rounded absolute right-4 shadow z-50 flex-col justify-start items-start inline-flex'>
                  <MoreOptions flex={"col"} />
                </div>
              )}
            </div>
          </div>
        )) ?? (
          <h5 className='font-medium text-primary text-3xl lg:text-6xl w-full h-full flex items-center justify-center '>
            {"None Yet"}
          </h5>
        )}
      </div>
    </div>
  );
};

export default Index;

"use client";

import { coursesData } from "@/data";
import Image from "next/image";
import { useSelector } from "react-redux";

const StatsCard = () => {
  // --------------------------------------------VARIABLES
  const { courses, users, loading, error } = useSelector(
    (state) => state.network
  );
  const analytics = [
    {
      name: "Courses",
      img: "/assets/icons/courses_2.svg",
      desc: "Total number of Courses",
      num: courses.length,
    },
    // {
    //   name: "Teachers",
    //   img: "/assets/icons/teachers.svg",
    //   desc: "Total number of Teachers",
    //   num: 2,
    // },
    {
      name: "Students",
      img: "/assets/icons/students.svg",
      desc: "Total number of Students",
      num: users.filter((user) => !user.admin).length,
    },
  ];

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <section className=" flex-row w-full flex justify-between border-b border-appAsh2 py-6">
      {analytics.map((item, ind) => {
        return (
          <div
            key={ind.toString()}
            className="flex  w-[48%] flex-col h-[160px] px-[23px] py-[18px] border-[#99B2C6] border rounded-[8px]  justify-between"
          >
            <div className="">
              <Image width={35} height={35} src={item.img} alt="pic" />
              <h5 className="capitalize mt-1 text-dark_B">{item.name}</h5>
            </div>
            <div className="">
              <h4
                className={` text-dark_B ${
                  (loading || error) &&
                  "animate-pulse bg-gray-200 text-opacity-0 w-[50px] rounded-md"
                } font-bold text-[28px] leading-tight`}
              >
                {item.num}
              </h4>
              <p className="text-dark_B text-[10px]">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default StatsCard;

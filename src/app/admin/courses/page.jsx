"use client";

import CourseList from "@/components/shared/Courses/courseList";
import AppButton from "@/components/ui/AppButton";
import { setActiveCourse } from "@/redux/slices/moduleSlice";
import { fetchCourses } from "@/redux/slices/networkSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Index = () => {
  const { courses } = useSelector((state) => state.network);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses(1));
  }, []);
  return (
    <div className="h-max pl-[5%] pr-[13%]  pt-[1%]">
      <h4 className="font-medium text-xl text-appBlack mb-[23px]">
        Your Courses
      </h4>
      <button
        onClick={() => dispatch(setActiveCourse({}))}
        className="flex w-full justify-end"
      >
        {/* <TopNav first={"Courses"} firstLink={"/admin/courses"} /> */}
        <AppButton href={"courses/add"} title={"Add Course"} />
      </button>

      {/* Courses */}
      <div className="rounded-[8px] mb-10  bg-white mt-[43px] w-full h-max flex flex-col border border-appAsh2 p-3 lg:p-6">
        <div className="flex items-center justify-between">
          <p className="font-semibold  text-appBlack">Courses</p>
          <Link
            href={"/courses"}
            className="text-xs text-appAsh uppercase font-bold"
          >
            View All Courses
          </Link>
        </div>
        <div className=" w-full grid  place-items-center  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxxl:grid-cols-4 gap-x-6 gap-y-6  mt-6">
          {courses.map((course) => (
            <CourseList key={course._id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

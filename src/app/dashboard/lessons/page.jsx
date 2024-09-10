"use client";

import { useState, Suspense } from "react";
import AppButton from "@/components/ui/AppButton";
import MoreOptions from "@/components/ui/MoreOptions";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const state = ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"];
const state2 = ["Note", "Resources", "Assignments"];
const lessons = [
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

const Index = () => {
  const searchParams = useSearchParams();
  const moduleId = searchParams.get("module");
  const [active, setActive] = useState("Lesson 1");
  const [active2, setActive2] = useState("Note");

  return (
    <div className="flex flex-col p-[44px] bg-appPink">
      <Link
        href={"/dashboard/courses"}
        className="flex text-stone-500 text-sm font-normal cursor-pointer justify-start items-center gap-4"
      >
        <Image
          src="/assets/icons/right_arrow.svg"
          width={8}
          height={8}
          alt="right_arrow"
          className="rotate-180"
        />
        back
      </Link>

      {/* Breadcrumb */}
      <div className="w-72 h-4 mt-8 justify-start items-center gap-4 inline-flex">
        <Link
          href={"/dashboard"}
          className="text-stone-500 text-sm font-normal"
        >
          Home
        </Link>{" "}
        {">"}
        <Link
          href={"/dashboard/courses"}
          className="text-stone-500 text-sm font-normal"
        >
          Course
        </Link>{" "}
        {">"}
        <div className="text-primary text-sm font-medium">
          Module {moduleId}
        </div>
      </div>

      <div className="w-full flex gap-12 mt-8 justify-start items-center">
        {state.map((item, index) => (
          <button
            onClick={() => setActive(item)}
            key={index.toString()}
            className={`font-medium ${
              item === active ? "border-b-2 border-primary" : ""
            } text-appBlack`}
          >
            {item}
          </button>
        ))}
      </div>

      {active && (
        <div className="flex flex-col justify-start items-start gap-3">
          <div className="relative w-full h-[470px] mt-8">
            <Image
              src="/assets/images/lesson.png"
              fill
              alt="course"
              className="mr-[24px]"
            />
          </div>
          <div className="mt-3">
            <span className="text-slate-900 text-3xl font-normal">
              Lesson 1:{" "}
            </span>
            <span className="text-slate-900 text-3xl font-bold">
              Understanding the Parables of Jesus
            </span>
          </div>
          <div className="h-10 text-slate-900 justify-center items-center gap-2 inline-flex">
            <Image
              src="/assets/images/profile.png"
              width={45}
              height={45}
              alt="profile"
              className="rounded-full"
            />
            <div className="flex-col justify-center items-start gap-0.5 inline-flex">
              <div className="text-base font-bold">Silviaa Smith</div>
              <div className="text-sm font-normal">Instructor</div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex gap-12 mt-8 justify-start items-center">
        {state2.map((item, index) => (
          <button
            onClick={() => setActive2(item)}
            key={index.toString()}
            className={`font-medium ${
              item === active2 ? "border-b-2 border-primary" : ""
            } text-appBlack`}
          >
            {item}
          </button>
        ))}
      </div>

      {active2 === "Resources" && (
        <div className="w-52 h-28 mt-3 flex-col justify-start items-start gap-4 inline-flex">
          <button className="self-stretch p-1 justify-start items-center gap-2.5 inline-flex">
            <div className="text-red-800 text-xs font-normal font-['Roboto'] leading-none">
              Downloadlinkwillbehere.mp4
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

const IndexSuspense = () => {
  return (
    <Suspense>
      <Index />
    </Suspense>
  );
};
export default IndexSuspense;

"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { coursesData } from "@/data";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Courses from "@/components/shared/Courses";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/NavBar/nav";
import CheckIcon from "@mui/icons-material/Check";

function CourseDetails() {
  const searchParams = useSearchParams();
  const CourseId = searchParams.get("id");
  const pathname = usePathname(); // Get the current path

  const [course, setCourse] = useState(null);

  useEffect(() => {
    const id = parseInt(CourseId, 10);
    const fetchedCourse = coursesData.find((course) => course.id === id);
    setCourse(fetchedCourse);
  }, [CourseId]);

  if (!course) {
    return <div className="text-black mt-14">Loading...</div>; // Show loading indicator
  }

  return (
    <>
      <div className="flex flex-col my-14">
        <div className="flex flex-col w-full h-[365px] px-3 md:px-[6vh] bg-rose-200 justify-center items-start">
          <div className="flex flex-col justify-start items-start gap-2">
            <h3 className="self-stretch text-slate-600 text-xl font-bold uppercase">
              OUR courses
            </h3>
            <h1 className="text-red-800 text-3xl md:text-6xl font-extrabold">
              Course {CourseId}
            </h1>
          </div>
          <p className="self-stretch text-slate-900 text-lg font-normal">
            Sed ut vestibulum eget purus ornare. Risus elit et fringilla
            habitant ut facilisi.
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full px-3 md:px-[6vh] mt-16 justify-between items-start gap-16">
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <h1 className="self-stretch text-3xl md:text-6xl font-extrabold">
              What you will learn
            </h1>

            {state.map((item, index) => (
              <div className="justify-start items-center gap-6 inline-flex">
                <CheckIcon />
                <div className="w-[80%] opacity-70 text-slate-900 text-lg font-normal font-['Roboto'] leading-7">
                  Sed ut vestibulum eget purus ornare. Risus elit et fringilla
                  habitant ut facilisi. Sed ut vestibulum eget purus ornare.
                  Risus elit et fringilla habitant ut facilisi.
                </div>
              </div>
            ))}
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="h-8 flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch h-8 text-zinc-800 text-2xl font-bold font-['Roboto'] leading-normal">
                  ${course.price}
                </div>
              </div>
              <button className="w-36 h-10 px-6 bg-red-800 rounded border border-red-800 justify-center items-center inline-flex">
                <div className="text-center text-white text-lg font-semibold">
                  Buy Course
                </div>
              </button>
            </div>
          </div>

          <div className="w-full md:w-[80%] relative bg-white shadow border-b border-gray-300">
            <div className="relative w-full h-48">
              <Image
                alt="courses"
                fill
                quality={100}
                className="rounded-t-[14px] object-cover bg-primary/80"
                src={`/assets/images/hat.png`}
              />
            </div>
            <div className="p-4 flex-col justify-start items-center gap-5 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                <div className="pt-4 justify-center items-center gap-2 inline-flex">
                  <div className="w-6 h-6 bg-[green] p-1 rounded-full text-[5px] text-white justify-center items-center flex">
                    <CheckIcon />
                  </div>
                  <h2 className="text-zinc-800 text-sm font-normal">
                    This course is included in plans
                  </h2>
                </div>
                <p className="text-neutral-600 text-sm font-normal">
                  Product Management Masterclass, you will learn with Sarah
                  Johnson - Head of Product Customer Platform Gojek Indonesia.
                </p>

                <button className="w-full py-3.5 bg-white border border-red-800 justify-center items-center inline-flex">
                  <div className="w-48 h-5 text-center text-red-800 text-base font-bold">
                    Try For free
                  </div>
                </button>
              </div>
              <div className="h-10 flex-col justify-start items-center gap-2.5 flex">
                <div className="self-stretch h-3.5 text-center text-neutral-500 text-xs font-normal">
                  Starting at ${course.price} per month after trial
                </div>
                <div className="self-stretch h-4 text-center text-neutral-500 text-xs font-normal">
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-[2vh] md:mt-[9vh] w-full px-[7vw]">
        <Courses />
      </section>
    </>
  );
}

const CourseDetailsSuspense = () => {
  return (
    <Suspense>
      <CourseDetails />
    </Suspense>
  );
};

export default CourseDetailsSuspense;

const state = ["All Programme", "Program 1", "Program 2", "Program 3"];

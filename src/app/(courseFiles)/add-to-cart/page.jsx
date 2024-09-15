"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { coursesData } from "@/data";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Courses from "@/components/shared/Courses";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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

  // Calculate the total
  const state = [
    { title: "Sub-total", price: 320 },
    { title: "Shipping", price: "Free" },
    { title: "Discount", price: 24 },
    { title: "Tax", price: 61.99 },
  ];

  const total = state.reduce((acc, item) => {
    return item.price !== "Free" ? acc + item.price : acc;
  }, 0);

  if (!course) {
    return <div className="text-black mt-14">Loading...</div>; // Show loading indicator
  }

  return (
    <>
      <div className="flex flex-col my-14">
        <div className="flex flex-col w-full h-[365px] px-3 md:px-[6vh] bg-rose-200 justify-center items-start">
          <div className="flex flex-col justify-start items-start gap-2">
            <h3 className="self-stretch text-slate-600 text-xl font-bold uppercase">
              Course cart
            </h3>
            <h1 className="text-red-800 text-3xl md:text-6xl font-extrabold">
              Add To Cart
            </h1>
          </div>
          <p className="self-stretch text-slate-900 text-lg font-normal">
            Sed ut vestibulum eget purus ornare. Risus elit et fringilla
            habitant ut facilisi.
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full px-3 md:px-[6vh] mt-16 justify-between items-start gap-16">
          <div className="w-full h-full bg-white rounded border border-gray-200 flex-col justify-start items-start inline-flex">
            <div className="self-stretch px-6 py-5 justify-start items-start gap-2.5 inline-flex">
              <div className="text-lg font-medium normal">Shopping Cart</div>
            </div>
            <div className="self-stretch px-6 py-2.5 bg-gray-100 border border-gray-200 justify-start items-center gap-6 inline-flex">
              <div className="w-full text-neutral-600 text-xs font-medium uppercase leading-none">
                Products
              </div>
              <div className="w-full text-neutral-600 text-xs font-medium uppercase leading-none">
                Price
              </div>
            </div>
            <div className="w-full p-6 flex-col justify-start items-start gap-3 flex">
              <div className="flex w-full justify-between items-center gap-16">
                <div className="flex justify-start items-center gap-3">
                  <CheckIcon className="w-6 h-6 relative" />
                  <div className="w-14 h-14 bg-primary rounded-sm" />
                  <div className="text-sm font-normal ">Course 1 Title</div>
                </div>
                <h3 className="text-neutral-600 text-sm font-normal ">$70</h3>
              </div>

              <div className="flex w-full justify-between items-center gap-16">
                <div className="justify-start items-center gap-3 flex">
                  <CheckIcon className="w-6 h-6 relative" />
                  <div className="w-14 h-14 bg-primary rounded-sm" />
                  <div className="text-sm font-normal ">Course 2 Title</div>
                </div>
                <h3 className="text-neutral-600 text-sm font-normal ">$250</h3>
              </div>
            </div>
            <div className="w-full h-px border border-gray-200"></div>
            <div className="self-stretch h-24 p-6 flex-col justify-start items-start gap-full flex">
              <button className="px-6 rounded-sm text-primary border-2 border-primary justify-center items-center gap-2 inline-flex">
                <ArrowBackIcon />
                <div className="text-sm py-3 font-bold uppercase">
                  Return to Shop
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full p-6 bg-white text-left text-zinc-900 rounded border border-gray-200 flex-col justify-center items-center">
            <h1 className="text-lg font-medium">Card Totals</h1>
            <div className="w-full flex-col justify-start items-start gap-4 flex">
              <div className="w-full pb-1 flex-col justify-start items-start gap-3 flex">
                {state.map((item, index) => (
                  <div
                    key={index}
                    className="w-full justify-between items-center inline-flex"
                  >
                    <h1 className="text-gray-500 text-sm font-normal">
                      {item.title}
                    </h1>
                    <h3 className="text-sm font-medium">
                      {item.price === "Free" ? item.price : `$${item.price}`}
                    </h3>
                  </div>
                ))}
              </div>
              <div className="w-full h-px border border-gray-200"></div>
              <div className="w-full justify-between items-center inline-flex">
                <div className="text-base font-normal normal">Total</div>
                <div className="text-base font-semibold normal">
                  ${total} USD
                </div>
              </div>
            </div>
            <button className="w-full px-8 text-white bg-primary rounded-sm justify-center items-center gap-3 inline-flex">
              <div className="text-base font-bold font-['Public Sans'] uppercase leading-10 tracking-">
                Proceed to Checkout
              </div>
              <ArrowForwardIcon />
            </button>
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

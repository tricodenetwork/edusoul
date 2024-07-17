"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/NavBar/nav";

export default function Courses({ mobile }) {
  return (
    <>
      <Navbar />
      <div className="flex grid grid-cols-1 md:grid-cols-2 px-3 sm:px-6 md:px-10 lg:px-6 xl:px-14 pt-[7em] sm:pt-[10em] md:pt-[9em] mb-8 w-full justify-start items-center gap-3">
        <div className="flex w-full md:w-[10rem] gap-3">
          <img
            className="w-full md:w-[250px] lg:w-[350px] h-[400px] rounded-lg"
            src="/assets/images/courses.png"
          />
          <img
            className="w-full md:w-[250px] lg:w-[350px] h-[400px] rounded-lg"
            src="/assets/images/courses.png"
          />
        </div>

        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="text-green-500 text-sm font-bold font-['Arimo'] tracking-tight">
              Upcoming Event
            </div>
            <div className="text-black text-[36px] font-bold font-['Roboto']">
              What we plan to achieve with you
            </div>
            <div className="text-black text-xl font-normal font-['Roboto'] leading-[30px] tracking-tight">
              August 17 - August 30 2024
            </div>
          </div>
          <div className="flex flex-col gap-3 text-neutral-500 text-lg font-normal font-['Roboto']">
            <div>
              Our tech exhibition brings together the latest advancements and
              cutting-edge products from leading industry experts. From
              state-of-the-art gadgets to revolutionary software solutions,
              immerse yourself in the future of technology. Engage with top
              minds, explore interactive displays, and witness live demos that
              redefine what's possible.
            </div>
            <div>
              Whether you're a tech enthusiast, industry professional, or
              curious explorer, this exhibition is your gateway to the forefront
              of innovation.
            </div>
            <div>
              Whether you're a tech enthusiast, industry professional, or
              curious explorer, this exhibition is your gateway to the forefront
              of innovation.
            </div>
            Join us and be inspired by the limitless possibilities!"
          </div>
          <Link href={"/app/courses"}>
            <button className="px-5 py-2.5 mt-8 rounded-[10px] border-2 border-primary justify-center items-center flex hover:bg-primary transition-all duration-300 group">
              <div className="text-primary text-xl font-medium font-['Roboto'] leading-normal tracking-wide group-hover:text-white">
                View All Courses
              </div>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

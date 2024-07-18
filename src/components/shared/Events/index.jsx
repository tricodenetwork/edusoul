"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Events() {
  return (
    <>
      <div className="flex flex-col lg:flex-row px-3 sm:px-6 md:px-10 lg:px-6 xl:px-14 pt-[7em] sm:pt-[10em] md:pt-[9em] md:pb-[4em] mb-8 w-full bg-red-800 bg-opacity-5 rounded-[10px] self-stretch justify-end items-center">
        <div className="lg:flex hidden w-[480.60px] justify-start items-start gap-4">
          <Image
            alt="courses"
            width={400}
            height={200}
            quality={100}
            className="rounded-lg"
            src="/assets/images/upcoming-event.png"
          />
        </div>

        <div className="flex-col lg:w-[60vw] justify-start items-start gap-4 flex">
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="text-green-500 text-sm font-bold font-['Arimo'] tracking-tight">
              Upcoming Event
            </div>
            <div className="text-black text-[36px] font-bold font-['Roboto']">
              Tech Expo 24
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
          <Link href={"/auth/register"}>
            <button className="px-8 py-2.5 mt-8 rounded-[10px] border-2 border-primary justify-center items-center flex hover:bg-white bg-primary transition-all duration-300 group">
              <div className="group-hover:text-primary text-xl font-medium font-['Roboto'] leading-normal tracking-wide text-white">
                Register
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

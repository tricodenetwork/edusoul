"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check } from "@mui/icons-material";

export default function Past_Events() {
  return (
    <div className="flex flex-col lg:flex-row mt-20 justify-center lg:items-center gap-12">
      <div className="flex-col lg:w-[50%] h-full justify-center items-start gap-4 flex">
        <div className="flex-col justify-start items-start gap-3 flex">
          <h5 className="text-primary text-xl font-bold uppercase tracking-[3px]">
            Past Event
          </h5>
          <div className="flex-col justify-start items-start gap-2 inline-flex font-bold">
            <h3 className="text-slate-900 text-[56px] leading-[52.80px]">
              Powerful tools.
            </h3>
            <h3 className="text-indigo-400 text-[56px] leading-[52.80px]">
              More control.
            </h3>
          </div>
        </div>
        <p className="text-appBlack mt-4 text-lg xxl:w-[90%]">
          Scelerisque auctor dolor diam tortor, fames faucibus non interdum
          nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing
          lacinia. Scelerisque auctor dolor diam tortor, fames faucibus non
          interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
          adipiscing lacinia. Scelerisque auctor dolor diam tortor, fames
          faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac,
          rutrum molestie adipiscing lacinia. Scelerisque auctor dolor diam
          tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit
          gravida ac, rutrum molestie adipiscing lacinia.
        </p>
        <div className="flex-col justify-start items-start inline-flex">
          <div className="justify-center items-start gap-2 inline-flex">
            <Check />
            <div className="text-black text-lg font-normal leading-[28.80px]">
              Interdum volutpat turpis malesuada ac turpis.
            </div>
          </div>
          <div className="justify-center items-start gap-2 inline-flex">
            <Check />
            <div className="text-black text-lg font-normal leading-[28.80px]">
              Tortor ipsum pretium quis nunc.
            </div>
          </div>
          <div className="justify-center items-start gap-2 inline-flex">
            <Check />
            <div className="text-black text-lg font-normal leading-[28.80px]">
              Vitae odio a id purus in.
            </div>
          </div>
        </div>
      </div>

      <div className="relative lg:w-[40%] h-full">
        <Image
          alt="past-event"
            width={550}
            height={200}
          quality={50}
          className="object-cover"
          src="/assets/images/post_event.png"
        />
      </div>

      {/* <div className="flex flex-col md:flex-row mt-16 justify-start items-center gap-12">
        <div className="flex-col lg:w-[60vw] justify-start items-start gap-4 flex">
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="text-primary text-sm font-bold font-['Arimo'] tracking-tight">
              Past Event
            </div>
            <div className="flex-col justify-start items-start gap-2 inline-flex font-bold font-['Roboto']">
              <div className="text-slate-900 text-5xl leading-[52.80px]">
                Powerful tools.
              </div>
              <div className="text-indigo-400 text-5xl leading-[52.80px]">
                More control.
              </div>
            </div>
          </div>
          <div className="text-slate-900 text-lg font-normal font-['Roboto']">
            Scelerisque auctor dolor diam tortor, fames faucibus non interdum
            nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
            adipiscing lacinia. Scelerisque auctor dolor diam tortor, fames
            faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac,
            rutrum molestie adipiscing lacinia. Scelerisque auctor dolor diam
            tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit
            gravida ac, rutrum molestie adipiscing lacinia. Scelerisque auctor
            dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh
            sapien elit gravida ac, rutrum molestie adipiscing lacinia.
          </div>
        </div>

        <div className="lg:flex flex-col hidden justify-start items-start gap-4">
          <Image
            alt="courses"
            width={400}
            height={200}
            quality={100}
            className="rounded-lg"
            src="/assets/images/past-event-1.png"
          />
          <Image
            alt="courses"
            width={400}
            height={200}
            quality={100}
            className="rounded-lg"
            src="/assets/images/courses.png"
          />
        </div>
      </div> */}
    </div>
  );
}

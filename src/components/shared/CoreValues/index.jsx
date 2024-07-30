"use client";

import React from "react";
import Image from "next/image";
import { coreValuesdata } from "@/data/index";

const CoreValues = () => {
  return (
    <>
      {/* <!-- ===== CoreValues Start ===== --> */}
      <section className="mt-20 mb-[80px] mx-auto">
        <div className="w-full mx-auto">
          <div className="w-full mx-auto lg:mx-auto sm:ml-5">
            <p className="font-bold lg:text-sm/[20px] mb-1">OUR STRENGTHS</p>
            <h2 className="font-extrabold text-3xl md:text-5xl mb-4">
              Core Values
            </h2>
            <p className="md:w-[50vw] mb-4">
              Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et
              et.Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et
              et.
            </p>
          </div>

          <div className="w-full mx-auto py-5 text-white grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 lg:mx-auto gap-8 xl:gap-18">
            {coreValuesdata.map((value) => (
              <div className="max-w-[1200px] py-5 text-left mx-auto">
                <div className="reletive w-[41.33px] h-[64px] mb-2">
                  <Image
                    alt="trustlogo"
                    width={64}
                    height={64}
                    quality={100}
                    className=""
                    src={value.imgURL}
                  />
                </div>

                <h2 className="font-bold lg:text-3xl mb-2 text-black">
                  {value.label}
                </h2>

                <p className="text-black xl:w-[70%]">
                  Pretium lectus ultrices sit tempor, sit ullamcorper volutpat
                  et et.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== CoreValues End ===== --> */}
    </>
  );
};

export default CoreValues;

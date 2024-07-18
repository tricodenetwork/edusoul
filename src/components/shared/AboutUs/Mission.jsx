"use client";

import React from "react";
import Image from "next/image";

function Mission() {
  return (
    <>
      {/* <!-- ===== CoreValues Start ===== --> */}
      <section className="mx-auto mb-20">
        <div className="h-max lg:flex justify-evenly">
          <div className="lg:w-[50%] p-1">
            <Image
              alt="logo"
              width={500}
              height={500}
              quality={100}
              src="/assets/images/LargePhoto.png"
              className="p-1 mx-auto"
            />
          </div>

          <div className="lg:w-[50%]">
            <div className="lg:p-9 font-extrabold lg:text-5xl">
              <p>Our Mission</p>
            </div>

            <div className="lg:p-9 lg:leading-7 lg:w-[96%]">
              <p className="lg:mb-8">
                This training and discipline will immensely contribute to the
                student's professional and career development as critical,
                competent servants-leaders; distinctive Christains Educators
                within global Christain School organisations, and an agents for
                moral and spiritual transformation in learners.
              </p>

              <p className="lg:mb-8">
                The program will empower participants towards fufilling the high
                calling to impacts and raise G3s - Matt.5v16, Isaiah 58v12, John
                17:3.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CoreValues End ===== --> */}
    </>
  );
}

export default Mission;

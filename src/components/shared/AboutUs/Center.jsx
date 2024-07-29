"use client";

import React from "react";
import Image from "next/image";

function Center() {
  return (
    <>
      {/* <!-- ===== Center Start ===== --> */}

      <div className='h-max bg-[#90050F] lg:p-20 max-sm:p-5'>
        <div className='h-max lg:flex justify-evenly'>
          <div className='lg:w-[50%]'>
            <div className='lg:p-9 font-bold lg:text-5xl'>
              <p className='text-white leading-relaxed max-sm:text-[30px] max-sm:m-2'>
                Why Christ-Centered Education?
              </p>
            </div>
          </div>

          <div className='lg:w-[50%] max-sm:m-4 h-fit my-auto text-[#FFFFFF]'>
            <li className='lg:w-[80%]'>
              Professional career developement as critical, innovative
              educators.
            </li>
            <li>Moral and spiritual transformation in learners.</li>
            <li className='lg:w-[78%]'>Empower to impact and raise Godly. Global Generations (G3s).</li>
          </div>
        </div>
      </div>

      {/* <!-- ===== Center End ===== --> */}
    </>
  );
}

export default Center;

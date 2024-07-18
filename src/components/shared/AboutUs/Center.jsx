"use client";

import React from "react";
import Image from "next/image";

function Center() {
  return (

    <>
      {/* <!-- ===== Center Start ===== --> */}

    <div className="border-black border-2 h-max bg-[#90050F] lg:p-20 sm:p-5">

        <div className="h-max lg:flex justify-evenly">

            <div className="lg:w-[50%]">

            <div className="lg:p-9 font-bold lg:text-5xl">
                <p className="text-white leading-relaxed">Why Christ-Centered Education?</p>
            </div>

            </div>

            <div className="lg:w-[50%] p-1 text-gray-400 leading-relaxed p-10">
                <li>Professional career developement as critical, innovative educators.</li>
                <li>Moral and spiritual transformation in learners.</li>
                <li>Empower to impact and raise Godly. Global Generations(G3s)</li>
            </div>

        </div>

    </div>

      {/* <!-- ===== Center End ===== --> */}
    </>
    
  );
}

export default Center;

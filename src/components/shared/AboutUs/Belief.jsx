"use client";

import React from "react";
import Image from "next/image";

function Mission() {
  return (
    <>
      {/* <!-- ===== Mission Start ===== --> */}
      <section className="mx-auto mb-20">
        <div className="h-max lg:flex justify-evenly">
          <div className="lg:w-[50%]">
            <div className="lg:p-9 font-extrabold lg:text-5xl">
              <p className="leading-relaxed">
                Fundamental of the faith we believe in
              </p>
            </div>

            <div className="lg:p-9 lg:w-[96%]">
              <li>The inspiration of the bible.</li>
              <li>Belief in the one God; Father, Son, and Holy Spirit.</li>
              <li>
                The pre-existence, incarnation, and resurrection of Jesus
                Christ.
              </li>
              <li>
                The fall of man and the need for regenration through the Holy
                Spirit.
              </li>
              <li>
                Living a life of righteousness and holiness, seperate from
                worldly values.
              </li>
            </div>
          </div>

          <div className="lg:w-[50%] p-1">
            <Image
              alt="logo"
              width={500}
              height={500}
              quality={100}
              src="/assets/images/Belief.png"
              className="p-1 mx-auto"
            />
          </div>
        </div>
      </section>
      {/* <!-- ===== Mission End ===== --> */}
    </>
  );
}

export default Mission;

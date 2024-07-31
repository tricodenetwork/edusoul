"use client";

import React from "react";
import { motion } from "framer-motion";

function Center() {
  return (
    <>
      {/* <!-- ===== Center Start ===== --> */}

      <div className='h-max bg-[#90050F] lg:p-20 max-sm:p-5'>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top"
        >
        <div className='h-max lg:flex justify-evenly'>
          <div className='lg:w-[50%]'>
            <div className='lg:p-9 font-bold lg:text-5xl'>
              <p className='text-white leading-relaxed max-sm:text-[30px] max-sm:m-2'>
                Why Christ-Centered Education?
              </p>
            </div>
          </div>

          <div className='lg:w-[50%] max-sm:m-4 h-fit my-auto text-[#D6D6D6]'>
            <li className='lg:w-[80%] mb-1'>
              Professional career developement as critical, innovative
              educators.
            </li>
            <li className="mb-1">Moral and spiritual transformation in learners.</li>
            <li className='lg:w-[78%]'>Empower to impact and raise Godly. Global Generations (G3s).</li>
          </div>
        </div>
        </motion.div>
      </div>

      {/* <!-- ===== Center End ===== --> */}
    </>
  );
}

export default Center;

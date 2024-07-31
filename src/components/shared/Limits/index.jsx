"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Limits() {
  return (
    <div className="flex h-[374px] flex-col-reverse md:flex-row mt-16 justify-between items-center">

      <div className="relative md:w-[48%] h-full">
        
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: -50,
          },

          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_left"
      >
        <Image
          alt="limits"
          fill
          quality={100}
          className="rounded-lg object-cover"
          src="/assets/images/courses.png"
        />
        </motion.div>
      </div>




      <div className="flex-col md:w-[48%] h-full justify-center items-start gap-4 flex">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: 50,
          },

          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_right"
      >
        <div className="flex-col justify-start items-start gap-3 flex">
          <h5 className="text-[#475569] text-xl font-bold uppercase tracking-[3px]">
            No limits
          </h5>
          <h3 className="text-appBlack text-[56px] leading-none xl:w-[80%] font-extrabold">
            What we plan to achieve with you
          </h3>
        </div>
        <p className="text-appBlack mt-4 text-lg lg:w-[90%]">
          EduSoul aims to provide a Christ-centered education program that
          raises distinctive educators. The goal is to equip 21st-century
          leaders with skills and methodologies for successful, life-long
          professionalism within the Christian education sector.
        </p>
      </motion.div>
      </div>
      
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Teams from "./Teams";
import { motion } from "framer-motion";

export default function Mandate({ mobile }) {
  return (
    <div
      id='our-mandate'
      className='flex md:h-[374px] flex-col gap-[5vh] md:gap-0 pt-[80px] md:flex-row md:my-[80px] justify-between items-center'
    >
      <div className='flex-col md:w-[48%]  h-full justify-center  items-start gap-4 flex'>
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
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className='animate_left'
        >
          <div className='flex-col justify-start items-start gap-3 flex'>
            <h5 className='text-[#475569] text-xl font-bold uppercase tracking-[3px]'>
              Our Mandate
            </h5>
            <h3 className='text-appBlack text-[36px] md:text-[56px] leading-none xl:w-[80%] font-extrabold'>
              What drives us to do what we do
            </h3>
          </div>
          <p className='text-appBlack mt-4 text-lg lg:w-[90%]'>
            EduSoul focuses on transformational learning relevant to both
            age-old and current societal challenges. The program encourages
            participants to think critically about learning and how to best
            support each child's unique potential.
          </p>
        </motion.div>
      </div>

      <div className='relative md:w-[48%] w-full  h-[374px] md:h-full'>
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
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className='animate_right'
        >
          <Image
            alt='limits'
            fill
            quality={100}
            className='rounded-lg object-cover'
            src='/assets/images/our-mandate.png'
          />
        </motion.div>
      </div>
    </div>
  );
}

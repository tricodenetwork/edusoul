"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Mission() {
  return (
    <>
      {/* <!-- ===== Mission Start ===== --> */}
      <section className='mx-auto mb-20'>
        <div className='h-max flex justify-evenly max-sm:flex-col-reverse'>
          <div className='lg:w-[50%] p-1'>
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
              <Image
                alt='logo'
                width={500}
                height={500}
                quality={100}
                src='/assets/images/about/mission.png'
                className='p-1 mx-auto'
              />
            </motion.div>
          </div>

          <div className='lg:w-[50%] h-fit my-auto'>
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
              <div className='font-extrabold lg:text-5xl mb-10'>
                <p className='max-sm:text-[48px] max-sm:font-semibold max-sm:-mt-2'>
                  our Mission
                </p>
              </div>

              <div className='lg:p-9 lg:leading-7 lg:w-[96%]'>
                <p className='lg:mb-8'>
                  This training and discipline will immensely contribute to the
                  student's professional and career development as critical,
                  competent servants-leaders; distinctive Christains Educators
                  within global Christain School organisations, and an agents
                  for moral and spiritual transformation in learners.
                </p>

                <p className='lg:mb-8'>
                  The program will empower participants towards fufilling the
                  high calling to impacts and raise G3s - Matt.5v16, Isaiah
                  58v12, John 17:3.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Mission End ===== --> */}
    </>
  );
}

export default Mission;

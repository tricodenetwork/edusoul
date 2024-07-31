"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Mission() {
  return (
    <>
      {/* <!-- ===== Mission Start ===== --> */}
      <section className="mx-auto mb-20">

        <div className="h-max flex justify-evenly max-sm:flex-col-reverse">

          <div className="lg:w-[50%] p-1">
            
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
              alt="logo"
              width={500}
              height={500}
              quality={100}
              src="/assets/images/about/mission.png"
              className="p-1 mx-auto"
            />
            </motion.div>
            
          </div>

          <div className="lg:w-[50%] h-fit my-auto">
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
            <div className="font-extrabold lg:text-5xl mb-10">
              <p className="max-sm:text-[48px] max-sm:font-semibold max-sm:-mt-2">our Mission</p>
            </div>

            <div className="lg:leading-7 lg:w-[80%] border-l-4 border-[#AA205E] rounded-s-sm pl-6 max-sm:m-2">

              <p className="lg:mb-5 text-[#AA205E] font-semibold">
                To equip 21st-century-leaders with skills and methodologies for evolving professionalism with christain education.
              </p>

              <p>
                The program facilitate transformational learning relevant to both historical and contemporary educational challenges.
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

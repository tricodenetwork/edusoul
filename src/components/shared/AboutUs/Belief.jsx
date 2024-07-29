"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Mission() {
  return (
    <>
      {/* <!-- ===== Mission Start ===== --> */}
      <section className="mx-auto mb-20">

        <div className="h-max lg:flex justify-evenly">

            <div className="lg:w-[50%] my-auto">

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
                <div className="lg:p-9 lg:w-[96%] lg:ml-7">
                  
                  <p className="p-2 text-[55px] max-sm:text-[30px] max-sm:leading-[2rem] font-semibold leading-[3.5rem]">
                    Fundamental of the faith we believe in
                  </p>

                  <ul className="list-disc mt-7 ml-8">

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

                  </ul>

                </div>

              </motion.div>
            </div>

            <div className="lg:w-[50%] p-1">
              
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
              <Image
                alt="logo"
                width={500}
                height={500}
                quality={100}
                src="/assets/images/Belief.png"
                className="p-1 mx-auto"
              />
          </motion.div>
            </div>

        </div>

      </section>
      {/* <!-- ===== Mission End ===== --> */}
    </>
  );
}

export default Mission;

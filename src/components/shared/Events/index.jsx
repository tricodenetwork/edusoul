"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Events() {
  return (
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
      <div className="flex lg:h-[792px] flex-col-reverse bg-[#8f060e]/5 lg:flex-row mt-[80px] px-14 xl:px-20 py-20 w-full gap-8 justify-center lg:items-center rounded">
        <div className="relative w-[48%] h-[80%]">
          <Image
            alt="limits"
            fill
            quality={100}
            className="rounded-lg object-cover shadow-lg shadow-[#000000]/20"
            src="/assets/images/upcoming-event.png"
          />
        </div>
        <div className="flex-col lg:w-[48%] h-full justify-center items-start gap-4 flex">
          <div className="flex-col justify-start items-start gap-3 flex">
            <h5 className="text-[#29CC7A] text-xl font-bold uppercase tracking-[3px]">
              Upcoming Event
            </h5>
            <h2 className="text-appBlack text-[56px] leading-none font-extrabold">
              Tech Expo 24
            </h2>
            <h4 className="text-black text-xl font-normal leading-[30px] tracking-tight">
              August 17 - August 30 2024
            </h4>
          </div>

          <div className="flex flex-col text-appBlack mt-4 gap-4 text-lg w-[98%]">
            <p>
              Our tech exhibition brings together the latest advancements and
              cutting-edge products from leading industry experts. From
              state-of-the-art gadgets to revolutionary software solutions,
              immerse yourself in the future of technology. Engage with top
              minds, explore interactive displays, and witness live demos that
              redefine what's possible.
            </p>
            <p>
              Whether you're a tech enthusiast, industry professional, or
              curious explorer, this exhibition is your gateway to the forefront
              of innovation.
            </p>
            <p>
              Whether you're a tech enthusiast, industry professional, or
              curious explorer, this exhibition is your gateway to the forefront
              of innovation.
            </p>
            Join us and be inspired by the limitless possibilities!"
          </div>

          <Link href={"/auth/register"}>
            <button className="px-8 py-2.5 mt-8 rounded-[10px] border-2 border-primary justify-center items-center flex hover:bg-white bg-primary transition-all duration-300 group shadow-lg shadow-[#000000]/20">
              <div className="group-hover:text-primary text-xl font-medium font-['Roboto'] leading-normal tracking-wide text-white">
                Register
              </div>
            </button>
          </Link>
        </div>
      </div>
      </motion.div>
  );
}

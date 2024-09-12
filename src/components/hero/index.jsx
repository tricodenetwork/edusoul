"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { AnimatePresence, motion } from "framer-motion";

const patners = ["astrom", "cicio", "weavy", "vRockets", "viewio"];
const carousel = [
  "/assets/images/hero/1.png",
  "/assets/images/hero/2.png",
  "/assets/images/hero/5.png",
  "/assets/images/hero/4.png",
];

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='w-full mx-auto mt-[60px] md:mt-[80px] flex px-5 md:px-[60px] bg-primary bg-opacity-[0.03] pt-[16vh] md:pt-[126px] flex-col items-start justify-start relative h-screen md:h-[120vh]'>
      {carousel.map((item, index) => (
        <AnimatePresence key={index.toString()}>
          {activeIndex === index && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className='w-full md:w-[94%] mx-auto top-0 mt-[20px] md:mt-[28px] self-center h-[86vh] md:h-[674px] absolute'
            >
              <Image
                alt='logo'
                fill
                className='object-cover mx-auto md:rounded-[10px]'
                quality={100}
                src={item}
              />
            </motion.div>
          )}
        </AnimatePresence>
      ))}
      <section className='flex ml-4 md:ml-[30px] lg:ml-[68px] z-10 self-start mt-[20px] md:mt-[28px] md:py-[4em] flex-col items-start h-max md:justify-center'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <div className='text-white text-2xl md:text-[28px] font-medium'>
            Distinct Christian Education{" "}
          </div>
          <div className='text-appYellow text-4xl w-[80%] md:w-full md:text-[58px] font-extrabold'>
            EDUSOUL INSTITUTE
          </div>
          <div className='flex flex-col gap-3 md:w-[45vw]'>
            <span className='text-white lg:text-xl font-normal leading-7'>
              An Education programme with perspective and relevance in raising
              distinctive educators within Christ-centred education.
            </span>
            <span className='text-[#DBB632] mt-6 text-xl font-normal leading-7'>
              {"(Col.2v3. Isa.58v12)"}
            </span>
          </div>
        </div>

        <div className='flex flex-col mt-[42px] justify-start items-start gap-8'>
          <div className='flex flex-row justify-start items-start gap-3'>
            <Link
              href='/'
              className='w-max px-4 md:px-7 py-4 duration-300 bg-white text-primary hover:bg-primary hover:text-white rounded shadow justify-center items-center font-bold gap-3 flex'
            >
              <WbTwilightIcon />
              <div className='text-sm md:text-lg font-semibold'>Learn More</div>
            </Link>

            <Link
              href='/auth/login'
              className='w-max px-4 md:px-7 py-4 duration-300 hover:bg-white hover:text-primary bg-primary text-white rounded shadow justify-center items-center font-bold gap-3 flex'
            >
              <div className='text-sm md:text-lg font-semibold'>
                Get Started
              </div>
              <EastIcon />
            </Link>
          </div>

          <div className='justify-start items-center gap-2 flex'>
            {carousel.map((_, index) => (
              <motion.div
                key={index.toString()}
                onClick={() => setActiveIndex(index)}
                initial={{
                  backgroundColor: "#f9f9f9",
                  borderColor: "#090909",
                }}
                animate={{
                  backgroundColor:
                    index === activeIndex ? "#090909" : "#f9f9f9",
                  borderColor: index === activeIndex ? "#f9f9f9" : "#090909",
                }}
                transition={{ duration: 2 }}
                className='w-[13px] h-[13px] cursor-pointer rounded-full border border-white justify-end items-center flex'
              />
            ))}
          </div>
        </div>
      </section>
      <section className='flex z-30 absolute  w-full px-[20px] md:px-[80px] justify-between gap-[5vw] bottom-7 md:bottom-10 self-center items-center'>
        <Marquee
          direction='left'
          speed={80}
          delay={5}
          play={!false}
          pauseOnHover={true}
          autoFill={!true}
          // className=' overflow-x-scroll bord w-screen'
        >
          <div className='flex w-[200vw]  md:w-[85vw] justify-around  items-center'>
            {patners.map((item, ind) => (
              <div
                key={ind.toString()}
                className='w-[80px] h-[30px] md:w-[150px] md:h-[46px] relative'
              >
                <Image
                  fill
                  src={`/assets/logos/${item}.svg`}
                  alt='log'
                  className=''
                />
              </div>
            ))}
          </div>
        </Marquee>
      </section>
    </div>
  );
}

export default HeroSection;

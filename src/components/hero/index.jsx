import React from "react";
import Image from "next/image";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";

const patners = ["astrom", "cicio", "weavy", "vRockets", "vRockets", "viewio"];

function HeroSection() {
  return (
    <div className=' w-full mx-auto flex mt-[80px] px-5 md:px-[60px] bg-primary bg-opacity-[0.03]  pt-[12vh] md:pt-[126px]  flex-col items-start  justify-start  relative h-[120vh]'>
      <div className='w-full md:w-[94%] mx-auto   top-0  mt-[20px] md:mt-[28px] self-center h-[70vh] md:h-[674px] absolute'>
        <Image
          alt='logo'
          fill
          className='object-cover mx-auto rounded-[10px]'
          quality={100}
          src='/assets/images/hero/home-1.png'
        />
      </div>
      <section className='flex ml-4  md:ml-[68px] z-10 self-start mt-[20px] md:mt-[28px]   md:py-[4em] flex-col items-start h-max md:justify-center'>
        <div className='flex  flex-col justify-start items-start gap-6'>
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

        <div className='flex  flex-col mt-[42px] justify-start items-start gap-8'>
          <div className='flex flex-row justify-start items-start gap-3'>
            <Link
              href='/'
              className='w-max px-4 md:px-7 py-4 bg-white text-primary hover:bg-primary hover:text-white rounded shadow justify-center items-center font-bold gap-3 flex'
            >
              <WbTwilightIcon />
              <div className='text-sm md:text-lg  font-semibold'>
                Learn More
              </div>
            </Link>

            <Link
              href='/auth/login'
              className='w-max px-4 md:px-7 py-4 hover:bg-white hover:text-primary bg-primary text-white rounded shadow justify-center items-center font-bold gap-3 flex'
            >
              <div className='text-sm md:text-lg  font-semibold'>
                Get Started
              </div>
              <EastIcon />
            </Link>
          </div>

          <div className='justify-start items-center gap-2 inline-flex'>
            <div className='pl-px pt-px bg-neutral-950 rounded-xl border border-white justify-end items-center flex'>
              <div className='w-3 h-3 px-0.5 pt-0.5 pb-px justify-center items-center inline-flex' />
            </div>
            <div className='w-3 h-3 relative bg-neutral-100 rounded-xl border border-black' />
          </div>
        </div>
      </section>
      <section className='flex z-30 absolute w-full px-[80px]  justify-between bottom-10 self-center items-center'>
        {patners.map((item, ind) => {
          return (
            <Image
              width={150}
              height={46}
              key={ind.toString()}
              src={`/assets/logos/${item}.svg`}
              alt='log'
            />
          );
        })}
      </section>
    </div>
  );
}

export default HeroSection;

"use client";

import React from "react";
import Image from "next/image";
import NavBar from "@/components/shared/NavBar/nav";
import Courses from "@/components/shared/Courses";
import Mission from "@/components/shared/AboutUs/Mission";
import Belief from "@/components/shared/AboutUs/Belief";
import Center from "@/components/shared/AboutUs/Center";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/AboutUs/Hero";

// function Aboutus() {
//   return (
//     <>
//       {/* <!-- ===== AboutUs Start ===== --> */}
//       <NavBar />
//       <section className="mx-auto">

//         <Mission />
//         <Belief />
//         <Center />
//       </section>
//       <Footer />
//       {/* <!-- ===== AboutUs End ===== --> */}
//     </>
//   );
// }

// export default Aboutus;

// ABOUT US UPDATED CODE 22/07/2024 START //

function Aboutus() {
  return (
    <>
      {/* <!-- ===== About us Start ===== --> */}
      <section className='w-full'>
        <HeroSection />

        <div className='h-max bg-[#170E13]  bg-opacity-5 relative md:bottom-[6.5vh]  lg:p-20 px-10 py-20'>
          <iframe
            src='https://www.youtube.com/embed/viHILXVY_eU?si=mQqGAGXU1NhUBfQf'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen
            className='mx-auto lg:w-[915px] lg:h-[415px] rounded-2xl'
          />
        </div>

        <div className='h-max'>
          <div className='p-9'>
            <div className='lg:p-9 font-extrabold lg:text-5xl text-center'>
              <p>Empower your career</p>
            </div>

            <div className='lg:p-9 lg:text-2xl lg:w-[70%] text-center mx-auto'>
              <p className='lg:mb-8 text-base'>
                This training and discipline will immensely contribute to the
                student's professional and career development as critical,
                competent servants-leaders; distinctive Christains Educators
                within global Christain School organisations, and an agents for
                moral and spiritual transformation in learners.
              </p>

              <p className='lg:mb-8 text-base'>
                The program will empower participants towards fufilling the high
                calling to impacts and raise G3s - Matt.5v16, Isaiah 58v12, John
                17:3.
              </p>

              <p className='lg:mb-8 text-base'>
                Investment in this professional and career developement is
                investing in the 'soul purpose of our humanity' for generations.
                Matt. 13v45-46
              </p>
            </div>
          </div>
        </div>
        <div className='px-[7vw]'>
          <Courses />
          <Mission />
          <Belief />
        </div>
        <Center />
      </section>
      <Footer />
      {/* <!-- ===== About us End ===== --> */}
    </>
  );
}

export default Aboutus;

// ABOUT US UPDATED CODE 22/07/2024 END //

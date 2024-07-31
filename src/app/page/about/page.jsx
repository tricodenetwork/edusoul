"use client";

import React from "react";
import Image from "next/image";
import NavBar from "@/components/shared/NavBar/nav";
import Courses from '@/components/shared/Courses';
import Mission from "@/components/shared/AboutUs/Mission";
import Belief from "@/components/shared/AboutUs/Belief";
import Center from "@/components/shared/AboutUs/Center";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/AboutUs/Hero";
import { motion } from "framer-motion";

function Aboutus() {
  return (

    <>
      {/* <!-- ===== About us Start ===== --> */}
      <NavBar />
      <section className="mx-auto">


        <HeroSection />

        <div className="h-max bg-[#D6D6D6] pt-[15%] pb-[8%]">

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
            <iframe 
              src="https://www.youtube.com/embed/viHILXVY_eU?si=mQqGAGXU1NhUBfQf" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
              className="mx-auto lg:w-[915px] lg:h-[415px] rounded-2xl"
            />
          </motion.div>

        </div>

        <div className="h-max">
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
            <div className="p-9">
              <div className="lg:p-9 font-extrabold lg:text-5xl text-center">
                <p className="max-sm:text-[30px] max-sm:mb-3">Empower your career</p>
              </div>
              
              <div className="lg:p-9 lg:text-2xl lg:w-[70%] text-center mx-auto">

                <p className="lg:mb-8 text-base max-sm:mb-3">
                  This training and discipline will immensely contribute to the student's professional and career development as critical, competent servants-leaders; distinctive Christains Educators within global Christain School organisations, and an agents for moral and spiritual transformation in learners.
                </p>
                
                <p className="lg:mb-8 text-base max-sm:mb-3">
                  The program will empower participants towards fufilling the high calling to impacts and raise G3s - Matt.5v16, Isaiah 58v12, John 17:3.
                </p>
                
                <p className="lg:mb-8 text-base max-sm:mb-3">
                  Investment in this professional and career developement is investing in the 'soul purpose of our humanity' for generations. Matt. 13v45-46
                </p>

              </div>

            </div>
          </motion.div>
        </div>

        <Courses />
        <Mission/>
        <Belief/>
        <Center/>

      </section>
      <Footer />
      {/* <!-- ===== About us End ===== --> */}
    </>
    
  );
}

export default Aboutus;

// ABOUT US UPDATED CODE 22/07/2024 END // 

import React from "react";
import Navbar from "@/components/shared/NavBar/nav";
import HeroSection from "@/components/hero";
import Courses from "@/components/shared/Courses";
import Limits from "@/components/shared/Limits";
import Mandate from "@/components/shared/Our-Mandate";
import CoreValues from "@/components/shared/CoreValues";
// import Modules from '@/components/shared/Modules';
import FAQs from "@/components/shared/Faq";
import Footer from "@/components/shared/Footer";
import Teams from "@/components/shared/Our-Mandate/Teams";

export default function App() {
  return (
    <>
      <HeroSection />
      <main className='mt-[2vh] md:mt-[9vh] w-full px-[7vw]'>
        <Courses />
        <Limits />
        <Mandate />
      </main>
      <Teams />
      <main className='px-[90.5px] mt-[80px]'>
        <CoreValues />
        {/* <Modules /> */}
      </main>
      <FAQs />
      {/* <Footer /> */}
    </>
  );
}

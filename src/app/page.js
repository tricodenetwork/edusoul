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

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Courses />
      <main className='w-full px-3 sm:px-6 md:px-10 lg:px-6 xl:px-14 pt-[2rem] mt-[80px]'>
        <Limits />
      </main>
      <Mandate />
      <main className='px-3 sm:px-6 md:px-10 lg:px-6 xl:px-14 pt-[2rem]'>
        <CoreValues />
        {/* <Modules /> */}
      </main>
      <FAQs />
      <Footer />
    </>
  );
}

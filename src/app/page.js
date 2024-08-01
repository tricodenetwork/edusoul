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
      <HeroSection />
      <main className='mt-[80px]'>
        <Courses />
      </main>
      <Limits />
      <Mandate />
      <main className='px-3 sm:px-6 md:px-10 lg:px-6 xl:px-14 mt-[80px]'>
        <CoreValues />
        {/* <Modules /> */}
      </main>
      <FAQs />
      <Footer />
    </>
  );
}

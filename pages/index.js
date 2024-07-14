import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/Components/shared/NavBar/nav';
import HeroSection from '@/Components/Hero/hero';
import Courses from '@/Components/shared/Courses';
import Limits from '@/Components/shared/Limits';
import Mandate from '@/Components/shared/Our-Mandate';
import CoreValues from '@/Components/shared/CoreValues';
// import Modules from '@/Components/shared/Modules';
import FAQs from '@/Components/shared/Faq';
import Footer from '@/Components/shared/Footer';

export default function App() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className="px-3 sm:px-6 lg:px-14 pt-[4rem]">
        <HeroSection />
        <Courses />
        <Limits />
      </main>
      <Mandate />
      <main className="px-3 sm:px-6 lg:px-14 pt-[2rem]">
        <CoreValues />
        {/* <Modules /> */}
      </main>
        <FAQs />
      <Footer />
    </>
  );
}

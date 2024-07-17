import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/shared/NavBar/nav';
import HeroSection from '@/components/hero';
import Courses from '@/components/shared/Courses';
import Limits from '@/components/shared/Limits';
import Mandate from '@/components/shared/Our-Mandate';
import CoreValues from '@/components/shared/CoreValues';
// import Modules from '@/Components/shared/Modules';
import FAQs from '@/components/shared/Faq';
import Footer from '@/components/shared/Footer';

export default function App() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className="px-3 sm:px-6 md:px-10 lg:px-6 xl:px-14 pt-[4rem]">
        <HeroSection />
        <Courses />
        <Limits />
      </main>
      <Mandate />
      <main className="px-3 sm:px-6 md:px-10 lg:px-6 xl:px-14 pt-[2rem]">
        <CoreValues />
        {/* <Modules /> */}
      </main>
      <FAQs />
      <Footer />
    </>
  );
}

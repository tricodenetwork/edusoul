import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Navbar from '@/Components/shared/NavBar/nav';
import Footer from '@/Components/shared/Footer';
import HeroSection from '@/Components/Hero/hero';
import Courses from '@/Components/shared/Courses';
import Mandate from '@/Components/shared/Our-Mandate';
import FAQs from '@/Components/shared/Faq';
import Modules from '@/Components/shared/Modules';

export default function App() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className="px-3 sm:px-6 lg:px-14 pt-[4rem]">
        <HeroSection />
        <Courses />
      </main>
      <Mandate />
      <main className="px-3 sm:px-6 lg:px-14 pt-[2rem]">
        <Modules />
        <FAQs />
      </main>
      <Footer />
    </>
  );
}

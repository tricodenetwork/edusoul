"use client";

import React from "react";
import Navbar from "@/components/shared/NavBar/nav";
import Events from "@/components/shared/Events";
import Past_Events from "@/components/shared/Events/Past_Events";
import Footer from "@/components/shared/Footer";

export default function EventPage() {
  return (
    <>
      <Navbar />
      <div className='px-[7vw] pb-6 mt-[2rem] md:mt-[6rem]'>
        <Events />
        <Past_Events />
      </div>
      <Footer />
    </>
  );
}

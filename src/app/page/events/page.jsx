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
      <Events />
      <div className="px-3 sm:px-6 md:px-10 lg:px-6 xl:px-14 pb-6">
        <Past_Events />
      </div>
      <Footer />
    </>
  );
}

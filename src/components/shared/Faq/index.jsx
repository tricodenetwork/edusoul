"use client";

import React, { useState } from "react";
import Accordion from "./accordion";
import { faqdata } from "./faqdata";
import Image from "next/image";

const FAQs = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const toggleAccordion = (accordionId) => {
    setOpenAccordionId((prevId) =>
      prevId === accordionId ? null : accordionId
    );
  };

  return (
    <div
      className='flex  flex-col relative px-[90.5px] bg-red-800 bg-opacity-5 gap-3 py-10 justify-between lg:justify-start  items-start w-full'
      id='faq'
    >
      <div className='text-3xl md:text-5xl font-bold tracking-wide'>
        Frequently asked questions
      </div>
      <div className='flex self-center  w-full flex-col items-start mt-3'>
        {faqdata.map((faq) => (
          <Accordion
            key={faq.id}
            accordionId={faq.id}
            answer={faq.answer}
            Businesses={faq.Businesses}
            including={faq.including}
            question={faq.question}
            isOpen={openAccordionId === faq.id}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQs;

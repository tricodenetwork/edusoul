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
    <div className="flex flex-col relative md:flex-row bg-red-800 bg-opacity-5 px-3 sm:px-6 lg:px-14 gap-3 py-10 justify-between lg:justify-start  items-start w-full" id='faq'>
      <div className=" self-center">
        <div className="text-3xl md:text-5xl font-bold tracking-wide">
          Frequently asked questions
        </div>
        <div className="flex self-center  w-full flex-col items-start mt-3">
          {faqdata.map((faq) => (
            <div key={faq.id} className="">
              <Accordion
                accordionId={faq.id}
                answer={faq.answer}
                Businesses={faq.Businesses}
                including={faq.including}
                question={faq.question}
                isOpen={openAccordionId === faq.id}
                toggleAccordion={toggleAccordion}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;

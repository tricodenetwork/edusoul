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
    <div className="flex flex-col relative md:flex-row gap-3 mb-5 justify-between lg:justify-start  items-start w-full" id='faq'>
      <div className=" self-center">
        <div className="text-2xl md:text-5xl semiBold tracking-wide">
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

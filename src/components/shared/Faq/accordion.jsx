"use client";

import React from "react";
import open from "./faq.svg";
import { AnimatePresence, motion } from "framer-motion";
// import close from "../../assets/accordionclose.svg";

const Accordion = ({
  accordionId,
  question,
  answer,
  isOpen,
  toggleAccordion,
  Businesses,
  including,
}) => {
  return (
    <div className='flex w-full duration-300 flex-col text-black pt-2 my-4 justify-center items-start'>
      <div
        onClick={() => toggleAccordion(accordionId)}
        className='border-t w-full   cursor-pointer flex flex-row pt-4 gap-3 rounded-md justify-between items-center'
      >
        <p className={`text-[15px] md:text-[18.687px] w-full font-bold`}>
          {question}
        </p>
        <div className='flex mr-auto justify-end items-end'>
          {isOpen ? (
            <img
              src='/assets/icons/right.svg'
              className='rotate-[90deg]'
              alt=''
            />
          ) : (
            <img src='/assets/icons/right.svg' alt='' />
          )}
        </div>
      </div>
      {/* <div className='flex flex-col bord text-black justify-center items-center'> */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.5 }}
            className='flex mt-2 flex-col w-full rounded-md justify-center items-start'
          >
            <p className='text-[15.29px] px-2'>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
      {/* </div> */}
    </div>
  );
};

export default Accordion;

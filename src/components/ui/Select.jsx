import React, { useState } from "react";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import { AnimatePresence } from "framer-motion";

import InputLine from "./InputLine";
import Image from "next/image";
const SelectComponent = ({ items, placeholder, style, onChange }) => {
  const [open, setOpen] = useState(false);
  const [value, setVal] = useState("");
  return (
    <OutsideClickHandler
      display='flex'
      onOutsideClick={() => {
        setOpen(false);
      }}
    >
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className={`flex cursor-pointer ${style} items-center z-10   w-full relative`}
      >
        <AnimatePresence mode='wait'>
          {open && (
            <motion.div
              initial={{ opacity: 100, translateY: "80%" }}
              animate={{
                opacity: 100,
                translateY: "105%",
              }}
              exit={{ opacity: 100, translateY: "10%" }}
              transition={{ duration: 0.3, type: "tween" }}
              className='w-full h-max z-10 absolute bottom-0 py-1  border scrollbar-hide bg-white overflow-y-scroll'
            >
              {items?.map((item, i) => (
                <p
                  key={i.toString()}
                  style={{ fontSize: 14 }}
                  onClick={() => {
                    //   onChange(item);
                    setVal(item);
                    setOpen(false);
                  }}
                  className={`regular cursor-pointer border-b hover:bg-slate-300/30 py-2 mb-2 px-2 text-binance_ash medium ${
                    item == "Completed"
                      ? "text-binance_green"
                      : item == "Paused"
                      ? "text-[#d9d9d9]"
                      : item == "Awaiting your review"
                      ? "text-purple-800"
                      : item == "Started"
                      ? "text-cyan-400"
                      : item == "Ongoing"
                      ? "text-amber-400"
                      : "text-gray-800"
                  }`}
                >
                  {item}
                </p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <InputLine
          styles={`bg-white `}
          placeholder={placeholder}
          value={value}
        />
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`absolute ${
            open ? "rotate-180 z-20" : "rotate-0"
          } duration-200 right-[14px] p-1 cursor-pointer self-center`}
        >
          {/* <KeyboardArrowDownOutlinedIcon
            sx={{
              fontSize: 24,
              cursor: "pointer",
              color: "#aab2c8",
            }}
          /> */}
          <Image
            src={"/assets/icons/down.svg"}
            width={12}
            height={12}
            alt='down'
          />
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default SelectComponent;

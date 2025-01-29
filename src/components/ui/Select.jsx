"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import { AnimatePresence } from "framer-motion";

import InputLine from "./InputLine";
import Image from "next/image";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
const SelectComponent = ({ items, placeholder, style, onChange, modules }) => {
  const [open, setOpen] = useState(false);
  const { module } = useSelector((state) => state.module);
  const [value, setVal] = useState(
    modules?.length > 0 ? `Module ${module}` : "None"
  );
  const path = usePathname();

  useEffect(() => {
    if (items?.length > 0) {
      onChange && onChange(path.includes("admin") ? items?.length : 1);
    }
    setVal(
      items?.length > 0
        ? `Module ${path.includes("admin") ? items?.length : 1}`
        : "None"
    );
  }, [items?.length]);
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
        className={`flex cursor-pointer ${style} items-center z-10   relative`}
      >
        <AnimatePresence mode='wait'>
          {open && (
            <motion.div
              initial={{ opacity: 100, translateY: "80%" }}
              animate={{
                opacity: 100,
                translateY: "105%",
              }}
              exit={{ opacity: 100, translateY: "105%", height: 0 }}
              transition={{ duration: 0.3, type: "tween" }}
              className='w-full h-max z-10 absolute bottom-0 py-1  border scrollbar-hide bg-white overflow-y-scroll'
            >
              {items?.map((item, i) => (
                <p
                  key={i.toString()}
                  style={{ fontSize: 14 }}
                  onClick={() => {
                    onChange(item);
                    setVal(`Module ${item}`);
                    setOpen(false);
                  }}
                  className={`regular cursor-pointer ${
                    module == item ? "bg-purple-300/30" : ""
                  } border-b hover:bg-slate-300/30 py-2 mb-2 px-2 text-binance_ash medium `}
                >
                  Module {item}
                </p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <InputLine
          styles={`bg-white `}
          placeholder={placeholder}
          value={value}
          type={"text"}
        />
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`absolute  flex justify-end w-full right-[14px] p-1 cursor-pointer self-center`}
        >
          <Image
            className={`duration-200 ${open ? "rotate-180 z-20" : "rotate-0"}`}
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

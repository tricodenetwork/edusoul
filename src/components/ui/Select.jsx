"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

const SelectComponent = ({
  label,
  items,
  placeholder,
  style,
  type,
  onChange,
  modules,
  error,
}) => {
  // --------------------------------------------VARIABLES
  const [open, setOpen] = useState(false);
  const { module } = useSelector((state) => state.module);
  const [value, setValue] = useState(
    type === "units"
      ? `Unit ${1}`
      : modules?.length > 0
      ? `Module ${module}`
      : "None"
  );
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const selectRef = useRef(null);
  const path = usePathname();

  // -----------------------------------------------------------FUNCTIONS

  // Handle keyboard events
  const handleKeyDown = (e) => {
    if (!open) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
        break;
      case "Enter":
        if (focusedIndex >= 0 && focusedIndex < items.length) {
          handleSelect(items[focusedIndex]);
        }
        break;
      case "Escape":
        setOpen(false);
        break;
      default:
        break;
    }
  };

  // Select an item
  const handleSelect = (item) => {
    onChange(item);
    setValue(
      type === "units"
        ? `Unit ${item}`
        : typeof item === "number"
        ? `Module ${item}`
        : item
    );
    setOpen(false);
  };

  // ------------------------------------------------------------------USE EFFECTS

  useEffect(() => {
    if (items?.length > 0) {
      onChange && onChange(path.includes("admin") ? items?.length : 1);
    }
    setValue(
      type === "units"
        ? `Unit ${1}`
        : modules?.length > 0
        ? `Module ${path.includes("admin") ? items?.length : 1}`
        : "None"
    );
  }, [items?.length]);

  useEffect(() => {
    if (open) setFocusedIndex(-1);
  }, [open]);

  return (
    <OutsideClickHandler
      display='contents'
      onOutsideClick={() => setOpen(false)}
    >
      {label && (
        <label className='block text-sm font-medium text-header_black mb-[10px]'>
          {label}
        </label>
      )}
      <div
        ref={selectRef}
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className={`flex cursor-pointer ${style} h-[50px]  text-sm bg-white border ${
          error ? "border-error" : "border-[#D0D5DD]"
        } rounded-md text-appBlack font-light ${
          open && "border-primary/40"
        } items-center relative`}
      >
        {/* Dropdown Options */}
        <AnimatePresence mode='wait'>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, type: "tween" }}
              className='w-full shadow-lg absolute top-full mt-1 border border-[#D0D5DD] bg-white rounded-md z-10'
            >
              {items?.map((item, i) => (
                <button
                  key={i.toString()}
                  onClick={() => handleSelect(item)}
                  className={`cursor-pointer border-b w-full text-left px-4 py-3 mb-2 ${
                    module == item ? "bg-[#D0D5DD]" : ""
                  } ${
                    focusedIndex === i ? "bg-[#D0D5DD]" : ""
                  } hover:bg-[#D0D5DD] transition`}
                >
                  {type === "units"
                    ? `Unit ${item}`
                    : typeof item === "number"
                    ? `Module ${item}`
                    : item}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Selected Value */}
        <p className={`px-4 ${placeholder && "text-ash2"}`}>
          {placeholder || value}
        </p>

        {/* Dropdown Icon */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          className='absolute right-4 cursor-pointer'
        >
          <Image
            className={`duration-200 ${open ? "rotate-180" : "rotate-0"}`}
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

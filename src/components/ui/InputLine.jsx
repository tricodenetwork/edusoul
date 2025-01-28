"use client";
import React from "react";
import { usePathname } from "next/navigation";

const InputLine = ({
  placeholder,
  type,
  value,
  onChange,
  styles,
  onKeyDown,
}) => {
  // --------------------------------------------VARIABLES
  const location = usePathname();
  const isRegister = location.split("/").pop() === `register`;

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS
  return (
    <input
      value={value}
      // onChange={onChange}
      readOnly
      type={type}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={`border-2 rounded-[8px] cursor-pointer ${styles} border-[#D0D5DD] text-sm focus:outline-none  py-3 px-[14px] text-appBlack placeholder:text-[#717171] w-full`}
    />
  );
};

export default React.memo(InputLine);

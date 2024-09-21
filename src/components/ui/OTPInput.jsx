"use client";

import React, { useRef } from "react";

const OTPInput = ({ length, onChange }) => {
  const inputRefs = useRef([]);
  const otpArray = inputRefs.current.map((input) => input.value || "");

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.match(/^[0-9]$/)) {
      // Ensure input is a digit
      otpArray[index] = value;
      onChange(otpArray);
      // Move to the next input field automatically
      if (index < length - 1 && value !== "") {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace
    if (e.key === "Backspace") {
      if (index > 0 && e.target.value === "") {
        // Move focus to the previous field if the current is empty
        inputRefs.current[index - 1].focus();
      } else if (e.target.value !== "") {
        // If the current field is not empty, clear it
        otpArray[index] = "";
        onChange(otpArray); // Update OTP array in parent
      }
    }

    // Handle arrow keys for better UX
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text").trim();
    if (pastedData.length === length) {
      const otpArr = pastedData.split("");
      otpArr.forEach((char, index) => {
        inputRefs.current[index].value = char;
      });
      onChange(otpArr); // Update OTP in the parent after paste
      inputRefs.current[length - 1].focus(); // Focus the last input
    }
    e.preventDefault();
  };

  return (
    <div className='flex md:gap-4 gap-2 justify-start items-center'>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type='password'
          maxLength={1}
          className={`w-[64px] ${
            otpArray[index] !== "" && "border-primary"
          } h-[64px] bg-[#F4F5F6] border border-[#00054C] border-opacity-40 rounded-[8px] text-center mx-1 focus:outline-none`}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default OTPInput;

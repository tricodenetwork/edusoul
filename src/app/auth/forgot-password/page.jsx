"use client";

import { useState, useEffect, useContext } from "react";
import { Router, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const labelStyle = "text-sm mb-2 font-normal text-[#151515]";
const inputStyle =
  "pt-2 h-[57px] placeholder:text-[#00054C] placeholder:opacity-40  focus:outline-none text-sm rounded-md block w-full p-3.5 border border-gray-300";

const FPForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(null);

  // ============================== SIGN IN

  const fogotPasswordAccount = async () => {
    try {
      setLoading(true);
      router.push(`/auth/verification?email=${email}`);
    } catch (error) {
      setLoading(false);
    }
  };

  const validateEmail = (mail) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(mail);

    // Set emailError based on validation result
    setEmailError(isValidEmail ? null : "Invalid email address");
  };

  const handleEmailChange = (e) => {
    validateEmail(e.target.value); // Validate email on each change
    setEmail(e.target.value);
  };

  const isFormValid = email && !emailError;

  return (
    <div className='flex text-center relative  h-[65vh]  w-[90%] md:w-[80%] px-[40px] justify-start items-center py-[32px] flex-col shadow-[0_4px_4px] shadow-black/5 rounded-[12px]'>
      {/* Header */}
      <div className='flex mb-6 items-center flex-col'>
        <h4 className='font-bold text-[28px] lg:text-[40px] mb-4 leading-normal text-appBlack'>
          Forgot Password
        </h4>
        <p className=' text-xs lg:text-sm text-[#475569]'>
          Enter your email address to reset your passsword
        </p>
      </div>

      {/* Email */}
      <div className='flex w-full flex-col items-start'>
        <label className={labelStyle}>Email</label>
        <input
          type='email'
          value={email}
          onChange={handleEmailChange}
          placeholder='Enter your email'
          className={inputStyle}
          required
        />
        {emailError && (
          <p className='text-red-500 mt-1 light text-xs'>{emailError}</p>
        )}
      </div>

      <Button
        type='submit'
        onClick={fogotPasswordAccount}
        className={`w-[95%] self-center text-white p-3 mt-10 rounded-md ${
          !isFormValid || isLoading
            ? "bg-[#FDCED1] cursor-not-allowed"
            : "bg-primary"
        }`}
        disabled={!isFormValid || isLoading}
      >
        {isLoading ? (
          <div className='flex gap-3 justify-center items-center'>
            <div className='animate-spin rounded-full h-5 w-5 border-b-4 border-white'></div>
            Loading...
          </div>
        ) : (
          "Continue"
        )}
      </Button>

      <Link
        href={"/auth/login"}
        className='flex w-max absolute bottom-[26px] gap-[14px] left-[30px] items-center justify-center'
      >
        <Image
          src={"/assets/icons/back-square.svg"}
          width={24}
          height={24}
          alt='logo'
          className='relative'
        />
        <h3 className='w-[120px] text-center text-[#8f060e] text-base font-normal underline leading-snug'>
          Back to Sign in
        </h3>
      </Link>
    </div>
  );
};

export default FPForm;

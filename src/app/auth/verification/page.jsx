"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import OTPInput from "@/components/ui/OTPInput";
import axios from "axios";
import toast from "react-hot-toast";
import { sendOtp } from "@/lib/actions";

const VerificationForm = () => {
  const router = useRouter();
  const [otp, setOTP] = useState(Array(6).fill("")); // Store each OTP digit
  const [isLoading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const handleOTPChange = (otpArray) => {
    setOTP(otpArray); // Update OTP array in state
  };

  const VerificationAccount = async () => {
    setLoading(true);
    const fullOTP = otp.join(""); // Join OTP array into a single string
    try {
      const res = await axios.post(`/api/verify-otp`, { email, otp: fullOTP });
      toast.success(res.data.message);
      router.push("/auth/reset-password");
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message ?? "An error occured");
      setLoading(false);
    }

    // Handle verification logic here
  };

  const fogotPasswordAccount = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message ?? "sent successfully!");
        setLoading(false);
      } else {
        toast.error(data.message || "Failed to send OTP");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  // Check if the form is valid by ensuring all 6 digits of OTP are filled
  const isFormValid = otp.every((digit) => digit !== "") && otp.length == 6;

  return (
    <div className='flex text-center h-max w-[80%] py-[32px] justify-start items-center px-[36.5px] flex-col shadow-[0_4px_4px] shadow-black/5 rounded-[12px]'>
      {/* Header */}
      <div className='flex mb-[36px] items-center flex-col'>
        <h4 className='font-bold mb-[36px] text-[28px] leading-normal text-appBlack'>
          We sent you a code
        </h4>
        <p className=' text-xs lg:text-sm text-[#475569]'>
          {`Enter the code we sent to ${email ?? ""}`}
        </p>
      </div>

      {/* OTP Input */}
      <div className='flex flex-col text-left gap-3 w-full mt-6 justify-center items-center'>
        <OTPInput length={6} onChange={handleOTPChange} />

        {/* Resend Link */}
        <div className='w-full justify-center text-sm text-[#171818] items-center mt-9 gap-1 inline-flex'>
          Didn’t get the code?
          <button
            onClick={fogotPasswordAccount}
            className='text-center text-primary text-sm hover:underline'
          >
            Click here to resend
          </button>
        </div>

        {/* Verify Button */}
        <Button
          type='submit'
          onClick={VerificationAccount}
          className={` text-white w-full p-3 mt-4 rounded-md ${
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
            "Verify"
          )}
        </Button>
      </div>
    </div>
  );
};

const VerificationFormWithSuspense = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerificationForm />
    </Suspense>
  );
};

export default VerificationFormWithSuspense;

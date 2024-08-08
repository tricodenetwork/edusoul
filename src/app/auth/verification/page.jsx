"use client";

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import OTPInput from "@/components/ui/OTPInput";

const VerificationForm = () => {
  const navigate = useRouter();
  const [otp, setOTP] = useState("");
  const [isLoading, setLoading] = useState(false);

  // ============================== SIGN IN

  const VerificationAccount = async () => {};

  const isFormValid = otp;

  return (
    <div className="flex text-center h-full w-[80%] p-3 justify-center items-center py-5 flex-col -translate-y-1 shadow-[0_4px_4px] shadow-black/25 rounded-[14px]">
      <h2 className="text-[30px] text-black font-bold pt-5 sm:pt-1">
        We sent you a code
      </h2>
      <p className="md:w-[90%] small-medium md:base-regular mt-4">
        Enter Code we sent to your C**********ly@gmail.com
      </p>

      <div className="flex flex-col text-left gap-3 w-full mt-6 justify-center items-center">
        <OTPInput
          length={5}
          onChange={(value, index) =>
            console.log(`Digit ${index + 1}: ${value}`)
          }
        />

        <div className="w-full justify-center items-center mt-4 gap-3 inline-flex">
          Didn’t get the code?
          <Link
            href="/"
            className="text-center text-primary  text-base font-bold  hover:underline"
          >
            Click here to resend
          </Link>
        </div>

        <Button
          type="submit"
          onClick={VerificationAccount}
          className={`bg-primary text-white w-full p-3 mt-4 rounded-md ${
            !isFormValid && "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? (
            <div className="flex gap-3 justify-center items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
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

export default VerificationForm;

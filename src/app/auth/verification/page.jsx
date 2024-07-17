"use client";

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import OTPInput from "@/components/ui/OTPInput";
import AuthLayout from "@/components/layouts/AuthLayout";

const VerificationForm = () => {
  const navigate = useRouter();
  const [otp, setOTP] = useState("");
  const [isLoading, setLoading] = useState(false);

  // ============================== SIGN IN

  const VerificationAccount = async () => {};

  const isFormValid = otp;

  return (
    <div className="flex mx-auto w-full text-center md:mt-0 p-3 justify-center items-center flex-col">
      <h2 className="text-[30px] text-black font-bold pt-5 sm:pt-1">
        Verification Code
      </h2>
      <p className="md:w-[80%] small-medium md:base-regular mt-2">
        A verification code has been sent to your email example@gmail.com.
        Kindly input the code below
      </p>

      <div className="flex flex-col text-left gap-5 w-full mt-6 justify-center items-center">
        <OTPInput
          length={4}
          onChange={(value, index) =>
            console.log(`Digit ${index + 1}: ${value}`)
          }
        />

        <div className="w-full justify-center items-center gap-6 inline-flex">
          <Link
            href="/"
            className="text-center text-primary text-base font-bold font-['Roboto'] hover:underline"
          >
            Resend code{" "}
          </Link>
          <div className="text-center text-neutral-600 text-base font-normal font-['Trip Sans']">
            or
          </div>
          <Link
            href="/"
            className="text-center text-primary text-base font-bold font-['Roboto'] hover:underline"
          >
            Log out
          </Link>
        </div>

        <Button
          type="submit"
          onClick={VerificationAccount}
          className={`bg-primary text-white w-full p-3 mt-6 rounded-md ${
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

VerificationForm.getLayout = AuthLayout;
export default VerificationForm;

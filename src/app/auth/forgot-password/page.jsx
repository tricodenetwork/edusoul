"use client";

import { useState, useEffect, useContext } from "react";
import { Router, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const FPForm = () => {
  const navigate = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);

  // ============================== SIGN IN

  const fogotPasswordAccount = async () => {};

  const isFormValid = email;

  return (
    <div className="flex text-center h-[80%] w-[80%] p-3 justify-center items-center py-5 flex-col -translate-y-1 shadow-[0_4px_4px] shadow-black/25 rounded-[14px]">
      <h2 className="text-[30px] text-black font-bold pt-5 sm:pt-1">
        Forgot Password
      </h2>
      <p className="md:w-[90%] text-[#676767] md:base-regular mt-2">
        Enter your email address to reset your passsword
      </p>

      <div className="flex flex-col text-left gap-5 w-full mt-4">
        <div>
          <label>
            Email<span className="text-star">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-gray-30 h-[45px] text-sm rounded-md block w-full p-3.5 border border-gray-300 outline-primary"
            required
          />
        </div>

        <Button
          type="submit"
          onClick={fogotPasswordAccount}
          className={`bg-primary text-white p-3 mt-10 rounded-md ${
            !isFormValid && "bg-[#FDCED1] cursor-not-allowed"
          }`}
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? (
            <div className="flex gap-3 justify-center items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
              Loading...
            </div>
          ) : (
            "Submit"
          )}
        </Button>
      </div>

      <div className="flex w-full mt-8 justify-between">
        <Link
          href={"/auth/login"}
          className="flex items-center justify-center"
        >
          <Image
            src={"/assets/icons/back-square.svg"}
            width={24}
            height={24}
            alt="logo"
            className="relative bottom-2 md:bottom-0"
          />
          <h3 className="w-[120px] text-center text-[#8f060e] text-base font-normal underline leading-snug">
            Back to Sign in
          </h3>
        </Link>
        <div></div>
      </div>
    </div>
  );
};

export default FPForm;

"use client";

import { useState } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import AuthComponent from "@/components/shared/AuthComponent";
import ShowHidePassword from "@/components/ui/ShowHidePassword";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import axios from "axios";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { baseUrl } from "../../../../config/config";

const SigninForm = () => {
  const router = useRouter();
  const { password, handlePasswordChange } = useAuth();
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [err, setErr] = useState(null);

  const labelStyle = "text-sm mb-2 font-normal text-[#151515]";
  const inputStyle =
    "pt-2 h-[57px] placeholder:text-[#00054C] placeholder:opacity-40  focus:outline-none text-sm rounded-md block w-full p-3.5 border border-gray-300";

  // ============================== SIGN IN

  const showPassword = () => {
    setShowPasswordToggle(!showPasswordToggle);
  };

  const signInAccount = async (e) => {
    e.preventDefault();
    if (!emailError) {
      setLoading(true);
      // return;

      // Use NextAuth signIn function to trigger authentication
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: `${baseUrl}dashboard`,
      });

      // Handle the result (e.g., redirect on success, show error on failure)
      if (result?.error) {
        // router.push("?success=false");
        console.error("Auth failed:", result);
        toast.error("Invalid Details");
        setErr("Invalid Details");

        setLoading(false);
      } else {
        setLoading(false);
        setErr("Login Successful");
        toast.success("Login successfull");
        router.push("/dashboard");
        console.log(result);
      }
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

  const isFormValid = email && password;

  return (
    <div className='w-[80%] flex flex-col'>
      {/* Header */}
      <div className='flex mb-6 items-center flex-col'>
        <h4 className='font-bold text-[28px] lg:text-[40px] mb-4 leading-normal text-appBlack'>
          Sign In
        </h4>
        <p className=' text-xs lg:text-sm text-[#475569]'>
          Enter your emaill address and password to signin
        </p>
      </div>
      {/* Email */}
      <div className='mb-4 flex flex-col items-start'>
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
      {/* Password */}
      <div className='flex flex-col items-start'>
        <label className={labelStyle}>Password</label>

        <div className='flex w-full relative   h-max rounded-md justify-center items-center '>
          <input
            className={inputStyle}
            type={showPasswordToggle ? "text" : "password"}
            placeholder='********'
            onChange={handlePasswordChange}
            value={password}
          />
          <p
            className='cursor-pointer absolute right-2  text-primary'
            onClick={showPassword}
          >
            <ShowHidePassword showPasswordToggle={showPasswordToggle} />
          </p>
        </div>
      </div>
      <Link
        href={"/auth/forgot-password"}
        className='w-full text-right mt-6 text-[#171818] text-sm'
      >
        Forgot Password?
      </Link>

      <Button
        type='submit'
        onClick={signInAccount}
        className={`text-white p-3 mt-6  w-[90%] self-center rounded-md ${
          !isFormValid || isLoading
            ? "bg-[#FDCED1] h-[48px] cursor-not-allowed"
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
          "Sign In"
        )}
      </Button>

      <div className='w-full md:w-[90%] self-center h-3.5 relative mt-6 justify-center items-center gap-4 inline-flex'>
        <div className='w-full h-[0px] border border-[#EAEAEA]'></div>
        <div className='text-[#494C5B] bg-white px-8 absolute font-normal'>
          Or
        </div>
      </div>

      {/* Social Login */}
      <div className='flex justify-center mt-6 items-center'>
        <AuthComponent />
      </div>

      <div className='text-center text-sm mt-6 font-normal'>
        <span className='text-[#171718]'>
          By creating an account I accept Synergy book club’s{" "}
        </span>
        <span className='text-[#8f060e] text-sm '>Terms and Conditions</span>
      </div>

      <p className='text-sm text-[#171818] mt-6 text-center'>
        Dont have an account?
        <Link
          href='/auth/register?type=fullname'
          className='text-primary underline   ml-1'
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SigninForm;

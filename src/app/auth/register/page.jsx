"use client";

import React, { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import AuthComponent from "@/components/shared/AuthComponent";
import ShowHidePassword from "@/components/ui/ShowHidePassword";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useAuth } from "@/context/AuthContext";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import bcrypt from "bcryptjs";
import toast from "react-hot-toast";
import axios from "axios";

const mont = Montserrat({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic"],
});

const labelStyle = "text-sm mb-2 font-normal text-[#151515]";
const inputStyle =
  "pt-2 h-[57px] placeholder:text-[#00054C] placeholder:opacity-40  focus:outline-none text-sm rounded-md block w-full p-3.5 border border-gray-300";

const passwordStrengthStyle = "w-[64px] h-[4px]";
const SignupForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const registerType = searchParams.get("type");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [err, setErr] = useState(null);

  const showPassword = () => setShowPasswordToggle(!showPasswordToggle);
  const togglePasswordVisibility = () => {
    setShowPasswordToggle(!showPasswordToggle);
  };
  // Password strength validation logic
  const validatePassword = (value) => {
    let strength = 0;
    const criteria = {
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /\d/.test(value),
    };

    const fulfilledCriteria = Object.values(criteria).filter(Boolean).length;

    switch (fulfilledCriteria) {
      case 4:
        strength = "Strong";
        break;
      case 3:
        strength = "Moderate";
        break;
      case 2:
        strength = "Weak";
        break;
      case 1:
        strength = "Poor";
        break;
      default:
        strength = "Poor";
    }

    setPasswordStrength({ strength, value: fulfilledCriteria });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
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

  const signUpAccount = async () => {
    // Your signup logic here
    setLoading(true);
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await axios.post("/api/register", {
        name: firstName,
        surname: lastName,
        email,
        password: hashedPassword,
      });

      //   router.push("/dashboard");
      toast.success("Registered successfully!!");

      setLoading(false);

      // Handle successful response
    } catch (error) {
      // Handle error
      console.error("Error:", error);
      toast.error(`Error registering: ${error.response.data.message ?? ""}`);
      setErr(error);
      setLoading(false);
    }
  };

  const isFormFullName = firstName && lastName;
  const isFormValid =
    isFormFullName && email && password && passwordStrength.value == 4;
  const criteria = [
    {
      condition: password.length >= 8,
      text: "At least 8 characters",
    },
    {
      condition: /[A-Z]/.test(password),
      text: "At least 1 uppercase character",
    },
    {
      condition: /[a-z]/.test(password),
      text: "At least 1 lowercase character",
    },
    {
      condition: /\d/.test(password),
      text: "At least 1 number",
    },
  ];

  return (
    <div
      className={`flex text-center w-full px-3 h-full justify-center py-[5%] items-center md:py-5 flex-col`}
    >
      {/* <Image
        src={"/assets/icons/logo.svg"}
        width={50}
        height={50}
        alt='logo'
        className='relative bottom-2 md:bottom-0'
      />
      <h2 className='text-[30px] text-black font-bold'>
        Welcome to{" "}
        <span style={mont.style} className='text-primary italic '>
          EduSoul
        </span>
      </h2> */}

      {/* <p className='md:w-[90%]  mt-[1%]'>
        {registerType !== "fullname" ? (
          <>Enter your email address to sign up to Edusoul</>
        ) : (
          <>Enter full name to begin</>
        )}
      </p> */}

      {registerType == "fullname" && (
        <div className='w-[80%] '>
          <div className='flex mb-6 items-center flex-col'>
            <h4 className='font-bold text-[40px] mb-4 leading-normal text-appBlack'>
              Tell us your name
            </h4>
            <p className='text-sm text-[#475569]'>Enter full name to begin</p>
          </div>
          <div className='flex  p-8 flex-col'>
            <div className='mb-4 flex flex-col items-start'>
              <label className={labelStyle}>First name</label>
              <input
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='Enter your name'
                className={inputStyle}
                required
              />
            </div>
            <div className='mb-6 flex flex-col items-start'>
              <label className={labelStyle}>Last name</label>
              <input
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Enter your surname'
                className={inputStyle}
                required
              />
            </div>

            <Link
              className={`bg-primary text-white text-center p-3 rounded-md ${
                !isFormFullName && "bg-opacity-20 cursor-not-allowed"
              }`}
              href={`/auth/register?type=nextForms`}
              disabled={!isFormFullName || isLoading}
            >
              {isLoading ? (
                <div className='flex gap-3 justify-center items-center'>
                  <div className='animate-spin rounded-full h-5 w-5 border-b-4 border-white'></div>
                  Loading...
                </div>
              ) : (
                "Continue"
              )}
            </Link>
          </div>
        </div>
      )}

      {registerType !== "fullname" && (
        <div className='w-[80%]'>
          {/* Header */}
          <div className='flex mb-6 items-center flex-col'>
            <h4 className='font-bold text-[28px] lg:text-[40px] mb-4 leading-normal text-appBlack'>
              Create your account
            </h4>
            <p className=' text-xs lg:text-sm text-[#475569]'>
              Enter your emaill address to signup for Edusoul
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
          <div className='mb-6 flex flex-col items-start'>
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
          {/* Password Strength */}
          <div className='mb-4'>
            {/* Password strength indicator */}
            <div className='mt-2 flex items-center gap-2'>
              <div
                className={`w-[64px] h-1 rounded ${
                  passwordStrength.value >= 2
                    ? "bg-green-500"
                    : passwordStrength.value == 1
                    ? "bg-[#FC7E15]"
                    : "bg-[#e8e8e8]"
                }`}
              ></div>
              <div
                className={`w-[64px] h-1 rounded ${
                  passwordStrength.value >= 2 ? "bg-green-500" : "bg-[#e8e8e8]"
                }`}
              ></div>
              <div
                className={`w-[64px] h-1 rounded ${
                  passwordStrength.value >= 3 ? "bg-green-500" : "bg-[#e8e8e8]"
                }`}
              ></div>
              <div
                className={`w-[64px] h-1 rounded ${
                  passwordStrength.value >= 4 ? "bg-green-500" : "bg-[#e8e8e8]"
                }`}
              ></div>

              <p className='text-xs text-[#686868]'>
                {passwordStrength.strength}
              </p>
            </div>

            {/* Password criteria */}
            <div className='flex items-start flex-col'>
              <p className={`text-xs text-[#686868] mt-[14px]`}>
                Strong password. Must contain at least;
              </p>
              <ul className='flex flex-col gap-3 text-[#686868] pt-4 text-xs'>
                {criteria.map((item, index) => (
                  <li
                    key={index}
                    className={`flex gap-1 items-center ${
                      item.condition ? "text-green-500" : ""
                    }`}
                  >
                    {item.condition ? (
                      <Image
                        src={"/assets/icons/good.svg"}
                        alt='good'
                        width={16}
                        height={16}
                      />
                    ) : (
                      <Image
                        src={"/assets/icons/bad.svg"}
                        alt='bad'
                        width={16}
                        height={16}
                      />
                    )}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Button
            type='submit'
            onClick={signUpAccount}
            className={`text-white p-3  w-full mt-4 rounded-md ${
              !isFormValid
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
              "Create Account"
            )}
          </Button>

          <div className='w-full md:w-full h-3.5 relative mt-6 justify-center items-center gap-4 inline-flex'>
            <div className='w-full h-[0px] border border-[#EAEAEA]'></div>
            <div className='text-[#494C5B] bg-white px-8 absolute font-normal'>
              Or
            </div>
          </div>

          {/* Social Login */}
          <div className='flex mt-1 justify-center items-center'>
            <AuthComponent />
          </div>

          <div className='text-center text-sm font-normal'>
            <span className='text-[#171718]'>
              By creating an account I accept Synergy book club’s{" "}
            </span>
            <span className='text-[#8f060e] text-sm '>
              Terms and Conditions
            </span>
          </div>

          <p className='text-sm text-[#171818] mt-4 text-center'>
            Already have an account?
            <Link href='/auth/login' className='text-primary underline   ml-1'>
              Sign In
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

const SignupFormWithSuspense = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupForm />
    </Suspense>
  );
};

export default SignupFormWithSuspense;

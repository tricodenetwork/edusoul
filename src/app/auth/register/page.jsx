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

const mont = Montserrat({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic"],
});

const SignupForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const registerType = searchParams.get("type");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("Weak");
  const [isLoading, setLoading] = useState(false);
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);

  const showPassword = () => setShowPasswordToggle(!showPasswordToggle);
  const togglePasswordVisibility = () => {
    setShowPasswordToggle(!showPasswordToggle);
  };
  // Password strength validation logic
  const validatePassword = (value) => {
    let strength = "Weak";
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
      default:
        strength = "Weak";
    }

    setPasswordStrength(strength);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const signUpAccount = async () => {
    // Your signup logic here
  };

  const isFormFullName = firstName && lastName;
  const isFormValid = email && password;

  return (
    <div
      className={`flex text-center w-full md:w-[80%] px-3 ${
        registerType !== "fullname" && "mt-12"
      } md:w-[75%] justify-between py-[5%] items-center md:py-5 flex-col`}
    >
      <Image
        src={"/assets/icons/logo.svg"}
        width={50}
        height={50}
        alt="logo"
        className="relative bottom-2 md:bottom-0"
      />
      <h2 className="text-[30px] text-black font-bold">
        Welcome to{" "}
        <span style={mont.style} className="text-primary italic ">
          EduSoul
        </span>
      </h2>

      <p className="md:w-[90%]  mt-[1%]">
        {registerType !== "fullname" ? (
          <>Enter your email address to sign up to Edusoul</>
        ) : (
          <>Enter full name to begin</>
        )}
      </p>

      <div className="flex flex-col text-left gap-3 w-full mt-4">
        {registerType !== "nextForms" && (
          <div className="flex flex-col gap-4">
            <div>
              <label>
                First name<span className="text-star">*</span>
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your name"
                className="bg-gray-30 h-[45px] text-sm rounded-md block w-full p-3.5 border border-gray-300 outline-primary"
                required
              />
            </div>
            <div>
              <label>
                Last name<span className="text-star">*</span>
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your name"
                className="bg-gray-30 h-[45px] text-sm rounded-md block w-full p-3.5 border border-gray-300 outline-primary"
                required
              />
            </div>

            <Link
              className={`bg-primary text-white text-center p-3 rounded-md ${
                !isFormFullName && "opacity-50 cursor-not-allowed"
              }`}
              href={`/auth/register?type=nextForms`}
              disabled={!isFormFullName || isLoading}
            >
              {isLoading ? (
                <div className="flex gap-3 justify-center items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
                  Loading...
                </div>
              ) : (
                "Continue"
              )}
            </Link>
          </div>
        )}

        {registerType !== "fullname" && (
          <>
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

            <div>
              <label>
                Password<span className="text-star">*</span>
              </label>

              <form className="flex h-[45px] px-3.5 rounded-md border flex-row justify-center items-center gap-2 focus-within:ring-2 ring-primary">
                <input
                  className="w-full bg-transparent outline-none border-none"
                  type={showPasswordToggle ? "text" : "password"}
                  placeholder="********"
                  onChange={handlePasswordChange}
                  value={password}
                />
                <p
                  className="cursor-pointer text-primary"
                  onClick={showPassword}
                >
                  <ShowHidePassword showPasswordToggle={showPasswordToggle} />
                </p>
              </form>
            </div>

            <div className="mb-4">
              {/* Password strength indicator */}
              <div className="mt-2 flex items-center gap-2">
                <div
                  className={`w-full h-2 rounded ${
                    passwordStrength === "Weak" ? "bg-red-500" : "bg-red-500"
                  }`}
                ></div>
                <div
                  className={`w-full h-2 rounded ${
                    passwordStrength === "Moderate" ||
                    passwordStrength === "Strong"
                      ? "bg-yellow-500"
                      : "bg-gray-500"
                  }`}
                ></div>
                <div
                  className={`w-full h-2 rounded ${
                    passwordStrength === "Strong"
                      ? "bg-green-500"
                      : "bg-gray-500"
                  }`}
                ></div>

                <p className="text-sm text-gray-600">{passwordStrength}</p>
              </div>

              {/* Password criteria */}
              <ul className="flex flex-col gap-3 text-gray-600 text-sm mt-6">
                <li className={``}>Strong password. Must contain at least;</li>
                <li
                  className={`flex gap-1 items-center ${
                    password.length >= 8 ? "text-green-500" : ""
                  }`}
                >
                  <IoCheckmarkDoneCircle />
                  At least 8 characters
                </li>
                <li
                  className={`flex gap-1 items-center ${
                    /[A-Z]/.test(password) ? "text-green-500" : ""
                  }`}
                >
                  <IoCheckmarkDoneCircle />
                  At least 1 uppercase character
                </li>
                <li
                  className={`flex gap-1 items-center ${
                    /[a-z]/.test(password) ? "text-green-500" : ""
                  }`}
                >
                  <IoCheckmarkDoneCircle />
                  At least 1 lowercase character
                </li>
                <li
                  className={`flex gap-1 items-center ${
                    /\d/.test(password) ? "text-green-500" : ""
                  }`}
                >
                  <IoCheckmarkDoneCircle />
                  At least 1 number
                </li>
              </ul>
            </div>

            <Button
              type="submit"
              onClick={signUpAccount}
              className={`bg-primary text-white p-3 rounded-md ${
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
                "Create Account"
              )}
            </Button>

            <div className="w-full md:w-full h-3.5 mt-4 justify-center items-center gap-4 inline-flex">
              <div className="w-[194px] h-[0px] border border-stone-300"></div>
              <div className="text-neutral-500 text-xs font-normal font-['Roboto']">
                OR
              </div>
              <div className="w-[194px] h-[0px] border border-stone-300"></div>
            </div>
            <div className="flex mt-1 justify-center items-center">
              <AuthComponent />
            </div>

            <div className="text-center text-sm font-normal">
              <span className="text-[#171718]">
                By creating an account I accept Synergy book club’s{" "}
              </span>
              <span className="text-[#8f060e] text-xs">
                Terms and Conditions
              </span>
            </div>

            <p className="text-xs mt-1 mb-4 text-center">
              Already have an account?
              <Link href="/auth/login" className="text-primary font-bold ml-1">
                Login
              </Link>
            </p>
          </>
        )}
      </div>
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

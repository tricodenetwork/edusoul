"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import AuthLayout from "@/components/layouts/AuthLayout";
import AuthComponent from "@/components/shared/AuthComponent";
import ShowHidePassword from "@/components/ui/ShowHidePassword";

const SignupForm = () => {
  const navigate = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);

  const showPassword = () => {
    setShowPasswordToggle(!showPasswordToggle);
  };

  const signUpAccount = async () => {};

  const isFormValid = fullName && email && password;

  return (
    <div className="flex mx-auto w-full text-center mt-[6em] md:mt-[17rem] xl:mt-[7rem] p-3 justify-center items-center flex-col">
      <h2 className="text-[30px] text-black font-bold pt-5 sm:pt-1">
        Welcome to EduSoul
      </h2>
      <p className="md:w-[90%] small-medium md:base-regular mt-2">
        Get ready to enjoy all the features and benefits we have to offer. It's
        quick, easy, and free!
      </p>

      <div>
        <h2 className="text-[20px] text-black font-bold py-5 sm:pt-6">
          Signup with
        </h2>
        <AuthComponent />
      </div>

      <div className="w-[436px] h-3.5 justify-start items-center gap-4 inline-flex">
        <div className="w-[194px] h-[0px] border border-stone-300"></div>
        <div className="text-neutral-500 text-xs font-normal font-['Roboto']">
          OR
        </div>
        <div className="w-[194px] h-[0px] border border-stone-300"></div>
      </div>

      <div className="flex flex-col text-left gap-5 w-full mt-4">
        <div>
          <label>
            Name<span className="text-star">*</span>
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your name"
            className="bg-gray-30 h-[45px] text-sm rounded-md block w-full p-3.5 border border-gray-300 outline-primary"
            required
          />
        </div>

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

          <div className="flex h-[45px] px-3.5 rounded-md border flex-row justify-center items-center gap-2 focus-within:ring-2 ring-primary">
            <input
              className="w-full bg-transparent outline-none border-none"
              type={showPasswordToggle ? "text" : "password"}
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <p className="cursor-pointer text-primary" onClick={showPassword}>
              <ShowHidePassword
                className=""
                onClick={showPassword}
                showPasswordToggle={showPasswordToggle}
              />
            </p>
          </div>
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

        <p className="text-small-regular text-light-2 text-center mt-2">
          Already have an account?
          <Link href="/auth/login" className="text-primary font-bold ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

SignupForm.getLayout = AuthLayout;
export default SignupForm;

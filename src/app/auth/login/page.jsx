"use client";

import { useState } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import AuthComponent from "@/components/shared/AuthComponent";
import ShowHidePassword from "@/components/ui/ShowHidePassword";
import { useAuth } from "@/context/AuthContext";

const SigninForm = () => {
  const navigate = useRouter();
  const { password, passwordError, handlePasswordChange } = useAuth();
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);

  // ============================== SIGN IN

  const showPassword = () => {
    setShowPasswordToggle(!showPasswordToggle);
  };

  const signInAccount = async () => {};

  const isFormValid = email && password;
  return (
    <div className="flex mx-auto text-center mt-[10rem] md:mt-[16rem] lg:mt-[19rem] xl:mt-[9rem] p-3 justify-center items-center flex-col">
      <h2 className="text-[30px] text-black font-bold pt-5 sm:pt-1">
        Welcome back to EduSoul
      </h2>
      <p className="md:w-[80%] small-medium md:base-regular mt-2">
        Get ready to enjoy all the features and benefits we have to offer. It's
        quick, easy, and free!
      </p>

      <div>
        <h2 className="text-[20px] text-black font-bold py-5 sm:pt-6">
          Login with
        </h2>
        <AuthComponent />
      </div>

      <div className="w-full h-3.5 justify-center items-center gap-4 inline-flex">
        <div className="w-[194px] h-[0px] border border-stone-300"></div>
        <div className="text-neutral-500 text-xs font-normal font-['Roboto']">
          OR
        </div>
        <div className="w-[194px] h-[0px] border border-stone-300"></div>
      </div>

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

        <div>
          <label>
            Password<span className="text-star">*</span>
          </label>

          <div className="flex h-[45px] px-3.5 rounded-md border flex-row justify-center items-center gap-2 focus-within:ring-2 ring-primary">
            <input
              className="w-full bg-transparent outline-none border-none"
              type={showPasswordToggle ? "text" : "password"}
              placeholder="********"
              onChange={handlePasswordChange}
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
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>

        <div className="w-full justify-between items-center inline-flex">
          <div className="justify-center items-center gap-1 flex">
            <input
              type="checkbox"
              className="w-4 h-4 px-[3.33px] rounded-sm border border-zinc-400 justify-center items-center flex"
            />
            <div className="text-neutral-500 text-sm font-normal font-['Roboto']">
              Remember Me
            </div>
          </div>
          <Link
            href="/auth/forgot-password"
            className="text-red-800 text-sm font-medium font-['Roboto']"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          onClick={signInAccount}
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
            "Log In"
          )}
        </Button>

        <p className="text-small-regular text-light-2 text-center mt-2">
          Don’t have an account?
          <Link href="/auth/register" className="text-primary font-bold ml-1">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;

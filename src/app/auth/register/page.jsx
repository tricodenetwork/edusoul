"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import AuthComponent from "@/components/shared/AuthComponent";
import ShowHidePassword from "@/components/ui/ShowHidePassword";
import { useAuth } from "@/context/AuthContext";
import { Montserrat } from "next/font/google";
import Image from "next/image";
const mont = Montserrat({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic"],
});

const SignupForm = () => {
  const navigate = useRouter();
  const { password, passwordError, handlePasswordChange } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);

  const showPassword = () => {
    setShowPasswordToggle(!showPasswordToggle);
  };

  const signUpAccount = async () => {};

  const isFormValid = fullName && email && password;

  return (
    <div className='flex text-center h-full w-[80%]  md:w-[68%]  justify-between py-[5%] items-center md:py-5 flex-col'>
      <Image
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
      </h2>
      <p className='md:w-[90%]  mt-[1%]'>
        Get ready to enjoy all the features and benefits we have to offer. It's
        quick, easy, and free!
      </p>

      <div>
        <h2 className='text-[20px] text-black font-bold mt-[2%]'>
          Signup with
        </h2>
        <AuthComponent />
      </div>

      <div className='w-full md:w-[436px] h-3.5 justify-start items-center gap-4 inline-flex'>
        <div className='w-[194px] h-[0px] border border-stone-300'></div>
        <div className="text-neutral-500 text-xs font-normal font-['Roboto']">
          OR
        </div>
        <div className='w-[194px] h-[0px] border border-stone-300'></div>
      </div>

      <div className='flex flex-col text-left gap-3 w-full mt-4'>
        <div>
          <label>
            Name<span className='text-star'>*</span>
          </label>
          <input
            type='text'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder='Enter your name'
            className='bg-gray-30 h-[45px] text-sm rounded-md block w-full p-3.5 border border-gray-300 outline-primary'
            required
          />
        </div>

        <div>
          <label>
            Email<span className='text-star'>*</span>
          </label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            className='bg-gray-30 h-[45px] text-sm rounded-md block w-full p-3.5 border border-gray-300 outline-primary'
            required
          />
        </div>

        <div>
          <label>
            Password<span className='text-star'>*</span>
          </label>

          <div className='flex h-[45px] px-3.5 rounded-md border flex-row justify-center items-center gap-2 focus-within:ring-2 ring-primary'>
            <input
              className='w-full bg-transparent outline-none border-none'
              type={showPasswordToggle ? "text" : "password"}
              placeholder='********'
              onChange={handlePasswordChange}
              value={password}
            />
            <p className='cursor-pointer text-primary' onClick={showPassword}>
              <ShowHidePassword
                className=''
                onClick={showPassword}
                showPasswordToggle={showPasswordToggle}
              />
            </p>
          </div>
          {passwordError && (
            <p className='text-red-500 text-sm mt-1'>{passwordError}</p>
          )}
        </div>

        <div className='flex flex-row mt-4 justify-start items-start gap-3'>
          <input
            type='checkbox'
            className='px-[3.33px] mt-1.5 rounded-sm border border-zinc-400'
          />
          <div className='w-[90%] justify-start items-start'>
            <span className='text-[#6f6f6f] text-base font-normal'>
              I have read and understood the{" "}
            </span>
            <span className='text-[#90050f] text-base font-medium'>
              terms and conditions{" "}
            </span>
            <span className='text-[#6f6f6f] text-base font-normal'>
              agreement of EduSoul
            </span>
          </div>
        </div>

        <Button
          type='submit'
          onClick={signUpAccount}
          className={`bg-primary text-white p-3 rounded-md ${
            !isFormValid && "opacity-50 cursor-not-allowed"
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

        <p className='text-xs mt-1 text-center'>
          Already have an account?
          <Link
            href='/auth/login'
            className='text-primary font-bold text-xs ml-1'
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;

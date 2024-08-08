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
import { baseUrl } from "@/config/config";

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

  const signInAccount = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${baseUrl}/api/test`, { email, password });
      console.log(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const isFormValid = email && password;

  return (
    <div className='flex text-center h-full w-[80%] md:w-[75%] justify-between py-[5%] items-center md:py-5 flex-col'>
      <Image
        src={"/assets/images/logo.svg"}
        width={120}
        height={40}
        alt='logo'
        className=' md:hidden absolute -top-[6%] -left-[5%]'
      />
      <h2 className='text-[30px]  text-black font-bold  sm:pt-1'>Sign in</h2>
      <p className='md:w-[90%]  text-[#6f6f6f]   regular mt-2'>
        Enter your email address and password to sign in
      </p>

      <div className='flex flex-col  text-left gap-5 w-full mt-4'>
        <div>
          <label>
            Email <span className='text-star'> *</span>
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
            Password <span className='text-star'>*</span>
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
            <p className='text-red-500 text-xs mt-1'>{passwordError}</p>
          )}
        </div>

        <div className='w-full justify-between my-3  items-center inline-flex'>
          <div className='justify-center items-center gap-1 flex'>
            {/* <input
              type='checkbox'
              className='w-4 h-4 px-[3.33px] rounded-sm border border-zinc-400 justify-center items-center flex'
            />
            <div className='text-neutral-500 text-sm font-normal'>
              Remember Me
            </div> */}
          </div>
          <Link
            href='/auth/forgot-password'
            className='text-black text-sm font-medium'
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type='submit'
          onClick={signInAccount}
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
            "Log In"
          )}
        </Button>

        <div className='w-full  h-3.5 my-3 justify-center items-center gap-4 inline-flex'>
          <div className='w-[194px] h-[0px] border border-stone-300'></div>
          <div className='text-neutral-500 text-xs font-normal'>Or</div>
          <div className='w-[194px] h-[0px] border border-stone-300'></div>
        </div>

        <div className='flex mt-1 justify-center items-center'>
          <AuthComponent />
        </div>
        <div className='text-center text-sm font-normal'>
          <span className='text-[#171718]'>
            By creating an account I accept Synergy book club’s{" "}
          </span>
          <span className='text-[#8f060e] text-xs'>Terms and Conditions</span>
        </div>
        <p className='text-xs text-center'>
          Don’t have an account?
          <Link href='/auth/register' className='text-primary font-bold ml-1'>
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;

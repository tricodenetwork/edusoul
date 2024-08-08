"use client";

import { useState, useEffect, useContext } from "react";
import { Router, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import ShowHidePassword, {
  ConfirmPassword,
} from "@/components/ui/ShowHidePassword";

const ResetPasswordForm = () => {
  const navigate = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);
  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // ============================== SIGN IN

  const showPassword = () => {
    setShowPasswordToggle(!showPasswordToggle);
  };

  const confirm_Password = () => {
    setConfirmPasswordToggle(!confirmPasswordToggle);
  };

  const ResetPasswordAccount = async () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      // Redirect the user or show a success message
    }
  };

  const isFormValid = password && confirmPassword;
  return (
    <div className='flex text-center h-full w-[68%] p-3 justify-center items-center py-5 flex-col'>
      <h2 className='text-[30px] text-black font-bold pt-5 sm:pt-1'>
        Reset Password?
      </h2>
      <p className='md:w-[80%] small-medium md:base-regular mt-2'>
        Enter your new password below to rest your password
      </p>

      <div className='flex flex-col text-left gap-5 w-full mt-4'>
        <div>
          <label>
            New Password<span className='text-star'>*</span>
          </label>

          <form className='flex h-[45px] px-3.5 rounded-md border flex-row justify-center items-center gap-2 focus-within:ring-2 ring-primary'>
            <input
              className='w-full bg-transparent outline-none border-none'
              type={showPasswordToggle ? "text" : "password"}
              placeholder='********'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <p className='cursor-pointer text-primary' onClick={showPassword}>
              <ShowHidePassword
                className=''
                onClick={showPassword}
                showPasswordToggle={showPasswordToggle}
              />
            </p>
          </form>
        </div>

        <div>
          <label>
            Confirm Password*<span className='text-star'>*</span>
          </label>

          <div className='flex h-[45px] px-3.5 rounded-md border flex-row justify-center items-center gap-2 focus-within:ring-2 ring-primary'>
            <input
              className='w-full bg-transparent outline-none border-none'
              type={confirmPasswordToggle ? "text" : "password"}
              placeholder='********'
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <p
              className='cursor-pointer text-primary'
              onClick={confirm_Password}
            >
              <ConfirmPassword
                className=''
                onClick={confirm_Password}
                confirmPasswordToggle={confirmPasswordToggle}
              />
            </p>
          </div>

          {confirmPasswordError && (
            <div className='text-red-500 mt-3'>{confirmPasswordError}</div>
          )}
        </div>

        <Button
          type='submit'
          onClick={ResetPasswordAccount}
          className={`bg-primary text-white p-3 mt-6 rounded-md ${
            !isFormValid && "bg-[#FDCED1] cursor-not-allowed"
          }`}
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? (
            <div className='flex gap-3 justify-center items-center'>
              <div className='animate-spin rounded-full h-5 w-5 border-b-4 border-white'></div>
              Loading...
            </div>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </div>
  );
};

export default ResetPasswordForm;

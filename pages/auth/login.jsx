import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { Button } from "@/Components/ui/Button";
import Loader from "@/Components/ui/Loader";
import AuthLayout from "@/Components/layouts/AuthLayout";
import { toast } from "react-toastify";
import AuthComponent from "@/Components/shared/AuthComponent";
import ShowHidePassword from "@/Components/ui/ShowHidePassword";

const SigninForm = () => {
  const navigate = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);

  // ============================== SIGN IN

  const showPassword = () => {
    setShowPasswordToggle(!showPasswordToggle);
  };

  const signUpAccount = async () => {};

  return (
    <div className="flex mx-auto w-full text-center mt-[6em] md:mt-[11rem] xl:mt-[5rem] p-3 justify-center items-center flex-col">
      <h2 className="text-[30px] text-black font-bold pt-5 sm:pt-1">
        Welcome back to EduSoul
      </h2>
      <p className="w-[80%] small-medium md:base-regular mt-2">
        Get ready to enjoy all the features and benefits we have to offer. It's
        quick, easy, and free!
      </p>

      <div>
        <h2 className="text-[20px] text-black font-bold py-5 sm:pt-6">
          Login with
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
          <label>Email</label>
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
          <label>Password</label>

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
          className="bg-primary text-white p-3 rounded-md"
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

SigninForm.getLayout = AuthLayout;
export default SigninForm;

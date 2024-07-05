import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { Button } from "@/Components/ui/Button";
import Loader from "@/Components/ui/Loader";
import AuthLayout from "@/Components/layouts/AuthLayout";
import { toast } from "react-toastify";

const SigninForm = () => {
  const navigate = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  // ============================== SIGN IN

  const signInAccount = async () => {};

  return (
    <div className="flex mx-auto w-full mt-[4em] md:mt-6 p-3 justify-center items-center flex-col">
      <h2 className="text-[30px] text-center text-black font-bold pt-5 sm:pt-1">
        Welcome back to EduSoul
      </h2>
      <p className="text-center w-[80%] small-medium md:base-regular mt-2">
        Get ready to enjoy all the features and benefits we have to offer. It's
        quick, easy, and free!
      </p>
      <div className="flex flex-col gap-5 w-full mt-4">
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="......54@gmail.com"
            className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
            required
          />
        </div>

        <Button
          type="submit"
          onClick={signInAccount}
          className="bg-primary_A1 text-white p-3 rounded-md"
        >
          {isLoading ? (
            <div className="flex gap-3 justify-center items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
              Loading...
            </div>
          ) : (
            "Log in"
          )}
        </Button>

        <p className="text-small-regular text-light-2 text-center mt-2">
          Don&apos;t have an account?
          <Link
            href="/sign-up"
            className="text-primary_A2 text-small-semibold ml-1"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

SigninForm.getLayout = AuthLayout;
export default SigninForm;

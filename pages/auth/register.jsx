import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { Button } from "@/Components/ui/Button";
import Loader from "@/Components/ui/Loader";
import AuthLayout from "@/Components/layouts/AuthLayout";
import { toast } from "react-toastify";
import AuthComponent from "@/Components/shared/AuthComponent";

const SignupForm = () => {
  const navigate = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  // ============================== SIGN IN

  const signUpAccount = async () => {};

  return (
    <div className="flex mx-auto w-full text-center mt-[6em] md:mt-[17rem] p-3 justify-center items-center flex-col">
      <h2 className="text-[30px] text-black font-bold pt-5 sm:pt-1">
        Welcome to EduSoul
      </h2>
      <p className="w-[80%] small-medium md:base-regular mt-2">
        Get ready to enjoy all the features and benefits we have to offer. It's
        quick, easy, and free!
      </p>

      <div>
        <h2 className="text-[20px] text-black font-bold py-5 sm:pt-6">
          Signup with
        </h2>
        <AuthComponent />
      </div>

      <div className="flex flex-col text-left gap-5 w-full mt-4">
        <div>
          <label>Name</label>
          <input
            type="email"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder=""
            className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
            required
          />
        </div>

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
          onClick={signUpAccount}
          className="bg-primary text-white p-3 rounded-md"
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
          <Link
            href="/auth/login"
            className="text-primary font-bold ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

SignupForm.getLayout = AuthLayout;
export default SignupForm;

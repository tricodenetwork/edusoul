"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import ShowHidePassword, {
  ConfirmPassword,
} from "@/components/ui/ShowHidePassword";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const ResetPasswordForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);
  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("Weak");

  const showPassword = () => setShowPasswordToggle(!showPasswordToggle);
  const confirm_Password = () =>
    setConfirmPasswordToggle(!confirmPasswordToggle);

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

  const ResetPasswordAccount = async () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
    }
  };

  const isFormValid = password && confirmPassword;

  return (
    <div className="flex text-center h-full w-[68%] p-3 justify-center items-center py-5 flex-col">
      <h2 className="text-[30px] text-black font-bold pt-5 sm:pt-1">
        Create New Password
      </h2>
      <p className="md:w-[80%] small-medium md:base-regular mt-2">
        Create a new password to sign into the app
      </p>

      <div className="flex flex-col text-left gap-5 w-full mt-4">
        <div>
          <label>
            New Password <span className="text-star">*</span>
          </label>

          <form className="flex h-[45px] px-3.5 rounded-md border flex-row justify-center items-center gap-2 focus-within:ring-2 ring-primary">
            <input
              className="w-full bg-transparent outline-none border-none"
              type={showPasswordToggle ? "text" : "password"}
              placeholder="********"
              onChange={handlePasswordChange}
              value={password}
            />
            <p className="cursor-pointer text-primary" onClick={showPassword}>
              <ShowHidePassword showPasswordToggle={showPasswordToggle} />
            </p>
          </form>

          {/* Password strength indicator */}
          <div className="mt-2 flex items-center gap-2">
            <div
              className={`w-full h-2 rounded ${
                passwordStrength === "Weak" ? "bg-red-500" : "bg-red-500"
              }`}
            ></div>
            <div
              className={`w-full h-2 rounded ${
                passwordStrength === "Moderate" || passwordStrength === "Strong"
                  ? "bg-yellow-500"
                  : "bg-gray-500"
              }`}
            ></div>
            <div
              className={`w-full h-2 rounded ${
                passwordStrength === "Strong" ? "bg-green-500" : "bg-gray-500"
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

        <div>
          <label>
            Confirm Password <span className="text-star">*</span>
          </label>

          <div className="flex h-[45px] px-3.5 rounded-md border flex-row justify-center items-center gap-2 focus-within:ring-2 ring-primary">
            <input
              className="w-full bg-transparent outline-none border-none"
              type={confirmPasswordToggle ? "text" : "password"}
              placeholder="********"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <p
              className="cursor-pointer text-primary"
              onClick={confirm_Password}
            >
              <ConfirmPassword confirmPasswordToggle={confirmPasswordToggle} />
            </p>
          </div>

          {confirmPasswordError && (
            <div className="text-red-500 mt-3">{confirmPasswordError}</div>
          )}
        </div>

        <Button
          type="submit"
          onClick={ResetPasswordAccount}
          className={`bg-primary text-white p-3 mt-6 rounded-md ${
            !isFormValid && "bg-[#FDCED1] cursor-not-allowed"
          }`}
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? (
            <div className="flex gap-3 justify-center items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
              Loading...
            </div>
          ) : (
            "Continue"
          )}
        </Button>
      </div>
    </div>
  );
};

export default ResetPasswordForm;

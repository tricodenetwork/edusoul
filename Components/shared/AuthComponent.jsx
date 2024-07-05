import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";
import { baseUrl } from "@/config/config";

const AuthComponent = () => {
  const ellipseStyle =
    "w-[30px] md:w-[40px] flex items-center hover:bg-binance_green  hover:bg-opacity-40 duration-100 hover:scale-90 hover:cursor-pointer justify-center border h-[30px] md:h-[40px] rounded-full";
  return (
    <div className='flex w-[200px] md:w-[279.468px] h-[65px] justify-between'>
      <div
        onClick={() =>
          signIn("google", {
            callbackUrl: `${baseUrl}/menu/dashboard`,
          })
        }
        className={ellipseStyle}
      >
        <Image
          className='auth_image'
          width={25}
          height={25}
          alt='google'
          src={"/assets/icons/mdi_google.png"}
        />
      </div>
      <div
        onClick={() =>
          signIn("github", {
            callbackUrl: `${baseUrl}/menu/dashboard`,
          })
        }
        className={ellipseStyle}
      >
        <Image
          className='auth_image'
          width={25}
          height={25}
          src={"/assets/icons/github-mark.png"}
          alt='github'
        />
      </div>
      <div
        onClick={() =>
          signIn("slack", {
            callbackUrl: `${baseUrl}/menu/dashboard`,
          })
        }
        className={ellipseStyle}
      >
        <Image
          className='auth_image '
          width={25}
          height={25}
          src={"/assets/icons/Slack-mark-RGB.png"}
          alt='slack'
        />
      </div>
    </div>
  );
};

export default AuthComponent;

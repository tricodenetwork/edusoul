import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopNav = ({
  homeLink = "/",
  main = "Home",
  first,
  firstLink,
  second,
  secondLink,
}) => {
  return (
    <div className='flex items-center gap-3'>
      <Link href={homeLink} className='text-xs text-appAsh'>
        {main}
      </Link>
      {first && (
        <Image
          src={"/assets/icons/right_arrow.svg"}
          width={6}
          height={6}
          alt='arr'
        />
      )}
      {first && (
        <Link
          href={firstLink}
          className={`${
            second ? "text-appAsh" : "text-primary font-medium"
          } text-xs capitalize`}
        >
          {first}
        </Link>
      )}
      {second && (
        <Image
          src={"/assets/icons/right_arrow.svg"}
          width={6}
          height={6}
          alt='arr'
        />
      )}
      {second && (
        <Link
          href={secondLink}
          className={`${"text-primary font-medium"} capitalize text-xs`}
        >
          {second}
        </Link>
      )}
    </div>
  );
};

export default TopNav;

"use client";
import Link from "next/link";
import React from "react";

const AppButton = ({ dark = true, href, title, style, action }) => {
  if (href) {
    return (
      <Link
        href={href}
        style={style}
        className="bg-primary hover:bg-white hover:text-primary duration-150 hover:border-primary hover:border border rounded-[8px] flex items-center justify-center w-[180px] p-4 text-white text-sm font-semibold"
      >
        {title}
      </Link>
    );
  }
  if (action) {
    return (
      <button
        onClick={action}
        style={style}
        className="bg-primary hover:bg-white hover:text-primary duration-150 hover:border-primary hover:border border rounded-[8px] flex items-center justify-center w-[180px] p-4 text-white text-sm font-semibold"
      >
        {title}
      </button>
    );
  }
};

export default AppButton;

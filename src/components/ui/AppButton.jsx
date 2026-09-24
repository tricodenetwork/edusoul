"use client";
import Link from "next/link";
import React from "react";

const AppButton = ({ dark = true, href, title, style, styles, action, disabled = false }) => {
  if (href) {
    return (
      <Link
        href={href}
        style={style}
        className={`active:scale-95 bg-primary ${styles} hover:bg-white hover:text-primary duration-150 hover:border-primary hover:border border rounded-[8px] flex items-center justify-center w-[120px] p-4 text-white text-sm`}
      >
        {title}
      </Link>
    );
  }
  if (action) {
    return (
      <button
        onClick={action}
        disabled={disabled}
        style={style}
        className={`active:scale-95 bg-primary ${styles} hover:bg-white hover:text-primary duration-150 hover:border-primary hover:border border rounded-[8px] flex items-center justify-center w-[120px] p-4 text-white text-sm disabled:opacity-50 disabled:pointer-events-none`}
      >
        {title}
      </button>
    );
  }
};

export default AppButton;

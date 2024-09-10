"use client";

import Profile from "@/components/shared/Settings/profile";
import AppButton from "@/components/ui/AppButton";
import Image from "next/image";
import { useState } from "react";

const state = ["Profile", "Password"];
const courses = [
  {
    name: "Introduction to the Old Testament",
    dueDate: "15/07/24",
    Instructor: "John Smith",
  },
  {
    name: "Introduction to the New Testament",
    dueDate: "15/07/24",
    Instructor: "John Smith",
  },
];

const Index = () => {
  const [active, setActive] = useState("Profile"); // Set default active to a valid state value

  return (
    <div className="p-[44px] bg-appPink">
      {/* Breadcrumb */}
      <div className="w-72 h-4 justify-start items-center gap-4 inline-flex">
        <div className="text-stone-500 text-sm font-normal">Home</div> {">"}
        <div className="text-stone-500 text-sm font-normal">Settings</div> {">"}
        <div className="text-primary text-sm font-medium">Profile</div>
      </div>

      {/* Navigation for Profile and Password */}
      <div className="w-full flex gap-12 mt-8 justify-start items-center">
        {state.map((item, index) => (
          <button
            onClick={() => setActive(item)}
            key={index.toString()}
            className={`font-medium ${
              item === active ? "border-b-2 border-primary" : ""
            } text-appBlack`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Profile */}
      {active === "Profile" && <Profile/>}

      {/* Password */}
      {active === "Password" && <>Password</>}
    </div>
  );
};

export default Index;

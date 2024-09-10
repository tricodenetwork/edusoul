import React from "react";
import { FiChevronUp } from "react-icons/fi";

const MoreOptions = ({ flex }) => {
  return (
    <div
      className={`flex flex-col sm:flex-${flex} text-base text-neutral-500 justify-start items-start`}
    >
      <button className="px-4 py-2 justify-center items-center gap-1 flex border-b sm:border-none border-stone-300">
        <img
          src="/assets/icons/hide.svg"
          className="w-4 h-4 justify-center items-center flex"
          alt="Hide icon"
        />
        <span>Rate</span>
      </button>
      <button className="px-4 py-2 justify-center items-center gap-1 flex border-b sm:border-none border-stone-300">
        <img
          src="/assets/icons/share.svg"
          className="w-4 h-4 justify-center items-center flex"
          alt="Share icon"
        />
        <span>Share</span>
      </button>
      <button className="px-4 py-2 justify-center items-center gap-1 flex border-b sm:border-none border-stone-300">
        <img
          src="/assets/icons/report.svg"
          className="w-4 h-4 justify-center items-center flex"
          alt="Report icon"
        />
        <span>Unenroll</span>
      </button>
    </div>
  );
};

export default MoreOptions;

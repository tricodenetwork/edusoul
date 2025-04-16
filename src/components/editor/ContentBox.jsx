"use client";

import React from "react";
import Tiptap from "./TipTap";
import { v4 as uuidv4 } from "uuid";

const ContentBox = ({ content, setContent, disabled }) => {
  const handleContentChange = (reason) => {
    setContent(reason);
    console.log(reason);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      content: content,
    };
    console.log(data);
    const existingDataString = localStorage.getItem("myData");
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : [];
    const updatedData = [...existingData, data];
    localStorage.setItem("myData", JSON.stringify(updatedData));
    setContent("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[8px] border-[#D0D5DD] h-[300px]  text-sm border-2 focus:outline-appAsh "
    >
      <Tiptap
        content={content}
        disabled={disabled}
        onChange={(newContent) => handleContentChange(newContent)}
      />
    </form>
  );
};

export default ContentBox;

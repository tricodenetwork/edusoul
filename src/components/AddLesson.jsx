"use client";
import AppButton from "@/components/ui/AppButton";
import Image from "next/image";
import React, { useRef, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";
import ContentBox from "./editor/ContentBox";
import toast from "react-hot-toast";
import { modulesData } from "@/data";
import { useDispatch } from "react-redux";
import { fetchCourses } from "@/redux/slices/networkSlice";
import { setActiveLesson } from "@/redux/slices/moduleSlice";

const AddLesson = ({ setAdd }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const { lesson, module } = useSelector((state) => state.module);
  const { course } = useSelector((state) => state.network);
  const [title, setTitle] = useState(lesson?.title);
  const [note, setNote] = useState(lesson?.note);
  const [link, setLink] = useState(lesson?.link);
  const dispatch = useDispatch();
  const activeModule = course?.modules?.find((item) => item.id == module);

  const inputFileRef = useRef(null);
  const handleButtonClick = () => {
    inputFileRef.current.click();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragging(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFile(file);
    }
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async () => {
    const loading = toast.loading("Adding...");
    console.log(lesson?.id ?? activeModule?.units?.length + 1, "knlsnsl");
    try {
      const response = await axios.post(
        `/api/add-lesson?course=${course.id}&module=${module}`,
        {
          id: lesson?.id ?? activeModule?.units?.length + 1,
          title,
          link,
          note: note,
          file: file ? file.name : null,
          assignment: lesson.assignment,
        }
      );

      console.log("Lesson added successfully", response.data);
      dispatch(fetchCourses(course.id));
      dispatch(setActiveLesson({}));
      toast.success("Lesson added successfully", { id: loading });
      setAdd(false);
    } catch (error) {
      console.error("Error adding lesson", error);
      toast.error(error.response.data.message, { id: loading });
    }
  };

  return (
    <div className='border border-[#99B2C6] w-full h-max pl-[5%] pr-[12%] mt-4 pt-[40px] pb-[120px] my-4 bg-white rounded-[8px]'>
      <div className='flex flex-col mt-[0px] '>
        <p className='text-sm text-appBlack px-1 mb-[6px]'>Lesson title</p>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter lesson name'
          className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
        />
      </div>
      {/* <div className='flex flex-col mt-[30px] '>
        <p className='text-sm text-appBlack px-1 mb-[6px]'>Lesson note</p>
        <textarea
          type='text'
          value={note}
          onChange={(e) => setObjectives(e.target.value)}
          placeholder='Enter lesson note'
          className='bg-white rounded-[8px] border-[#D0D5DD] h-[164px] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
        />
      </div> */}
      <div className='flex flex-col w-full mt-[30px] '>
        <p className='text-sm text-appBlack px-1 mb-[6px]'>Lesson note</p>
        <ContentBox content={note} setContent={setNote} />
      </div>
      <div className='flex flex-col mt-[30px] '>
        <p className='text-sm text-appBlack px-1 mb-[6px]'>Class link</p>
        <input
          type='text'
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder='Enter class link'
          className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
        />
      </div>
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleButtonClick}
        className={`drag-and-drop ${
          isDragging ? "border-primary" : ""
        } flex flex-col mt-[30px] cursor-pointer relative w-full bg-white rounded-[8px] ${
          file && "border-none"
        } border-[#D0D5DD] h-[305px]  border-2   py-3 px-[14px]`}
      >
        {file && (
          <Image
            src={URL.createObjectURL(file)}
            className='z-20 object-cover border-[#D0D5DD] border-2 rounded-[8px] bg-white'
            fill
            alt='image'
          />
        )}

        <input
          ref={inputFileRef}
          onChange={handleFileChange}
          type={`file`}
          accept={true ? "image/*" : undefined}
          className='h-full  hidden w-full bord'
        />
        <p className='text-sm text-appBlack px-1 mb-[6px]'>Lesson Image</p>
        <div className='w-full flex-1 flex flex-col items-center justify-center '>
          <Image
            src={"/assets/icons/image.svg"}
            width={40}
            height={40}
            alt='upload'
          />
          <h6 className='text-appBlack2 mt-3 mb-1 text-sm'>Upload Image</h6>
          <p className='text-appBlack2 font-light text-xs'>
            click to upload or drag and drop
          </p>
        </div>
      </div>
      <div className='flex items-center gap-24 justify-center'>
        <AppButton
          style={{ marginTop: 60 }}
          title={"Add"}
          action={handleSubmit}
        />
        <AppButton style={{ marginTop: 60 }} title={"Cancel"} action={setAdd} />
      </div>
    </div>
  );
};

export default AddLesson;

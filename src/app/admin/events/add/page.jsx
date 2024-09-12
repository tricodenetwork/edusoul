"use client";
import CourseList from "@/components/shared/Courses/courseList";
import AppButton from "@/components/ui/AppButton";
import SelectComponent from "@/components/ui/Select";
import TopNav from "@/components/ui/TopNav";
import { coursesData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const Index = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);

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
      setFile(file); // Save the file to state
    }
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className='h-max pl-[5%] pr-[13%]  pt-[1%]'>
      <div className='flex w-full justify-between'>
        <TopNav
          first={"Events"}
          firstLink={"/admin/events"}
          second={"Add Event"}
          secondLink={"/admin/events/add"}
        />
      </div>

      {/* Courses */}
      <div className='flex mt-[43px] items-center flex-col'>
        <p className='text-appBlack'>Event Information</p>
        <div className='rounded-[8px] mb-10  bg-white mt-[34px] pr-[10%] py-[3%] w-full h-max flex flex-col border border-appAsh2 p-3 pl-[5%]'>
          <div className='flex flex-col w-[100%] mt-[0px] '>
            <p className='text-sm text-[#25272A] px-1 mb-[6px]'>Event Title</p>
            <input
              type='text'
              placeholder=''
              className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
            />
          </div>

          <div className='flex flex-col mt-[30px] '>
            <p className='text-sm text-appBlack px-1 mb-[6px]'>
              Event Description
            </p>
            <textarea
              type='text'
              placeholder='Enter Event Description'
              className='bg-white rounded-[8px] border-[#D0D5DD] h-[164px] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
            />
          </div>
          <div className='flex justify-between mt-[30px]  items-center'>
            <div className='flex flex-col w-[45%] mt-[0px] '>
              <p className='text-sm text-appBlack px-1 mb-[6px]'>Event Date</p>
              <input
                type='text'
                placeholder='Jane'
                className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
              />
            </div>
            <div className='flex flex-col w-[45%] mt-[0px] '>
              <p className='text-sm text-appBlack px-1 mb-[6px]'>Event Time</p>
              <input
                type='text'
                placeholder='Doe'
                className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
              />
            </div>
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
              accept={true ? "image/*" : undefined} // Conditionally set accept attribute for images
              className='h-full  hidden w-full bord'
            />
            <p className='text-sm text-appBlack px-1 mb-[6px]'>Event Image</p>
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
          <AppButton
            style={{ marginTop: 60, alignSelf: "flex-start" }}
            title={"Add Event"}
            action={() => console.log("hello")}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

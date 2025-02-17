"use client";

import AppButton from "@/components/ui/AppButton";
import TopNav from "@/components/ui/TopNav";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { fetchCourses } from "@/redux/slices/networkSlice";
import { baseUrl } from "../../../../../config/config";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

const Index = () => {
  const { course } = useSelector((state) => state.module);
  const { courses } = useSelector((state) => state.network);
  const [courseTitle, setCourseTitle] = useState(course?.title ?? "");
  const [price, setPrice] = useState(course?.price ?? "");
  const [priceId, setPriceId] = useState(course?.priceId ?? "");
  const [description, setDescription] = useState(course?.snippet ?? "");
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputFileRef = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();

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

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFile(file);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAddCourse = async () => {
    const loader = toast.loading("Adding course...");
    try {
      if (!courseTitle) {
        toast.error("Please fill in all fields.", { id: loader });
        return;
      }

      const formData = new FormData();
      formData.append("title", courseTitle);
      formData.append("id", course.id ?? courses.length + 1);
      formData.append("price", price);
      formData.append("priceId", priceId);
      formData.append("description", description);
      if (file) {
        formData.append("image", file);
      }

      const response = await fetch(`${baseUrl}api/add-course`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        toast.success(result.message, { id: loader });
        dispatch(fetchCourses(1));
        // Reset form fields
        setCourseTitle("");
        setPrice("");
        setPriceId("");
        setDescription("");
        setFile(null);
        router.push("/admin/courses");
      } else {
        const error = await response.json();
        console.error("Error:", error);
        toast.error(error.message || "Failed to add course.", { id: loader });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message ?? "An unexpected error occurred.", {
        id: loader,
      });
    }
  };

  return (
    <div style={poppins.style} className='h-max pl-[5%] pr-[20%]  pt-[2.5%]'>
      <Link
        href={"/admin/courses"}
        className='font-medium flex items-center gap-2  mb-8'
      >
        <Image
          src={"/assets/icons/back.svg"}
          width={16}
          height={16}
          alt='back'
        />
        <p className='text-xs text-[#1A1818]'>Back</p>
      </Link>
      <div className='flex w-full justify-between'>
        <TopNav
          main='Courses'
          homeLink='/admin/courses'
          first={"Add"}
          firstLink={""}
        />
      </div>
      <div className='border border-[#99B2C6] w-full h-max pl-[5%] pr-[12%] pt-[40px] pb-[120px] my-8 bg-white rounded-[8px]'>
        <div className='flex flex-col '>
          <p className='text-sm text-appBlack px-1 mb-[6px]'>Name of course</p>
          <input
            type='text'
            placeholder='Enter name of course'
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2 focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
          />
        </div>
        <div className='flex flex-col mt-[30px] '>
          <p className='text-sm text-appBlack px-1 mb-[6px]'>Price</p>
          <input
            type='text'
            placeholder='Enter course amount'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
          />
        </div>
        <div className='flex flex-col mt-[30px] '>
          <p className='text-sm text-appBlack px-1 mb-[6px]'>Price Id</p>
          <input
            type='text'
            placeholder='Enter price id'
            value={priceId}
            onChange={(e) => setPriceId(e.target.value)}
            className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
          />
        </div>
        <div className='flex flex-col mt-[30px] '>
          <p className='text-sm text-appBlack px-1 mb-[6px]'>
            Course description
          </p>
          <textarea
            type='text'
            placeholder='Enter course objective'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='bg-white rounded-[8px] border-[#D0D5DD] h-[164px] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
          />
        </div>
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleButtonClick}
          className={`flex flex-col mt-[30px] w-full bg-white rounded-[8px] border-[#D0D5DD] h-[305px] border-2 py-3 px-[14px] ${
            isDragging ? "border-primary" : ""
          } ${file && "border-none"}`}
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
            type='file'
            accept='image/*'
            className='h-full hidden w-full'
          />
          <p className='text-sm text-appBlack px-1 z-10 mb-[6px]'>
            Course Image
          </p>
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
          style={{ marginTop: 60 }}
          title={course?.title ? "Edit Course" : "Add Course"}
          styles={"w-max"}
          action={handleAddCourse}
        />
      </div>
    </div>
  );
};

export default Index;

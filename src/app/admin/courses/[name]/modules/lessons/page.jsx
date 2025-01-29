"use client";
import AddLesson from "@/components/AddLesson";
import AppButton from "@/components/ui/AppButton";
import SelectComponent from "@/components/ui/Select";
import { setActiveLesson } from "@/redux/slices/moduleSlice";
import { fetchCourses } from "@/redux/slices/networkSlice";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Index = () => {
  const [add, setAdd] = useState(false);
  const { module } = useSelector((state) => state.module);
  const { course } = useSelector((state) => state.network);
  const dispatch = useDispatch();
  const activeModule = course?.modules?.find((_, index) => index == module - 1);

  const handledelete = async (id) => {
    const loading = toast.loading("Deleting...");
    try {
      const response = await axios.delete(
        `/api/delete-unit?course=${course.id}&module=${module}&unit=${id}`
      );
      console.log("Lesson deleted successfully", response.data);
      dispatch(fetchCourses(course.id));
      toast.success("Lesson deleted successfully", { id: loading });
      setAdd(false);
    } catch (error) {
      console.error("Error deleting lesson", error);
      toast.error("Error deleting lesson", { id: loading });
    }
  };

  if (add) {
    return (
      <OutsideClickHandler onOutsideClick={() => setAdd(false)}>
        <div className=''>
          <AddLesson setAdd={() => setAdd(false)} />
        </div>
      </OutsideClickHandler>
    );
  } else {
    return (
      <div className='border border-[#99B2C6]  w-full h-max pl-[5%] pr-[5%] mt-4 pt-[40px] pb-[40px] my-4 bg-white rounded-[8px]'>
        <div className='flex flex-col gap-1'>
          {activeModule?.units?.map((item, index) => (
            <div
              key={index.toString()}
              className='flex py-3 border-b relative border-appAsh2 items-center '
            >
              <Image
                src={"/assets/icons/ham.svg"}
                alt='ham'
                width={20}
                height={20}
                className='mr-3'
              />
              <p className=''>
                {`Unit ${index + 1}:`} <span>{item.title}</span>
              </p>
              <div className='flex items-center gap-8 absolute right-[0%]'>
                <button
                  className='hover:scale-95 duration-150 active:scale-100'
                  onClick={() => {
                    dispatch(setActiveLesson(item));
                    setAdd(true);
                  }}
                >
                  <Image
                    src={"/assets/icons/edit2.svg"}
                    alt='ham'
                    width={20}
                    height={20}
                    className='mr-3'
                  />
                </button>
                <button
                  className='hover:scale-95 duration-150 active:scale-100'
                  onClick={() => {
                    handledelete(item.id);
                  }}
                >
                  <Image
                    src={"/assets/icons/trash.svg"}
                    alt='ham'
                    width={20}
                    height={20}
                    className='mr-3'
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <AppButton
          style={{ marginTop: 60 }}
          title={"Add Lesson"}
          action={() => setAdd(true)}
        />
      </div>
    );
  }
};
export default Index;

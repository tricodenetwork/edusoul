"use client";
import AddLesson from "@/components/AddLesson";
import AppButton from "@/components/ui/AppButton";
import SelectComponent from "@/components/ui/Select";
import { upload } from "@vercel/blob/client";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import OutsideClickHandler from "react-outside-click-handler";
import { baseUrl } from "../../../../../../../config/config";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import axios from "axios";
import { fetchCourses } from "@/redux/slices/networkSlice";
import { useDispatch } from "react-redux";

const Index = () => {
  const [add, setAdd] = useState(false);
  const [file, setFile] = useState(null);
  const { module } = useSelector((state) => state.module);
  const { course } = useSelector((state) => state.network);
  const dispatch = useDispatch();
  const activeModule = course?.modules?.find((_, index) => index == module - 1);
  const router = useRouter();

  const handleUpload = async () => {
    const toastId = toast.loading("Uploading...");

    try {
      const newBlob = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: `${baseUrl}api/upload`,
      });

      if (newBlob) {
        const res = await axios.post(
          `/api/add-resource?course=${course?.id}&module=${module}`,
          newBlob
        );

        toast.success(res.data.message, { id: toastId });
        dispatch(fetchCourses(course?.id));
        setFile(null);
        toast.success("Upload successful!", { id: toastId });
        router.refresh();
      } else {
        toast.error("Error uploadig file.", { id: toastId });
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ?? "Error uploading the file.",
        {
          id: toastId,
        }
      );
      console.error("There was an error uploading the file.", error);
    }
  };

  const deleteResource = async (item) => {
    const toastId = toast.loading("Deleting...");
    try {
      const res = await axios.post(
        `/api/add-resource?course=${course?.id}&module=${module}&delete=true`,
        item
      );

      toast.success(res.data.message, { id: toastId });
      dispatch(fetchCourses(course?.id));
      setFile(null);
      router.refresh();
    } catch (error) {
      toast.error(
        error?.response?.data?.message ?? "Error deleting the file.",
        {
          id: toastId,
        }
      );
      console.error("There was an error uploading the file.", error);
    }
  };
  return (
    <div className='border border-[#99B2C6] w-full h-max pl-[5%] pr-[5%] mt-4 pt-[40px] pb-[40px] my-4 bg-white rounded-[8px]'>
      <ul className='list-disc'>
        {activeModule?.resources?.map((item, index) => {
          return (
            <div
              key={index.toString()}
              className='flex items-center w-full justify-between border-b my-1 py-1 border-primary/40'
            >
              <li className='text-sm  text-primary'>{item?.pathname}</li>
              <button
                className='hover:scale-95  duration-150 active:scale-100'
                onClick={() => {
                  deleteResource(item);
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
          );
        })}
        {file && <li className='text-sm text-primary'>{`${file?.name}*`}</li>}
      </ul>
      <div className='flex  flex-col mt-[30px] w-full bg-white rounded-[8px] border-[#D0D5DD] h-[305px]  border-2   py-3 px-[14px]   '>
        <p className='text-sm text-[#344054] px-1 mb-[6px]'>Module Resource</p>
        <div className='w-full flex-1 flex  relative flex-col items-center justify-center '>
          <Image
            src={"/assets/icons/image.svg"}
            width={40}
            height={40}
            alt='upload'
          />
          <input
            type='file'
            onChange={(e) => setFile(e.target.files[0])}
            className='opacity-0 w-full h-full absolute cursor-pointer  bg-appPink'
          />
          <h6 className='text-appBlack2 mt-3 mb-1 text-sm'>Add Resource</h6>
          <p className='text-appBlack2 font-light text-xs'>
            png, svg, doc, pdf
          </p>
        </div>
      </div>
      <AppButton
        style={{ marginTop: 60 }}
        title={"Save"}
        action={handleUpload}
      />
    </div>
  );
};
export default Index;

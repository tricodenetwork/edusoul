"use client";

import AppButton from "@/components/ui/AppButton";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { upload } from "@vercel/blob/client";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { baseUrl } from "../../../../config/config";
import { useRouter } from "next/navigation";

const Index = () => {
  // --------------------------------------------VARIABLES

  const [user, setUser] = useState(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  //-----------------------------------------------------------FUNCTIONS
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    const toastId = toast.loading("Uploading...");

    try {
      const newBlob = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: `${baseUrl}api/upload?email=${session?.user?.email}`,
      });

      if (newBlob) {
        toast.success("Upload successful!", { id: toastId });
        router.refresh();
      } else {
        toast.error("Error updating file.", { id: toastId });
      }
    } catch (error) {
      toast.error("Error uploading the file.", { id: toastId });
      console.error("There was an error uploading the file.", error.response);
    }
  };
  //------------------------------------------------------------------USE EFFECTS

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.post(`${baseUrl}api/user`, {
          email: session.user?.email,
        });
        setUser(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (session?.user?.email) {
      fetchUser();
    }
  }, [session]);

  if (status == "unauthenticated") {
    return (
      <div className='w-full h-full flex items-center justify-center text-6xl font-semibold text-primary'>
        Not Authenticated
      </div>
    );
  }

  if (status !== "loading") {
    return (
      <div className='border border-[#99B2C6] w-full h-max px-[3%]  mt-4 pt-[40px] pb-[40px] my-4 bg-white rounded-[8px]'>
        <div className='w-full h-[203px] bg-primary relative rounded-[12px]'>
          <Image
            width={24}
            height={24}
            alt='gallery'
            src={"/assets/icons/gallery.svg"}
            className='absolute hidden bottom-4 right-4'
          />
          <div className='border-4 border-white absolute flex items-center justify-center -bottom-[66px] left-[5%] w-[132px] h-[132px] bg-[#d9d9d9] rounded-full'>
            <Image
              alt='camera'
              width={33}
              height={33}
              src={"/assets/icons/camera.png"}
            />
            {user?.image && (
              <Image
                alt='camera'
                fill
                src={user?.image}
                className='cursor-pointer w-[132px] object-cover  h-[132px] rounded-full'
              />
            )}
            <input
              type='file'
              onChange={handleUpload}
              className='opacity-0 cursor-pointer w-[132px] absolute  h-[132px] rounded-full bg-appPink'
            />
          </div>
        </div>
        <div className=' flex flex-col px-[5%]'>
          <div className='flex justify-between mt-[112px]  items-center'>
            <div className='flex flex-col w-[45%] mt-[0px] '>
              <p className='text-sm text-appBlack px-1 mb-[6px]'>First Name</p>
              <input
                type='text'
                placeholder='Jane'
                defaultValue={user?.name.split(" ").at(0)}
                className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
              />
            </div>
            <div className='flex flex-col w-[45%] mt-[0px] '>
              <p className='text-sm text-appBlack px-1 mb-[6px]'>Last Name</p>
              <input
                type='text'
                placeholder='Doe'
                defaultValue={user?.surname ?? user?.name.split(" ").at("1")}
                className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
              />
            </div>
          </div>
          <div className='flex flex-col mt-[82px] '>
            <p className='text-sm text-appBlack px-1 mb-[6px]'>Bio</p>
            <textarea
              type='text'
              placeholder='Write a short Bio about yourself.'
              className='bg-white rounded-[8px] border-[#D0D5DD] h-[164px] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
            />
          </div>
          <AppButton
            style={{ marginTop: 60, alignSelf: "flex-end" }}
            title={"Update Profile"}
            action={() => console.log("hello")}
          />
        </div>
      </div>
    );
  }
};

export default Index;

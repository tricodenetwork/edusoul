"use client";

import AppButton from "@/components/ui/AppButton";
import { useUser } from "@/context/UserContext";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const Index = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { user } = useUser();

  const handlePasswordReset = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match.");
      return;
    }

    const toastId = toast.loading("Updating...");

    try {
      const response = await axios.post("/api/update/password", {
        email: user?.email,
        currentPassword,
        newPassword,
      });

      if (response.status === 200) {
        toast.success("Password updated successfully.", { id: toastId });
      }
    } catch (error) {
      toast.error(
        error.response?.data.message || "Failed to update password.",
        {
          id: toastId,
        }
      );
    }
  };

  return (
    <div className='border border-[#99B2C6] w-full h-max px-[3%]  mt-4 pt-[40px] pb-[40px] my-4 bg-white rounded-[8px]'>
      <div className=' flex flex-col px-[5%]'>
        <div className='flex flex-col items-start mt-[20px] gap-[48px]'>
          <div className='flex flex-col w-[60%] mt-[0px] '>
            <p className='text-sm text-appBlack px-1 mb-[6px]'>
              Current Password
            </p>
            <input
              type='password'
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2 focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
            />
          </div>
          <div className='flex flex-col w-[60%] mt-[0px] '>
            <p className='text-sm text-appBlack px-1 mb-[6px]'>New Password</p>
            <input
              type='password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2 focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
            />
          </div>
          <div className='flex flex-col w-[60%] mt-[0px] '>
            <p className='text-sm text-appBlack px-1 mb-[6px]'>
              Re-Type New Password
            </p>
            <input
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2 focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
            />
          </div>
        </div>
        <AppButton
          style={{ marginTop: 60, alignSelf: "flex-start" }}
          title={"Reset Password"}
          action={handlePasswordReset}
        />
      </div>
    </div>
  );
};

export default Index;

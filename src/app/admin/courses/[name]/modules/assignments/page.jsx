"use client";
import ContentBox from "@/components/editor/ContentBox";
import AppButton from "@/components/ui/AppButton";
import Submissions from "@/components/ui/Submissions";
import { fetchCourses } from "@/redux/slices/networkSlice";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Index = () => {
  const { module } = useSelector((state) => state.module);
  const { course } = useSelector((state) => state.network);
  const activeModule = course?.modules?.find((item) => item.id == module);

  const [viewSubmissions, setViewSubmissions] = useState(false);

  const dispatch = useDispatch();
  const [assignment, setAssignment] = useState(activeModule?.assignment ?? "");

  const handleUpdateModuleAssignment = async () => {
    const loader = toast.loading("Loading...");
    try {
      if (!assignment) {
        alert("Assignment cannot be empty!");
        return;
      }
      const res = await axios.post(
        `/api/add-assignment?course=${course?.id}&module=${module}`,
        {
          assignment,
        }
      );

      toast.success(res.data.message, { id: loader });
      dispatch(fetchCourses(course?.id));
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response.data.message, { id: loader });
    }
  };

  useEffect(() => {
    setAssignment(activeModule?.assignment ?? "");
    // dispatch(setActiveModule(items?.length ?? 1));
  }, [module]);

  if (viewSubmissions) {
    return <Submissions close={setViewSubmissions} />;
  } else {
    return (
      <div className="border border-[#99B2C6] w-full h-max pl-[5%] pr-[5%] mt-4 pt-[40px] pb-[40px] my-4 bg-white rounded-[8px]">
        <div className="flex flex-col mt-[0px]">
          <p className="text-sm text-appBlack px-1 mb-[6px]">
            Module Assignments
          </p>
          <ContentBox content={assignment} setContent={setAssignment} />

          {/* <textarea
            type='text'
            value={assignment}
            onChange={(e) => setAssignment(e.target.value)}
            placeholder='Enter module assignment'
            className='bg-white rounded-[8px] border-[#D0D5DD] h-[164px] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]'
          /> */}
        </div>
        <div className="flex mt-14 justify-between items-center">
          <AppButton
            styles={"w-max"}
            title={"Save"}
            action={handleUpdateModuleAssignment}
          />
          <AppButton
            styles={"w-max"}
            title={"View Submissions"}
            action={() => setViewSubmissions(true)}
          />
        </div>
      </div>
    );
  }
};
export default Index;

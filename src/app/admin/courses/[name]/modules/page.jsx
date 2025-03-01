"use client";
import AppButton from "@/components/ui/AppButton";
import { fetchAssignments, fetchCourses } from "@/redux/slices/networkSlice";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { ClockLoader } from "react-spinners";

const Index = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const { module } = useSelector((state) => state.module);
  const { course, loading } = useSelector((state) => state.network);

  const dispatch = useDispatch();
  const activeModule = course?.modules?.find((item) => item.id == module);
  const [link, setLink] = useState(activeModule?.link ?? "");
  const [title, setTitle] = useState(activeModule?.title ?? "");
  const [dueDate, setDueDate] = useState(activeModule?.dueDate ?? "");
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

  const handleUpdateModuleTitle = async () => {
    const loader = toast.loading("Loading...");
    try {
      if (!title) {
        alert("Module title cannot be empty!");
        return;
      }
      const response = await fetch(`/api/add-module?course=${course?.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: activeModule?.id ?? (course?.modules?.length ?? 0) + 1,
          title,
          link,
          dueDate: dueDate,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success(result?.message, { id: loader });
        dispatch(fetchCourses(course?.id));
        console.log("Update Result:", result);
      } else {
        const error = await response.json();
        console.error("Error:", error);
        toast.error(error.message || "Failed to update module title.", {
          id: loader,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred.", { id: loader });
    }
  };

  const handleDeleteModule = async (id) => {
    const loading = toast.loading("Deleting...");
    try {
      const response = await axios.delete(
        `/api/delete-module?course=${course.id}&module=${module}`
      );
      console.log("Module deleted successfully", response.data);
      dispatch(fetchCourses(course.id));
      toast.success("Module deleted successfully", { id: loading });
    } catch (error) {
      console.error("Error deleting module", error);
      toast.error(error.response.data.message, { id: loading });
    }
  };

  useEffect(() => {
    setTitle(activeModule?.title);
    setLink(activeModule?.link);
    setDueDate(activeModule?.dueDate);
    dispatch(fetchAssignments());
  }, [activeModule]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <ClockLoader
          loading={true}
          width={500}
          height={500}
          color="#90050f"
          className=""
        />
      </div>
    );
  } else {
    return (
      <div className="border border-[#99B2C6] w-full h-max pl-[5%] pr-[12%] mt-4 pt-[40px] pb-[40px] my-4 bg-white rounded-[8px]">
        <div className="flex flex-col mt-[0px] ">
          <p className="text-sm text-appBlack px-1 mb-[6px]">Module Title</p>
          <input
            type="text"
            value={title}
            placeholder="Enter module name"
            onChange={(e) => setTitle(e.target.value)}
            className="bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]"
          />
        </div>
        <div className="flex flex-col mt-[30px] ">
          <p className="text-sm text-appBlack px-1 mb-[6px]">Workshop link</p>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter workshop link"
            className="bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]"
          />
        </div>
        <div className="flex flex-col mt-[30px] ">
          <p className="text-sm text-appBlack px-1 mb-[6px]">Due Date</p>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="bg-white rounded-[8px] border-[#D0D5DD] text-sm border-2  focus:outline-appAsh py-3 px-[14px] text-appBlack placeholder:text-[#717171]"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <AppButton
            style={{ marginTop: 60 }}
            title={"Save"}
            action={handleUpdateModuleTitle}
          />
          <AppButton
            style={{ marginTop: 60 }}
            title={"Delete"}
            action={handleDeleteModule}
          />
        </div>
      </div>
    );
  }
};

export default Index;

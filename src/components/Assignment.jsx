"use client";

import { useEffect, useState } from "react";
import ContentBox from "./editor/ContentBox";
import AppButton from "./ui/AppButton";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useUser } from "@/context/UserContext";
import { useDispatch } from "react-redux";
import { fetchAssignments } from "@/redux/slices/networkSlice";

const Assignment = ({ question, cancel, lessonId }) => {
  const [assignment, setAssignment] = useState("");
  const { module } = useSelector((state) => state.module);
  const { course,assignments } = useSelector((state) => state.network);
  const {user} = useUser()
  const dispatch = useDispatch();



const userAssignment = assignments.find((item) => item.module == module && item.user == user?.email && item.course == course.id);
console.log(userAssignment) 

const submitAssignment = async () => {
    const loader = toast.loading("Submitting..");
    try {
      const res = await axios.post(
        `/api/submit-assignment?course=${course.id}&module=${module}`,
        {
          question: question,
          answer: assignment,
        }
      );
      toast.success(res.data.message??"Submitted Successfully");
    } catch (error) {
      console.error(error)
      toast.error(
        error.response.data.message ?? "error submitting assignment",
        { id: loader }
      );
    }
  };

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div>
      <ContentBox content={userAssignment ? userAssignment.answer:assignment} setContent={setAssignment} />
      <div className='flex items-center justify-between w-full mt-8'>
        <AppButton title={userAssignment ?"Edit":"Submit"} action={submitAssignment} />
        <AppButton title={"Cancel"} action={() => cancel(false)} />
      </div>
    </div>
  );
};

export default Assignment;

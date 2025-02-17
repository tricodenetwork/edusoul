"use client";

import { useState } from "react";
import ContentBox from "./editor/ContentBox";
import AppButton from "./ui/AppButton";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Assignment = ({ question, cancel, lessonId }) => {
  const [assignment, setAssignment] = useState("");
  const { module } = useSelector((state) => state.module);
  const { course } = useSelector((state) => state.network);

  const submitAssignment = () => {
    const loader = toast.loading("Submitting..");
    try {
      const res = axios.post(
        `/api/submit-assignment?course=${course.id}&module=${module}&unit=${lessonId}`,
        {
          question: question,
          answer: assignment,
        }
      );
      toast.success("Submitted Successfully");
    } catch (error) {
      toast.error(
        error.response.data.message ?? "error submitting assignment",
        { id: loader }
      );
    }
  };
  return (
    <div>
      <ContentBox content={assignment} setContent={setAssignment} />
      <div className='flex items-center justify-between w-full mt-8'>
        <AppButton title={"Submit"} action={submitAssignment} />
        <AppButton title={"Cancel"} action={() => cancel(false)} />
      </div>
    </div>
  );
};

export default Assignment;

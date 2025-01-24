"use client";

import { useDispatch } from "react-redux";
import SelectComponent from "../ui/Select";
import { setActiveCourse, setActiveModule } from "@/redux/slices/moduleSlice";
import AppButton from "../ui/AppButton";
import { useEffect } from "react";
import { coursesData } from "@/data";

const LayoutTopSection = ({ items, courseId }) => {
  const course = coursesData.find((item) => item.id == courseId);

  const dispatch = useDispatch();
  const set = (item) => {
    dispatch(setActiveModule(item));
  };

  useEffect(() => {
    dispatch(setActiveCourse(course));
  }, [courseId]);
  return (
    <div className='flex w-full  justify-between'>
      {/* <TopNav first={"Module"} firstLink={"modules"} /> */}
      <SelectComponent
        onChange={set}
        items={items}
        style={"w-[7.5vw]"}
        placeholder={"Module 1"}
      />
      <AppButton title={"Add Module"} href={"/"} />
    </div>
  );
};

export default LayoutTopSection;

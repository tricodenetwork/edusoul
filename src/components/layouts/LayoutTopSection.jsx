"use client";

import { useDispatch } from "react-redux";
import SelectComponent from "../ui/Select";
import { setActiveModule } from "@/redux/slices/moduleSlice";
import AppButton from "../ui/AppButton";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { fetchCourses } from "@/redux/slices/networkSlice";
import { ClockLoader } from "react-spinners";
import TopNav from "../ui/TopNav";
import { useRouter } from "next/navigation";

const LayoutTopSection = ({ courseId }) => {
  // const course = coursesData.find((item) => item.id == courseId);
  const { module } = useSelector((state) => state.module);
  const router = useRouter();
  const { courses, items, course, loading, error } = useSelector(
    (state) => state.network
  );
  const activeModule = course?.modules?.find((item) => item.id == module);

  const dispatch = useDispatch();
  const set = (item) => {
    dispatch(setActiveModule(item));
    router.push(`/admin/courses/${courseId}/modules`);
  };

  const fetchAllCourses = async () => {
    try {
      dispatch(fetchCourses(courseId));
    } catch (error) {
      console.error("Error fetching courses", error.message);
    }
  };

  const AddNewModule = async () => {
    const loader = toast.loading("Loading...");
    try {
      const res = await axios.post(`/api/add-module?course=${course?.id}`, {
        id: (course?.modules?.length ?? 0) + 1,
        title: `Module ${(course?.modules?.length ?? 0) + 1}`,
        units: [],
      });
      fetchAllCourses();
      toast.success("New Module created!", { id: loader });
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        error.response.data.message || "Failed to update module title.",
        {
          id: loader,
        }
      );
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, [courseId]);

  return (
    <>
      <div className="mb-8">
        <TopNav
          main="Courses"
          homeLink="/admin/courses"
          first={course?.title}
          firstLink={""}
        />
      </div>
      <div className="flex w-full  justify-between">
        {/* {loading && (
          <div className="w-[78%] h-[79vh]  z-50 absolute bg-[#FFF5F6] flex items-center justify-center">
            <ClockLoader
              loading={true}
              width={500}
              height={500}
              color="#90050f"
              className=""
            />
          </div>
        )} */}
        <SelectComponent
          modules={course?.modules}
          onChange={set}
          items={items}
          style={"w-[7.5vw] z-50"}
        />
        <h3 className="font-semibold text-2xl flex-1 text-start flex items-center px-[2%] text-appBlack">
          {activeModule?.title ?? ""}
        </h3>
        <AppButton title={"New Module"} action={AddNewModule} />
      </div>
    </>
  );
};

export default LayoutTopSection;

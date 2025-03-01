import { useEffect, useState } from "react";
import SelectComponent from "./Select";
import { useSelector } from "react-redux";
import AppButton from "./AppButton";
import ContentBox from "../editor/ContentBox";
import { proseFormatting } from "@/lib/helper";
import toast from "react-hot-toast";
import axios from "axios";
import {
  fetchAssignments,
  fetchCourses,
  fetchUsers,
} from "@/redux/slices/networkSlice";
import { useDispatch } from "react-redux";
import { set } from "react-ga";

const Submissions = ({ close }) => {
  // --------------------------------------------VARIABLES
  const { module } = useSelector((state) => state.module);
  const { course, loading, assignments } = useSelector(
    (state) => state.network
  );
  const [user, setUser] = useState("");
  const [grade, setGrade] = useState("");
  const activeModule = course?.modules?.find((item) => item.id == module);
  const items = activeModule?.units?.map((unit) => unit.id);
  const moduleSubmission = assignments.filter(
    (item) => item.module == module && item.course == course.id
  );
  const users = moduleSubmission.map((item) => item.user);
  const [content, setContent] = useState(
    moduleSubmission.find((item) => item.user == user)
  );
  const [comment, setComment] = useState(content?.comment ?? "");
  const dispatch = useDispatch();
  console.log(content);

  //-----------------------------------------------------------FUNCTIONS
  // Function to grade / update assignment
  const handleGrade = async () => {
    const loader = toast.loading("Loading...");
    try {
      const res = await axios.post(
        `/api/grade-assignment?course=${course.id}&module=${module}`,
        {
          user,
          comment,
          grade:
            new Date(activeModule?.dueDate) < Date.now()
              ? parseInt(grade) * 0.95
              : grade,
        }
      );
      toast.success(res?.data?.message, { id: loader });
      dispatch(fetchAssignments());
      close(false);
    } catch (error) {
      console.error("Error:", error);
      toast.error(error?.response?.data?.message, { id: loader });
    }
  };

  //------------------------------------------------------------------USE EFFECTS
  useEffect(() => {
    const ans = moduleSubmission.find((item) => item.user == user);
    setContent(ans);
    setComment(ans?.comment ?? "");
  }, [user]);

  return (
    <div className="border border-[#99B2C6] w-full h-max pl-[5%] pr-[5%] mt-4 pt-[40px] pb-[40px] my-4 bg-white rounded-[8px]">
      <div className="mb-8">
        <p className="mb-1 text-[#1e1e1e]">Student Name</p>
        <SelectComponent
          style={"w-full mb-4"}
          items={users}
          onChange={setUser}
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content?.answer }}
        className={`border ${proseFormatting} border-[#c4c4c4] p-8 rounded-lg w-full h-[484px] overflow-y-scroll`}
      ></div>
      <div className="mt-8">
        <p className="mb-1 text-[#1e1e1e]">Teacher's Comment</p>
        <textarea
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comments here..."
          className=" rounded-[8px] w-full h-[124px] border-[#c4c4c4] text-sm border  focus:outline-none focus:border-primary/50 p-4 text-appBlack placeholder:text-[#717171]"
        />
      </div>
      <div className="mt-8 flex relative items-center gap-16">
        <SelectComponent
          onChange={setGrade}
          placeholder={content?.grade}
          dropDownStyles={"max-h-[200px] bottom-full mb-1"}
          items={["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]}
          style={"w-[7vw]"}
        />
        <AppButton title={"Grade"} styles={"w-[10vw]"} action={handleGrade} />
        <AppButton
          title={"Cancel"}
          styles={"w-[10vw] absolute right-0 "}
          action={() => close(false)}
        />
      </div>
    </div>
  );
};
export default Submissions;

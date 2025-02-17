import { useState } from "react";
import SelectComponent from "./Select";
import { useSelector } from "react-redux";
import AppButton from "./AppButton";

const Submissions = ({ close }) => {
  // --------------------------------------------VARIABLES
  const { module } = useSelector((state) => state.module);
  const { course, loading } = useSelector((state) => state.network);
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [unit, setUnit] = useState(1);
  const activeModule = course?.modules?.find((item) => item.id == module);
  const items = activeModule?.units?.map((unit) => unit.id);

  //-----------------------------------------------------------FUNCTIONS
  // const set = (item) => {
  //   set;
  // };

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='border border-[#99B2C6] w-full h-max pl-[5%] pr-[5%] mt-4 pt-[40px] pb-[40px] my-4 bg-white rounded-[8px]'>
      <div className='mb-8'>
        <p className='mb-1 text-[#1e1e1e]'>Student Name</p>
        <SelectComponent
          style={"w-full mb-4"}
          items={["John doe", "Ifunaya Lawanson"]}
          onChange={setUser}
        />
        <SelectComponent
          type={"units"}
          modules={activeModule?.units}
          onChange={setUnit}
          items={items}
          style={"w-[7.5vw]"}
        />
      </div>
      <div className='border border-[#c4c4c4] rounded-lg w-full h-[484px] overflow-y-scroll'></div>
      <div className='mt-8'>
        <p className='mb-1 text-[#1e1e1e]'>Teacher's Comment</p>
        <textarea
          type='text'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Write your comments here...'
          className=' rounded-[8px] w-full h-[124px] border-[#c4c4c4] text-sm border  focus:outline-none focus:border-primary/50 p-4 text-appBlack placeholder:text-[#717171]'
        />
      </div>
      <div className='mt-8 flex relative items-center gap-16'>
        <SelectComponent placeholder={"8/10"} style={"w-[7vw]"} />
        <AppButton title={"Grade"} styles={"w-[10vw] "} href={"/"} />
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

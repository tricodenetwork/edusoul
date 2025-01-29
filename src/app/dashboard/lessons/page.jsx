"use client";

import { useState, Suspense, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import SelectComponent from "@/components/ui/Select";
import { IconChevronRight } from "@tabler/icons-react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { fetchCourses } from "@/redux/slices/networkSlice";
import { useDispatch } from "react-redux";
import { setActiveModule } from "@/redux/slices/moduleSlice";
import { BarLoader } from "react-spinners";
import { proseFormatting } from "@/lib/helper";

const state2 = ["Note", "Resources", "Assignments"];

const Index = () => {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("course");
  const [active2, setActive2] = useState("Note");
  // const { user } = useUser();
  const dispatch = useDispatch();
  const { module } = useSelector((state) => state.module);
  const { items, course, loading } = useSelector((state) => state.network);
  const activeModule = course?.modules?.find((item) => item.id == module);
  // console.log(course, "activemodule");

  const [active, setActive] = useState(null);

  const set = (item) => {
    dispatch(setActiveModule(item));
  };

  useEffect(() => {
    setActive({
      unit: activeModule?.units[0],
      number: 0,
    });
  }, [module]);

  useEffect(() => {
    dispatch(fetchCourses(courseId));

    // dispatch(setActiveModule(1));
  }, []);

  if (loading) {
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <BarLoader
          loading={true}
          width={500}
          height={10}
          color='#90050f'
          className=''
        />
      </div>
    );
  } else {
    return (
      <div className='flex flex-col p-[44px] bg-appPink'>
        <Link
          href={"/dashboard/courses"}
          className='font-medium flex items-center gap-2  mb-8'
        >
          <Image
            src={"/assets/icons/back.svg"}
            width={16}
            height={16}
            alt='back'
          />
          <p className='text-xs text-[#1A1818]'>Back</p>
        </Link>
        <div className='flex w-full  flex-col items-center relative  justify-center'>
          <div className='self-start '>
            <SelectComponent
              style={"w-[120px]"}
              items={items}
              onChange={set}
              placeholder={"Module 1"}
            />
          </div>
          <h4 className='text-2xl underline underline-offset-4 absolute w-full text-center text-appBlack font-medium capitalize'>
            {activeModule?.title}
          </h4>
        </div>
        <div className='flex   mt-8 gap-[101px] items-center'>
          {activeModule?.units?.map((item, index) => {
            console.log(item, active?.unit, "lkklskls");
            return (
              <button
                onClick={() => setActive({ unit: item, number: index })}
                key={index.toString()}
                className={`font-medium ${
                  item.id === active?.unit?.id
                    ? " border-primary"
                    : "border-transparent"
                } text-appBlack border-b-2 duration-200 w-[146px]`}
              >
                {`Unit ${index + 1}`}
              </button>
            );
          })}
        </div>

        {active && (
          <div className='flex flex-col justify-start items-start gap-3'>
            <div className='relative w-full h-[470px] mt-8'>
              <Image
                src='/assets/images/lesson.png'
                fill
                alt='course'
                className='mr-[24px]'
              />
            </div>
            <div className='my-4'>
              <span className='text-slate-900 text-3xl font-normal'>
                {`Unit ${active?.number + 1}:`}
              </span>
              <span className='text-slate-900 ml-1 text-3xl font-normal'>
                {active?.unit?.title}
              </span>
            </div>
            {/* <div className='h-10 text-slate-900 justify-center items-center gap-2 inline-flex'>
            <Image
              src='/assets/images/profile.png'
              width={45}
              height={45}
              alt='profile'
              className='rounded-full'
            />
            <div className='flex-col justify-center items-start gap-0.5 inline-flex'>
              <div className='text-base font-bold'>Silviaa Smith</div>
              <div className='text-sm font-normal'>Instructor</div>
            </div>
          </div>*/}
          </div>
        )}

        <div className='w-full flex  gap-[136px]  duration-200 mt-8  mb-4 justify-start items-center'>
          {state2.map((item, index) => (
            <button
              onClick={() => setActive2(item)}
              key={index.toString()}
              className={`font-medium ${
                item === active2 ? " border-primary" : "border-transparent"
              } text-appBlack border-b-2 duration-200 px-[2vw]`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className='h-[60vh] py-[3vh] overflow-y-scroll'>
          {active2 === "Resources" && (
            <div className='w-52 h-28 mt-3 flex-col justify-start items-start gap-4 inline-flex'>
              <button className='self-stretch p-1 justify-start items-center gap-2.5 inline-flex'>
                <Image
                  src={"/assets/icons/download_red.svg"}
                  width={12}
                  height={12}
                  alt='donwload'
                />
                <p className='text-primary text-xs font-normal leading-none'>
                  Downloadlinkwillbehere.mp4
                </p>
              </button>
            </div>
          )}
          {active2 === "Assignments" && (
            <div className='w-full h-28 mt-3 flex-col justify-start items-start gap-4 inline-flex'>
              <p className=''>{active?.unit?.assignment}</p>
            </div>
          )}
          {active2 === "Note" && (
            <div
              dangerouslySetInnerHTML={{ __html: active?.unit?.note }}
              className={`w-auto  h-auto ${proseFormatting} mt-3 flex-col justify-start items-start gap-4 inline-flex`}
            ></div>
          )}
        </div>

        <button
          onClick={() => {
            if (active?.number < activeModule?.units?.length - 1) {
              // Navigate to the next unit
              setActive({
                unit: activeModule?.units[active?.number + 1],
                number: active?.number + 1,
              });

              // Scroll to the top smoothly
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            } else {
              toast.success("You have reached the last unit of this module.");
            }
          }}
          disabled={active?.number >= activeModule?.units?.length - 1}
          className='text-primary disabled:opacity-50 border-b-2 font-medium text-sm items-center border-primary py-1 w-max flex gap-[2px]'
        >
          <p>Next Lesson</p>
          <IconChevronRight size={18} stroke={2} />
        </button>
      </div>
    );
  }
};

const IndexSuspense = () => {
  return (
    <Suspense>
      <Index />
    </Suspense>
  );
};
export default IndexSuspense;

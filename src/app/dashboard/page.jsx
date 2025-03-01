"use client";
import CircularProgressBar from "@/components/CircularProgressBar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { getUser } from "@/lib/actions";
import NoCoursesDisplayHolder from "@/components/shared/NoCoursesDisplayHolder";
import { useUser } from "@/context/UserContext";
import { useSelector } from "react-redux";
import { fetchCourses } from "@/redux/slices/networkSlice";
import { useDispatch } from "react-redux";

const Index = () => {
  const { user } = useUser();
  const { courses, assignments } = useSelector((state) => state.network);
  const userCourses = courses.filter((item) =>
    user?.courses?.map((item) => item.id).includes(item.id)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses(1));
  }, []);

  if (user) {
    return (
      <div className="w-full flex-col bg-white h-max md:flex-row flex  justify-between px-3 sm:px-[20px] lg:px-[40px] py-6">
        {/* First Section */}
        <section
          className={`w-full ${
            (user?.courses?.length ?? 0) !== 0 ? "lg:w-[65%]" : "lg:w-full"
          } h-max  flex flex-col`}
        >
          {/* Welcome Card */}
          <div className="bg-primary relative w-full overflow-hidden flex flex-col items-start px-[5%] justify-center space-y-4 rounded-[12px] h-[222px]">
            <h3 className="text-2xl text-white font-semibold">
              {`Welcome Back, ${user?.name?.split(" ").at(0)}`}
            </h3>
            {(user?.courses?.length ?? 0) !== 0 ? (
              <p className="text-white z-50 max-w-[454px] text-xs">
                You are making progress course journey. Keep going to achieve
                your educational goals! Click on the Continue button to proceed
                with your enrollment.
              </p>
            ) : (
              <p className="flex flex-col gap-1  text-white">
                <span>
                  It looks like you haven&apos;t enrolled in any courses yet.
                </span>
                <span>
                  Explore new learning opportunities and take the next step in
                  your education journey. Start by registering for courses.
                </span>
              </p>
            )}
            <Link
              href={"/dashboard/courses"}
              className="bg-white text-xs flex justify-center hover:translate-y-1 duration-150 font-semibold w-[147px] py-4 text-primary rounded-[4px]"
            >
              {(user?.courses?.length ?? 0) !== 0
                ? "Continue Course"
                : "Register Courses"}
            </Link>

            <div className="absolute hidde flex w-[150px] h-[80px] lg:w-[249px] lg:h-[200px] object-cover -right-3 bottom-0 lg:-top-[13px]">
              <Image
                src={"/assets/images/books.png"}
                className="object-cover"
                fill
                alt="books"
              />
            </div>
          </div>
          {(user?.courses?.length ?? 0) == 0 && <NoCoursesDisplayHolder />}
          {(user?.courses?.length ?? 0) !== 0 && (
            <div>
              {/* Courses */}
              <div className="rounded-[8px] mt-[24px] w-full h-max flex flex-col border border-appAsh2 p-3 lg:p-6">
                <div className="flex items-center justify-between">
                  <p className="font-semibold  text-appBlack">
                    {!user?.courses ? "Courses" : `Current Courses `}
                  </p>
                  <Link
                    href={"/courses"}
                    className="text-xs text-appAsh uppercase font-bold"
                  >
                    {!user?.courses ? "View All" : `View All `}
                  </Link>
                </div>
                <div className="flex   flex-col sm:grid sm:grid-cols-3 lg:place-items-center w-full mt-[16px] justify-start  gap-4 lg:px-[16px] items-center">
                  {userCourses.map((item, index) => {
                    const numerator =
                      assignments?.filter((assignment) => {
                        assignment.course == item.id &&
                          assignment.status == "completed";
                      })?.length ?? 0;
                    const denomiator = courses?.filter(
                      (course) => course.id == item.id
                    )[0]?.modules?.length;

                    const percentageProgresss = (numerator / denomiator) * 100;
                    return (
                      <div
                        key={index.toString()}
                        className="flex  items-center  mb-6 md:mb-0 md:items-start w-full lg:w-[200px]  md:flex-col"
                      >
                        <div>
                          <Image
                            src={"/assets/images/course.png"}
                            width={200}
                            height={81}
                            alt="course"
                            className=" mb-2 lg:mb-5"
                          />
                          <div className="w-full">
                            <h5 className="font-medium text-appBlack text-[10px] ">
                              {item?.title?.length > 30
                                ? item?.title?.slice(0, 30).concat("...")
                                : item?.title}
                            </h5>
                            <p className="font-medium mt-[2px] text-appBlack text-[10px] ">
                              {`Module ${numerator + 1}`}
                            </p>
                            <div className="mt-[8px] w-full">
                              <div className="w-full bg-appAsh rounded-[2px] h-[4px]">
                                <div
                                  style={{ width: `${percentageProgresss}%` }}
                                  className="bg-primary rounded-[2px] h-full"
                                ></div>
                              </div>
                              <div className="flex items-center mt-1 justify-between">
                                <p className="text-appBlack text-[10px]">
                                  Progress
                                </p>
                                <p className="text-appBlack text-[10px]">
                                  {`${percentageProgresss}% completed`}
                                </p>
                              </div>
                            </div>
                            <div className="mt-[8px] flex items-center justify-between w-full">
                              {/* <p className='text-appBlack text-[10px]'>
                        <strong>Instructor:</strong>John Smith
                      </p> */}
                              <p className="text-appBlack text-[10px]">
                                <strong>Due Date:</strong>{" "}
                                {item?.modules[numerator]?.dueDate.toString()}
                              </p>
                            </div>
                          </div>
                        </div>

                        <Link
                          href={`/dashboard/lessons?course=${item.id}`}
                          className="bg-primary hover:-translate-y-1 duration-200 rounded-[4px] hidden md:flex justify-center w-full py-[8px] text-white mt-[24px] text-[10px] font-semibold"
                        >
                          Continue Course
                        </Link>
                        <button className="bg-primary mx-auto rounded-[8px] flex md:hidden w-max h-max px-4 py-[8px] text-white mt-[24px] text-[10px] font-semibold">
                          Continue
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Notifications */}
              <div className="rounded-[8px] mt-[24px] w-full flex flex-col border border-appAsh2 p-3 lg:p-6">
                <div className="flex items-center justify-between">
                  <p className="font-semibold  text-appBlack">Notifications</p>
                  {/* <p className="text-xs text-appAsh uppercase font-bold">
                    {!user?.notifications ? "None" : `View All`}
                  </p> */}
                </div>
                <div className="mt-[24px] grid h-[50px] border-t border-appAsh2 border-x items-center grid-cols-[1.5fr,3.5fr] lg:mx-[16px]">
                  <div className="text-[10px] px-2  lg:px-[24px] h-full flex items-center border-r border-appAsh2 font-medium text-appBlack">
                    Category
                  </div>
                  <div className="text-[10px] px-2  lg:px-[24px] font-medium text-appBlack">
                    Notifications
                  </div>
                </div>
                {user?.notifications.map((item, index) => {
                  return (
                    <div
                      key={index.toString()}
                      className="border border-appAsh2 grid h-[58px] items-center grid-cols-[1.5fr,3.5fr] lg:mx-[16px]"
                    >
                      <div className="text-[10px] px-2  lg:px-[24px]  py-[8px] h-full flex items-center border-r border-appAsh2 font-medium text-appBlack">
                        {item.title}
                      </div>
                      <div className="text-[10px] px-2  lg:px-[24px]  py-[8px]  font-medium text-appBlack">
                        <p className="text-xs  text-appBlack">{item.message}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Certificates */}

              <div className="w-full h-[222px] bg-primary/10 border-primary border rounded-[12px] mt-6 px-[40px] py-[49px] relative">
                <div>
                  <h4 className="text-2xl text-primary font-semibold mb-[18px]">
                    Your Course Certificate
                  </h4>
                  <p className="text-xs text-primary mb-6">
                    After completing your course, you can check here for your
                    certificate
                  </p>
                  <Link
                    href={"/dashboard/courses"}
                    className="bg-white text-xs flex justify-center hover:translate-y-1 duration-150 font-semibold w-[147px] py-[12px] text-primary rounded-[4px]"
                  >
                    Download Certificate
                  </Link>
                </div>
                <Image
                  src={"/assets/images/scroll.png"}
                  width={242}
                  height={162}
                  alt="scroll"
                  className="absolute bottom-3 object-cover right-0"
                />
              </div>
            </div>
          )}
        </section>

        {/* Second Section */}
        {(user?.courses?.length ?? 0) !== 0 && (
          <section className="w-full md:w-[80%] lg:w-[33%] mt-6 md:mt-0 md:ml-4">
            {/* Deadlines */}
            <div className="w-full border border-appAsh2 mb-[24px] p-3 lg:p-6 h-max bg-appPink rounded-[12px]">
              <h5 className="text-appBlack font-semibold mb-[24px]">
                Upcoming Deadlines
              </h5>
              <div className="bg-white rounded-[8px] p-4">
                <div className="flex items-center mb-[12px] justify-between">
                  <p className="font-semibold  text-appBlack text-[12px]">
                    Courses Deadline
                  </p>
                  <p className="text-[12px] text-appAsh uppercase font-bold">
                    {!user?.courses ? "None" : `View All `}
                  </p>
                </div>

                <div>
                  {userCourses?.slice(0, 5).map((item, index) => (
                    <div
                      key={index.toString()}
                      className="flex items-center py-[8px] border-b border-appAsh2 mb-[24px] justify-between"
                    >
                      <div className="w-[90%]">
                        <p className="font-medium  text-[12px] text-appBlack">
                          {item.title}
                        </p>
                        <p className="font-medium  mt-2 text-[10px] text-appBlack">
                          <strong>Exam Date:</strong> July 15, 2024
                        </p>
                      </div>
                      <button className="bg-primary text-[12px] text-white rounded-[2px] w-[83px] py-2">
                        Submit
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full border border-appAsh2 mb-[24px] p-3 lg:p-6 h-max bg-appPink rounded-[12px]">
              <h5 className="text-appBlack font-semibold mb-[24px]">
                Progress Overview
              </h5>
              <div className="bg-white rounded-[8px] p-4">
                <p className="font-semibold  text-appBlack mb-[8px] text-[14px]">
                  Courses
                </p>
                <div className="flex justify-between items-center">
                  <div className="">
                    {userCourses?.slice(0, 5).map((item, i) => {
                      const numerator =
                        assignments?.filter((assignment) => {
                          assignment.course == item.id &&
                            assignment.status == "completed";
                        })?.length ?? 0;
                      const denomiator = courses?.filter(
                        (course) => course.id == item.id
                      )[0]?.modules?.length;

                      const percentageProgresss =
                        (numerator / denomiator) * 100;
                      return (
                        <div
                          key={i.toString()}
                          className="flex mb-[8px] items-center justify-normal space-x-2"
                        >
                          <div className="w-[6px] h-[6px] rounded-full bg-primary"></div>
                          <p className="text-appBlack text-[10px]">
                            {item.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  {/* <div className='relative font-medium text-[10px] w-[64px] h-[64px] rounded-full border-[10px] border-appAsh2 flex items-center justify-center'>
                {" "}
                50%
              </div> */}
                  {/* <CircularProgressBar percentage={user?.courses ? 50 : 0} /> */}
                </div>
                <Link
                  href={"/courses"}
                  className="rounded-[4px] flex items-center justify-center py-[8px] bg-primary w-full text-[12px] font-semibold text-white mt-[32px] "
                >
                  Register More Courses
                </Link>
              </div>
              <div className="bg-white mt-[24px] rounded-[8px] p-4">
                <div className="flex items-center mb-[12px] justify-between">
                  <p className="font-semibold  text-appBlack text-[12px]">
                    Assignments
                  </p>
                  <p className="text-[12px] text-appAsh uppercase font-bold">
                    {!user?.courses ? "None" : `View All `}
                  </p>
                </div>
                <div>
                  {user?.courses?.map((item, index) => {
                    return (
                      <div key={index.toString()} className=" mb-4">
                        <div className="flex mb-[8px] items-center justify-normal space-x-2">
                          <div className="w-[6px] h-[6px] rounded-full bg-primary"></div>
                          <p className="text-appBlack text-[12px]">
                            {item.title}
                          </p>
                        </div>
                        {assignments
                          .filter(
                            (ass) =>
                              ass.user == user?.email && ass.course == item.id
                          )
                          .map((assignment) => {
                            return (
                              <div className="flex items-center justify-between w-full">
                                <p className="text-[10px] text-appBlack">
                                  {`Assignment ${assignment.module}`}
                                </p>
                                <p
                                  className={`text-xs capitalize ${
                                    assignment?.status == "completed"
                                      ? "text-appGreen"
                                      : assignment?.status == "retry"
                                      ? "text-orange-800"
                                      : ""
                                  } `}
                                >
                                  {assignment?.status ?? "Not Started"}
                                </p>
                              </div>
                            );
                          })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
};

export default Index;

{
  /* <div className='border border-appAsh2  grid h-max items-center grid-cols-[1.5fr,3.5fr] lg:mx-[16px]'>
            <div className='text-[10px] px-2  lg:px-[24px]  py-[8px] h-full flex items-center border-r border-appAsh2 font-medium text-appBlack'>
              Assignment Reminders
            </div>
            <div className='text-[10px] px-2  lg:px-[24px]  py-[8px]  font-medium text-appBlack'>
              <p className='text-xs mb-[10px] text-appBlack'>
                Assignment due in 3 days: 'The Parables of Jesus'.
              </p>
              <p className='text-xs text-appBlack'>
                You have an upcoming quiz on 'The Book of Genesis'. Prepare
                well!
              </p>
            </div>
          </div>
          <div className='border border-appAsh2 grid h-max items-center grid-cols-[1.5fr,3.5fr] lg:mx-[16px]'>
            <div className='text-[10px] px-2  lg:px-[24px]  py-[8px] h-full flex items-center border-r border-appAsh2 font-medium text-appBlack'>
              Assignment Reminders
            </div>
            <div className='text-[10px] px-2  lg:px-[24px]  py-[8px]  font-medium text-appBlack'>
              <p className='text-xs mb-[10px] text-appBlack'>
                Assignment due in 3 days: 'The Parables of Jesus'.
              </p>
              <p className='text-xs text-appBlack'>
                You have an upcoming quiz on 'The Book of Genesis'. Prepare
                well!
              </p>
            </div>
          </div> */
}

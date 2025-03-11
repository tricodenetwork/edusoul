"use client";

import Courses from "@/components/shared/Courses";
import AppButton from "@/components/ui/AppButton";
import { useUser } from "@/context/UserContext";
import { coursesData } from "@/data";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { baseUrl } from "../../../../config/config";
import { addCourseToUser } from "@/lib/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCourses } from "@/redux/slices/networkSlice";
import Loader from "@/components/ui/Loader";
import Link from "next/link";
import TimeTable from "@/components/TimeTable";

if (process.env.NEXT_PUBLIC_STRIPE_KEY_TEST === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_KEY_TEST is not defined");
}
if (process.env.NEXT_PUBLIC_STRIPE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_KEY is not defined");
}

loadStripe(
  process.env.NODE_ENV == "production"
    ? process.env.NEXT_PUBLIC_STRIPE_KEY
    : process.env.NEXT_PUBLIC_STRIPE_KEY_TEST
);
function CourseDetails() {
  const searchParams = useSearchParams();
  const CourseId = searchParams.get("id");
  const id = parseInt(CourseId, 10);

  const { data: session, status } = useSession();
  const router = useRouter();
  const { user } = useUser();
  const { course, loading } = useSelector((state) => state.network);
  const dispatch = useDispatch();

  console.log("user", course);
  const userHasCourse = user?.courses?.some((item) => item.id == CourseId);

  const buyCourse = async () => {
    if (!session?.user) {
      toast.error("Not Authenticated");
      return;
    }
    const toastId = toast.loading("Redirecting...");
    try {
      const res = await axios.post(`${baseUrl}api/buy-course`, {
        id,
        priceId: course?.priceId,
        email: user?.email,
      });

      // toast.success(res.data.message, { id: toastId });

      router.replace(res.data.url);
    } catch (error) {
      console.error("This is the error", error);
      toast.error("Problem Purchasing", { id: toastId });
    }
  };

  useEffect(() => {
    dispatch(fetchCourses(CourseId));
  }, [CourseId]);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      const registerCourse = async () => {
        const res = await addCourseToUser(CourseId);
        if (res.ok) {
          toast.success("Purchase Successfull!!, Redirecting to dashboard.");
          router.push("/dashboard");
        } else {
          toast.error(res.message ?? "Problem adding course to user");
        }
      };
      registerCourse();
    }

    if (query.get("canceled")) {
      toast.error(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  if (loading) {
    return (
      <div className="text-black flex-1 min-h-[88vh] mt-14">
        <Loader />
      </div>
    ); // Show loading indicator
  }
  if (!course) {
    return (
      <div className="text-black flex-1 min-h-[88vh] mt-14">
        <Loader />
      </div>
    ); // Show loading indicator
  }

  return (
    <>
      <div className="flex flex-col mt-14 mb-7">
        <div className="flex flex-col w-full h-[365px] px-3 md:px-[80px] bg-[#F7D0D2] justify-center items-start">
          <h1 className="text-red-800 mb-4 text-xl md:text-5xl font-extrabold">
            {course?.title}
          </h1>
          <p className="self-stretch text-sm md:text-base text-slate-900  font-normal">
            {course?.snippet}
          </p>
        </div>

        <div className="flex p-3   md:p-[80px]   flex-col md:flex-row w-full  mt-16 justify-between items-start gap-16">
          <div className="flex-col flex-1  justify-start items-start gap-6 inline-flex">
            <h1 className="text-xl md:text-[56px] leading-tight font-black">
              What you will learn
            </h1>

            {course?.intro?.map((item, index) => (
              <div
                key={index.toString()}
                className="justify-start  items-center gap-6 inline-flex"
              >
                <Image
                  src={"/assets/icons/tick.svg"}
                  width={11.73}
                  height={8.94}
                  alt="Tick"
                />
                <div className="w-[90%] opacity-70 text-appBlack text-base font-normal ">
                  {item}
                </div>
              </div>
            ))}
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="h-8 flex-col  justify-start  gap-3 flex">
                <h5 className=" text-zinc-800 text-base md:text-2xl font-bold leading-normal">
                  {course.price}
                </h5>
              </div>
              <AppButton
                styles={
                  userHasCourse
                    ? "bg-green-500 cursor-not-allowed opacity-50 text-black"
                    : ""
                }
                title={userHasCourse ? "Purchased" : "Buy Course"}
                action={buyCourse}
              />
            </div>
          </div>

          <div className="w-full   md:w-[340px]  relative bg-white shadow border-b border-gray-300">
            <div className="relative w-full h-[191.25px]">
              <Image
                alt="courses"
                fill
                quality={100}
                className="rounded-t-[14px] object-cover bg-primary/80"
                src={`/assets/images${course.imgURL}`}
              />
            </div>
            <div className="p-4 flex-col justify-start  items-center gap-5 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                <div className="pt-4 justify-center items-center gap-2 inline-flex">
                  <div className="w-[13.33px] relative h-[13.33px]  p-1 rounded-full text-[5px]  justify-center items-center flex">
                    <Image
                      alt="success"
                      src={"/assets/icons/icon-success.svg"}
                      fill
                    />
                  </div>
                  <h2 className="text-zinc-800 text-sm font-normal">
                    Content Information
                  </h2>
                </div>
                <p className="text-neutral-600 text-sm font-normal">
                  Download Course Prospectus for course Requirements
                </p>

                <Link
                  href={`/assets/prospectus/${course.id}.pdf`}
                  className="w-full py-3.5 bg-white border border-red-800 justify-center items-center inline-flex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-48 h-5 text-center text-red-800 text-base font-bold">
                    {"Download"}
                  </div>
                </Link>
              </div>
              {/* <div className='h-10 flex-col justify-start items-center gap-2.5 flex'>
                <div className='self-stretch h-3.5 text-center text-neutral-500 text-xs font-normal'>
                  Starting at {course.price} per month after trial
                </div>
                <div className='self-stretch h-4 text-center text-neutral-500 text-xs font-normal'>
                  Cancel anytime
                </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="px-[5vw]">
        <p>Click on the link below to apply for a scholarship</p>
        <Link
          className="text-blue-700 text-xl"
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSdf-vJK77PPLR-ZOOlhN9fXRhI1crItqMHIa0Zm5Pxp3Hg47g/viewform?usp=sharing"
          }
        >
          Apply for scholarship
        </Link>
      </div>

      <section className="mt-[2vh] md:mt-[9vh] w-full px-3 md:px-[7vw]">
        <Courses />
      </section>
    </>
  );
}

const CourseDetailsSuspense = () => {
  return (
    <Suspense>
      <CourseDetails />
    </Suspense>
  );
};

export default CourseDetailsSuspense;

const state = ["All Programme", "Program 1", "Program 2", "Program 3"];

"use client";
import AppButton from "@/components/ui/AppButton";
import SelectComponent from "@/components/ui/Select";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const { users, courses, assignments } = useSelector((state) => state.network);
  const [search, setSearch] = useState("");
  const [overview, setOverview] = useState(false);
  const [user, setUser] = useState(null);
  const userCourses = courses.filter((item) =>
    user?.courses?.map((item) => item.id).includes(item.id)
  );

  if (overview) {
    return (
      <div className="border border-[#99B2C6] w-full h-max px-[3%]  mt-4 pt-[40px] pb-[40px] my-4 bg-white rounded-[8px]">
        <div className="flex w-full h-[161px] rounded-[12px] px-[53px] py-[16px] bg-primary items-center">
          <div className="w-[132px] mr-6 h-[132px] border-2 border-white rounded-full overflow-hidden relative">
            <Image
              className="object-cover "
              fill
              alt="profile"
              src={user?.image ?? "/assets/images/pro.svg"}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-[40px] font-semibold text-white">
              {`${user?.name} ${user?.surname}`}
            </h4>
            <p className="text-[14px] text-white">{user?.email}</p>
          </div>
        </div>
        <h4 className="text-black mt-8 font-medium text-xl">Course Overview</h4>
        <div>
          {userCourses.map((item, index) => {
            const numerator = assignments.filter((assignment) => {
              assignment.course == item.id &&
                assignment.status == "completed" &&
                item.user == user?.email;
            });
            const denomiator = courses.filter(
              (course) => course.id == item.id
            )[0].modules.length;
            const percentageProgresss = (numerator / denomiator) * 100;
            return (
              <div
                key={index.toString()}
                className=" border-[#99B2C6] border rounded-[8px] mt-4"
              >
                <div className="grid border-[#99b2c6] bg-[#f6f6f6] h-[40px] rounded-t-[8px] place-content-center px-[25px] grid-cols-[1fr,3.5fr,1.5fr,1fr]">
                  <p className="text-[13px] ">Date</p>
                  <p className="text-[13px] text-center flex items-center justify-center">
                    Course Title
                  </p>
                  <p className="text-[13px] text-center flex items-center justify-center">
                    Progress
                  </p>
                  <p className="text-[13px]"></p>
                </div>
                <div className="grid border-[#99b2c6]  h-[80px] rounded-t-[8px] place-content-center px-[25px] grid-cols-[1fr,3.5fr,1.5fr,1fr]">
                  <p className="text-[13px]">May,27 2024</p>
                  <h4 className="text-[16px] text-center flex items-center justify-center font-semibold text-appBlack">
                    {item.title}
                  </h4>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="w-[120px] h-[6px] bg-[#c4c4c4] rounded-[4px]">
                      <div
                        style={{ width: `${percentageProgresss}%` }}
                        className="bg-primary rounded-[4px] h-full"
                      />
                    </div>

                    <p className="text-xs text-center flex items-center justify-center">
                      {`${percentageProgresss}% completed`}
                    </p>
                  </div>
                  <AppButton
                    title={"Back"}
                    styles={"w-[76px] mx-auto self-center h-[28px] text-[13px]"}
                    action={() => {
                      setOverview(false);
                      setUser(null);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="border border-[#99B2C6] w-full h-max px-[3%]  mt-4 pt-[40px] pb-[40px] my-4 bg-white rounded-[8px]">
        <div className="flex flex-col">
          <h4 className="mb-4">Students</h4>
          <div className="flex justify-between ">
            {/* <SelectComponent
                style={"w-[55%] z-50"}
                items={["Course 1"]}
                onChange={() => console.log("hello")}
                // modules={course.modules}
              /> */}
            <div className="w-[35%] flex items-center relative  rounded-[8px] border border-[#d9d9d9]">
              <input
                placeholder="Search for students"
                onChange={(e) => setSearch(e.target.value)}
                className="h-[48px] rounded-[8px] px-4 w-full"
              />
              <Image
                src={"/assets/icons/search.svg"}
                width={16}
                height={16}
                className="absolute right-[16px] "
                alt="search"
              />
            </div>
          </div>
        </div>
        <div>
          {users
            ?.filter((item) =>
              search !== ""
                ? (item?.name.toLowerCase().includes(search.toLowerCase()) ||
                    item?.email
                      ?.toLowerCase()
                      .includes(search.toLowerCase())) &&
                  !item.admin
                : !item.admin
            )
            .map((item, index) => {
              return (
                <div
                  key={index.toString()}
                  className=" border-[#99B2C6] border rounded-[8px] mt-[42px]"
                >
                  <div className="grid border-[#99b2c6] bg-[#f6f6f6] h-[40px] rounded-t-[8px] place-content-center px-[25px] grid-cols-[3fr,1.5fr,1.5fr,1.5fr]">
                    <p className="text-[13px]">Student Name</p>
                    <p className="text-[13px] text-center flex items-center justify-center">
                      Registration Date
                    </p>
                    <p className="text-[13px] text-center flex items-center justify-center">
                      Courses taken
                    </p>
                    <p className="text-[13px]"></p>
                  </div>
                  <div className="grid border-[#99b2c6]  h-[80px] rounded-t-[8px] place-content-center px-[25px] grid-cols-[3fr,1.5fr,1.5fr,1.5fr]">
                    <div className="flex items-center">
                      <div className="w-[50px] mr-4 h-[50px] rounded-full overflow-hidden relative">
                        <Image
                          className="object-cover "
                          fill
                          alt="profile"
                          src={item.image ?? "/assets/images/pro.svg"}
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-[16px] font-semibold text-appBlack">
                          {item.name}
                        </h4>
                        <p className="text-[13px]">{item.email}</p>
                      </div>
                    </div>
                    <p className="text-[13px] text-center flex items-center justify-center">
                      {new Date(
                        parseInt(item._id.substring(0, 8), 16) * 1000
                      ).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </p>
                    <p className="text-[13px] text-center flex items-center justify-center">
                      {item?.courses?.length ?? 0}
                    </p>
                    <AppButton
                      title={"Details"}
                      styles={
                        "w-[76px] mx-auto self-center h-[28px] text-[13px]"
                      }
                      action={() => {
                        setOverview(true);
                        setUser(item);
                      }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
};

export default Index;

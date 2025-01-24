"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CourseInfoNav = ({ item, course }) => {
  const path = usePathname();
  return (
    <Link
      href={
        item.includes("Information")
          ? `/admin/courses/${course}/modules`
          : `/admin/courses/${course}/modules/${item.toLowerCase()}`
      }
      className={` ${
        path.split("/").pop() == "modules" && item.includes("Module")
          ? "border-b-[3px] border-primary border-opacity-100 font-medium"
          : path.includes(item.toLowerCase())
          ? "border-b-[3px] border-primary border-opacity-100 font-medium"
          : "border-appPink"
      } text-appBlack duration-150 ease-in border-b-[3px]  `}
    >
      {item}
    </Link>
  );
};

export default CourseInfoNav;

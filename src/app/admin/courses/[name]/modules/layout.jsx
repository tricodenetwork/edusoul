import LayoutTopSection from "@/components/layouts/LayoutTopSection";
import AppButton from "@/components/ui/AppButton";
import CourseInfoNav from "@/components/ui/CourseInfoNav";
import SelectComponent from "@/components/ui/Select";
import TopNav from "@/components/ui/TopNav";
import { coursesData } from "@/data";

const state = ["Module Information", "Lessons", "Assignments", "Resources"];

const Index = async ({ children, params }) => {
  const { name } = await params;
  const course = coursesData.find((item) => item.id == name);
  const moduleNames = course?.modules?.map((module) => module.id);

  return (
    <div className='h- px-[5%]   pt-[2.5%] pb-[2%]'>
      <div className='mb-4'>
        <TopNav
          main='Courses'
          homeLink='/admin/courses'
          first={course?.title}
          firstLink={""}
        />
      </div>
      <LayoutTopSection courseId={name} />
      <div className='w-full flex mt-8 pr-[15%] justify-between items-center'>
        {state.map((item, index) => (
          <CourseInfoNav course={name} key={index.toString()} item={item} />
        ))}
      </div>
      <div className='flex-1 pr-[15%]  mt-2'>{children}</div>
    </div>
  );
};

export default Index;

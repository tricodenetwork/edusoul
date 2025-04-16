import LayoutTopSection from "@/components/layouts/LayoutTopSection";
import CourseInfoNav from "@/components/ui/CourseInfoNav";

const state = ["Module Information", "Units", "Assignments", "Resources"];

const Index = async ({ children, params }) => {
  const { name } = await params;

  return (
    <div className="h- px-[5%]   pt-[2.5%] pb-[2%]">
      <LayoutTopSection courseId={name} />
      <div className="w-full flex mt-8 pr-[15%] justify-between items-center">
        {state.map((item, index) => (
          <CourseInfoNav course={name} key={index.toString()} item={item} />
        ))}
      </div>
      <div className="flex-1 pr-[15%] mt-2">{children}</div>
    </div>
  );
};

export default Index;

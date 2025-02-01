import { ClockLoader } from "react-spinners";
import Sidebar from "@/components/layouts/Sidebar";

const Index = () => {
  return (
    <div className='flex flex-col  md:flex-row w-full h-screen justify-between overflow-y-hidden items-center'>
      <div className='w-[50%] hidden md:flex bg-green-400'>
        <Sidebar Header='Hello ' Message='Loading' />
      </div>
      <div className='flex   justify-center items-center w-full lg:w-[50%] h-screen overflow-y-auto'>
        <ClockLoader
          loading={true}
          width={500}
          height={500}
          color='#90050f'
          className=''
        />
      </div>
    </div>
  );
};

export default Index;

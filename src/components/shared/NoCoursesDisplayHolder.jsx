import Image from "next/image";
import Link from "next/link";

const NoCoursesDisplayHolder = ({ state, setState }) => {
  return (
    <div className='flex-1   w-full mt-6'>
      <div className='w-[397px] mx-auto  justify-center items-center h-[415px] flex-col flex'>
        <div className='w-[200px] h-[200px]  relative'>
          <Image
            src={"/assets/icons/register.svg"}
            alt='register'
            fill
            className=' object-cover'
          />
        </div>
        {state == "Completed" ? (
          <div className=' flex flex-col items-center'>
            <p className='font-semibold max-w-[293px] text-center text-[#333333] text-2xl leading-none'>
              You haven&apos;t completed any courses yet.
            </p>
            <p className='text-[#676767]  mt-2'>
              Go back to continue your learning journey!
            </p>
          </div>
        ) : (
          <div className=' flex flex-col items-center'>
            <p className='font-semibold max-w-[293px] text-center text-[#333333] text-2xl leading-none'>
              You haven&apos;t enrolled in any courses yet.
            </p>
            <p className='text-[#676767]  mt-2'>
              Start exploring to begin your learning journey!
            </p>
          </div>
        )}
        {state == "Completed" ? (
          <button
            onClick={() => setState("In progress")}
            className='bg-primary mt-4 text-xs flex justify-center hover:translate-y-1 duration-150 font-semibold w-[147px] py-4 text-white rounded-[4px]'
          >
            My Courses
          </button>
        ) : (
          <Link
            href={"/courses"}
            className='bg-primary mt-4 text-xs flex justify-center hover:translate-y-1 duration-150 font-semibold w-[147px] py-4 text-white rounded-[4px]'
          >
            Register Courses
          </Link>
        )}
      </div>
    </div>
  );
};

export default NoCoursesDisplayHolder;

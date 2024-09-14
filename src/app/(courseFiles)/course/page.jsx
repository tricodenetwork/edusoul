import Image from "next/image";
import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <div className='p-11'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <Link className='text-sm text-appAsh mr-4' href={"/"}>
            Home
          </Link>
          <Image
            src={"/assets/icons/down.svg"}
            width={12}
            height={6}
            alt='bell'
            className={"-rotate-90 mr-4"}
          />
          <Link className='text-sm text-appAsh mr-4' href={"/"}>
            Course Title
          </Link>
          <Image
            src={"/assets/icons/down.svg"}
            width={12}
            height={6}
            alt='bell'
            className={"-rotate-90 mr-4"}
          />
          <Link className='text-sm text-primary font-medium mr-4' href={"/"}>
            {"Module1/Lesson1"}
          </Link>
        </div>
        <div className='flex border-b-2 hover:translate-x-1 duration-150 border-primary gap-3 pb-1 justify-between items-center'>
          <Link className='text-sm text-primary font-medium ' href={"/"}>
            Next Lesson
          </Link>
          <Image
            src={"/assets/icons/r_arro.svg"}
            width={8}
            height={16}
            alt='bell'
            className={""}
          />
        </div>
      </div>

      <section className='w-full h-[470px] relative'>
        <Image
          src={"/assets/images/lesson.png"}
          className='object-cover rounded-sms mt-3'
          alt='hero'
          fill
        />
      </section>
      <section>
        <div className='flex justify-between mt-6 w-full items-center'>
          <h4 className='text-[32px]'>
            Lesson 1:{" "}
            <span className='font-semibold'>
              Understanding the Parables of Jesus
            </span>
          </h4>
          <div className='   flex space-x-4 items-center'>
            <div className='px-4 flex items-center rounded-[4px] bg-white py-3'>
              <div className='flex border-r border-appAsh2 items-center '>
                <Image
                  src={"/assets/icons/likes.svg"}
                  width={18}
                  height={18}
                  alt='hand'
                />
                <p className='text-[10px] ml-[2px] mr-[8px] text-appAsh'>10</p>
              </div>
              <div className='flex ml-[8px]  items-center '>
                <Image
                  src={"/assets/icons/likes.svg"}
                  width={18}
                  height={18}
                  alt='hand'
                  className='rotate-180'
                />
                <p className='text-[10px] ml-[2px] mr-[8px] text-appAsh'></p>
              </div>
            </div>
            <div className='px-4 flex space-x-1 items-center rounded-[4px] bg-white py-3'>
              <p className='text-[10px] text-appAsh'>Download</p>
              <Image
                src={"/assets/icons/download.svg"}
                width={18}
                height={18}
                alt='download'
              />
            </div>
            <div className='px-4 flex  items-center rounded-[4px] bg-white py-3'>
              <Image
                src={"/assets/icons/menu.svg"}
                width={15}
                height={15}
                alt='download'
              />
            </div>
          </div>
        </div>
        <div className='flex mt-4 items-center'>
          <Image
            src={"/assets/images/pro.svg"}
            width={40}
            height={40}
            className='rounded-full mr-[8px]'
            alt='profile'
          />
          <div className='flex flex-col '>
            <h6 className='font-semibold text-appBlack mb-[2px]'>
              Silviaa Smith
            </h6>
            <p className='text-sm text-appBlack'>Instructor</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

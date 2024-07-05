import useFunctions from "@/hooks/useFunctions";
import Image from "next/image";

const Sidebar = ({ Header, Message }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS
  const { imageLoader } = useFunctions();

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className="fixed hidden md:flex px-6 py-10 pt-[6rem] xl:pt-24 flex-col justify-start sm:w-[16em] md:w-[20em] lg:w-[25em] xl:w-[30em] bg-primary h-screen">
      <div className="w-[] h-[22rem]">
        <Image
          loader={imageLoader}
          alt="logo"
          fill
          // width={350}
          // height={260}
          quality={100}
          className=""
          src="/assets/images/sidebar_img.png"
        />
      </div>
      <div className="">
        <p className="flex text-white font-bold w-full text-center mt-0 xl:mt-[10rem]">
          Join Us As We Take Your Christ-centered Education to the next level
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

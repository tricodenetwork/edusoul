import React from "react";
import Image from "next/image";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="mb-[15%]">
      <div className="w-[95%] h-[35rem] md:h-[30rem] -z-20 top-12 bottom-0">
        <Image
          alt="logo"
          fill
          className="object-cover  rounded-md"
          quality={100}
          src="/assets/images/about/product-images.png"
        />
      </div>
      <section className="flex absolute top-[6rem] bottom-0 py-[5em] md:py-[4em] flex-col items-start justify-center">
        <div className="flex flex-col justify-start items-start gap-4 lg:ml-20">
          <div className="justify-start items-start gap-2.5 inline-flex">
            <div>
              <Image
                alt="logo"
                width={500}
                height={100}
                quality={100}
                src="/assets/images/about/Label.png"
              />
            </div>
          </div>
          <div className="justify-start items-start gap-2.5 inline-flex">
            <div className="text-white text-5xl font-extrabold">
              Our Vision
            </div>
          </div>
          <div className="flex flex-col gap-3 md:w-[50vw]">
            <span className="text-white text-xl font-normal leading-7">
              To provide an education program that raises distinctive educators within a Christ-centered framework
            </span>
            <span className="text-white text-xl font-normal leading-7">
              {"(Col.2v3. Isa.58v12)"}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;

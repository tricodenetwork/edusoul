import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className=''>
      <div className='w-[95%] h-[35rem] md:h-[85vh] -z-20  bottom-0'>
        <Image
          alt='logo'
          fill
          className='lg:object-contain max-sm:object-cover rounded-md'
          quality={100}
          src='/assets/images/about/product-images.png'
        />
      </div>
      <section className='flex absolute top-[6rem] bottom-0 py-[5em] md:py-[4em] flex-col items-start justify-center max-sm:ml-5'>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },

            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className='animate_left'
        >
          <div className='flex flex-col justify-start items-start gap-4 lg:ml-20'>
            <div className='justify-start items-start gap-2.5 inline-flex'>
              <div>
                <Image
                  alt='logo'
                  width={500}
                  height={100}
                  quality={100}
                  src='/assets/images/about/Label.png'
                />
              </div>
            </div>
            <div className='justify-start items-start gap-2.5 inline-flex'>
              <div className='text-white text-[65px] font-semibold'>
                Our Vision
              </div>
            </div>
            <div className='flex flex-col gap-3 md:w-[50vw]'>
              <span className='text-white text-xl font-normal leading-7'>
                To provide an education program that raises distinctive
                educators within a Christ-centered framework
              </span>
              <span className='text-white text-xl font-normal leading-7'>
                {"(Col.2v3. Isa.58v12)"}
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default HeroSection;

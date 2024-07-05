import { useState, useEffect } from "react";

export default function Mandate({ mobile }) {
  return (
    <>
      <section
        className="py-7 w-full justify-center items-center"
        id="our-mandate"
      >
        <div className="flex flex-col md:flex-row mt-16 justify-start items-center gap-12">
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="text-primary text-[15px] font-bold uppercase tracking-[3px]">
                Our Mandate
              </div>
              <div className="text-black text-[36px] font-bold font-['Roboto']">
                What drives us to do what we do
              </div>
            </div>
            <div className="text-slate-900 text-lg font-normal font-['Roboto']">
              EduSoul focuses on transformational learning relevant to both
              age-old and current societal challenges. The program encourages
              participants to think critically about learning and how to best
              support each child's unique potential.
            </div>
          </div>

          <img
            className="w-full md:w-[350px] lg:w-[400px] h-[300px] rounded-lg"
            src="/assets/images/our-mandate.png"
          />
        </div>
      </section>
    </>
  );
}

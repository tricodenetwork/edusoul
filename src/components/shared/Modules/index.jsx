"use client";

import React from "react";
import { modulesData } from "@/data";
import EastIcon from "@mui/icons-material/East";

export default function Modules({ mobile }) {
  return (
    <>
      <section
        className="w-full pt-7 w-full justify-center items-center"
        id="modules"
      >
        <div className="flex justify-between items-center gap-6">
          <div className="text-slate-900 md:text-[40px] text-[20px] font-bold font-['Roboto'] leading-[44px]">
            Featured Modules
          </div>
          <div className="py-3 rounded-lg text-primary justify-center items-center cursor-pointer flex">
            <div className="text-base font-medium font-['Roboto'] leading-normal tracking-wide">
              View All Modules
            </div>
            <EastIcon />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-5 mx-auto w-full justify-center items-center gap-6 flex">
          {modulesData.map((mod) => {
            return (
              <div className="w-full h-[254px] px-6 pt-6 pb-16 bg-gradient-to-b from-slate-900 to-slate-900 flex-col justify-start items-start gap-4 rounded-[5px] flex">
                <div className="text-white text-base font-medium font-['Roboto'] leading-[17.60px]">
                  Module {mod.id}
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 text-white text-2xl font-bold font-['Roboto'] leading-relaxed">
                    Heart Foundation
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

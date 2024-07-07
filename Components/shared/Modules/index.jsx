import { useState, useEffect } from "react";
import { modulesData } from "@/Data/data";
import EastIcon from "@mui/icons-material/East";

export default function Modules({ mobile }) {
  return (
    <>
      <section className="py-7 w-full justify-center items-center" id="modules">
        <div className="grow shrink basis-0 self-stretch bg-white flex-col justify-center items-center gap-6 inline-flex">
          <div className="self-stretch h-[438px] flex-col justify-start items-start gap-9 flex">
            <div className="self-stretch justify-start items-center gap-6 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch h-11 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-slate-900 text-[40px] font-bold font-['Roboto'] leading-[44px]">
                    Featured Modules
                  </div>
                </div>
              </div>
              <div className="py-3 rounded-lg text-primary justify-center items-center cursor-pointer flex">
                <div className="px-4 justify-center items-center flex">
                  <div className="text-base font-medium font-['Roboto'] leading-normal tracking-wide">
                    View All Modules
                  </div>
                </div>
                <EastIcon />
              </div>
            </div>

            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              {modulesData.map((mod) => {
                return (
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="w-full h-[254px] self-stretch px-6 pt-6 pb-16 bg-gradient-to-b from-slate-900 to-slate-900 flex-col justify-start items-start gap-4 rounded-[5px] flex">
                      <div className="self-stretch h-12 flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch text-white text-base font-medium font-['Roboto'] leading-[17.60px]">
                          Module {mod.id}
                        </div>
                        <div className="self-stretch justify-start items-center gap-2 inline-flex">
                          <div className="grow shrink basis-0 text-white text-2xl font-bold font-['Roboto'] leading-relaxed">
                            Heart Foundation
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

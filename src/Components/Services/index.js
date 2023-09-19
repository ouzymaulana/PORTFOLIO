import React from "react";
import { BiCodeBlock } from "react-icons/bi";
import { FaPenNib } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";

export default function Services() {
  return (
    <main className=" min-h-max bg-main flex flex-col items-center py-28 max-sm:py-5 px-40 max-sm:px-20 gap-14 max-sm:gap-6">
      <div className="flex flex-col items-center">
        <h3 className="text-3xl max-sm:text-base font-conforter font-semibold text-title">
          Services
        </h3>
        <h4 className="text-6xl max-sm:text-xl max-lg:text-3xl font-conforter font-semibold">
          What I'm Great At
        </h4>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-20 max-sm:gap-6 font-conforter font-semibold text-lg max-sm:text-xs2">
        <div className="bg-card shadow-lg h-32 w-96 max-sm:w-72 max-sm:h-20 rounded-xl flex gap-4 justify-center items-center">
          <BiCodeBlock size={"2.2em"} />
          <div>Frontend Engineer</div>
        </div>
        <div className="bg-card shadow-lg h-32 w-96 max-sm:w-72 max-sm:h-20 rounded-xl flex gap-4 justify-center items-center">
          <BiCodeCurly size={"2em"} />
          <div>Backend Developer</div>
        </div>
        <div className="bg-card shadow-lg h-32 w-96 max-sm:w-72 max-sm:h-20 rounded-xl flex gap-4 justify-center items-center">
          <FaPenNib size={"1.8em"} />
          <div>Web Design</div>
        </div>
      </div>
    </main>
  );
}

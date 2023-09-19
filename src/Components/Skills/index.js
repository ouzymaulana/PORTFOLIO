import React from "react";
import star from "./../../assets/img/Star.svg";

export default function Skills() {
  const skillData = [
    { name: "HTML5" },
    { name: "CSS" },
    { name: "Javascript" },
    { name: "React JS" },
    { name: "Next Js" },
    { name: "Express JS" },
    { name: "MySql" },
    { name: "Restful API" },
    { name: "Redux" },
    { name: "Redux Toolkit" },
    { name: "JWT jsonwebtoken" },
  ];
  return (
    <main className="bg-dark text-white sm:py-7 max-sm:py-3 px-8 sm:text-2xl max-sm:text-xs overflow-hidden">
      <div className="animate-spin-slow flex gap-20 max-sm:gap-5 flex-nowrap font-conforter">
        {skillData.map((data, i) => (
          <React.Fragment key={i}>
            <img src={star} alt="star" className="max-sm:h-3 max-sm:w-3" />
            <div>
              <p className="w-max">{data.name}</p>
            </div>
          </React.Fragment>
        ))}
        {skillData.map((data, i) => (
          <React.Fragment key={i}>
            <img src={star} alt="star" />
            <div>
              <p className="w-max">{data.name}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}

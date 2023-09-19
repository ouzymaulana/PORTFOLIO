import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logoipsum-280 1.svg";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

export default function Header() {
  const [isActiveTogle, setIsActiveTogle] = useState(false);
  const [maxSmRightClass, setMaxSmRightClass] = useState("");
  const onClickToggle = () => {
    setIsActiveTogle(!isActiveTogle);
  };

  useEffect(() => {
    setMaxSmRightClass(
      isActiveTogle ? "max-sm:-right-0" : "max-sm:-right-full"
    );
  }, [isActiveTogle]);
  return (
    <header className="flex sm:justify-around px-10 sm:py-7 bg-main max-sm:h-16 sm:items-center sm:fixed sm:right-0 sm:left-0 z-10">
      {/* <header className="flex bg-slate-300 justify-around px-10 py-7 items-center sm:fixed sm:right-0 sm:left-0"> */}
      <div className="max-sm:flex max-sm:items-center">
        <img src={logo} alt="logo" className="max-sm:w-12" />
      </div>
      <nav
        className={`sm:flex-1 flex max-sm:justify-center sm:justify-end sm:flex-row max-sm:fixed ${maxSmRightClass} max-sm:duration-100 max-sm:w-64 max-sm:z-20 max-sm:h-screen max-sm:bg-sidebarMenuBg`}
      >
        <div
          className="sm:hidden absolute left-5 top-5 text-white cursor-pointer"
          onClick={onClickToggle}
        >
          <IoMdClose size={"2em"} />
        </div>
        <ul className="flex sm:flex-row max-sm:flex-col sm:space-x-16 max-sm:space-y-10 max-sm:justify-center max-sm:items-center sm:justify-between font-conforter font-bold text-lg max-sm:text-title sm:text-black lg:text-xl xl:text-lg md:text-sm sm:text-xs max-sm:text-xs">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div
        className="sm:hidden relative -right-60 flex items-center"
        onClick={onClickToggle}
      >
        <CgMenuRight size={"1.5em"} />
      </div>
    </header>
  );
}

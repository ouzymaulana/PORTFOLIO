import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { LuLinkedin } from "react-icons/lu";
import { SiGooglemaps } from "react-icons/si";

export default function Footer() {
  const handleOnclickLink = (url) => {
    window.open(url, "_blank");
  };
  return (
    <footer
      className="bg-footerBg  max-sm:h-min bg-cover bg-top object-cover py-10 max-sm:py-3 gap-5"
      id="contact"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-xl max-sm:text-xs font-conforter font-semibold text-title">
          Contact Us
        </h3>
        <h4 className="text-2xl max-sm:text-sm font-conforter text-cream font-semibold text-center">
          Ways To Contact Me
        </h4>
      </div>
      <div className="mt-8 max-sm:mt-2 mb-8 lg:mx-96 xl:mx-14 flex flex-row justify-evenly font-conforter sm:font-semibold max-sm:text-xs xl:text-sm text-white flex-wrap gap-10 max-sm:gap-2 max-sm:px-6">
        <div className="bg-contact bg-opacity-40 p-3 max-sm:p-0.5 flex justify-center items-center gap-4 max-sm:gap-2 rounded-lg cursor-pointer">
          <HiOutlineMail size={"1.8em"} className="max-sm:h-3 max-sm:w-3" />
          <p>ouzymaulana@gmail.com</p>
        </div>
        <div className="bg-contact bg-opacity-40 p-3 max-sm:p-1 flex justify-center items-center gap-4 max-sm:gap-2 rounded-lg cursor-pointer">
          <FaPhone size={"1.5em"} className="m max-sm:h-2 max-sm:w-2" />
          <p>+62 852 6427 0450</p>
        </div>
        <div
          className="bg-contact bg-opacity-40 p-3 max-sm:p-1 flex justify-center items-center gap-4 max-sm:gap-2 rounded-lg cursor-pointer"
          onClick={() => handleOnclickLink("https://github.com/ouzymaulana")}
        >
          <AiFillGithub size={"1.8em"} className="m max-sm:h-3 max-sm:w-3" />
          <p>ouzymaulana</p>
        </div>
        <div
          className="bg-contact bg-opacity-40 p-3 max-sm:p-1 flex justify-center items-center gap-4 max-sm:gap-2 rounded-lg cursor-pointer"
          onClick={() => handleOnclickLink("https://www.instagram.com/ozyy.m/")}
        >
          <SiInstagram size={"1.8em"} className="m max-sm:h-3 max-sm:w-3" />
          <p>ozyy.m</p>
        </div>
        <div
          className="bg-contact bg-opacity-40 p-3 max-sm:p-1 flex justify-center items-center gap-4 max-sm:gap-2 rounded-lg cursor-pointer"
          onClick={() =>
            handleOnclickLink(
              "https://www.linkedin.com/in/ouzy-maulana-2a32b5220/"
            )
          }
        >
          <LuLinkedin size={"1.8em"} className="m max-sm:h-3 max-sm:w-3" />
          <p>ouzymaulana</p>
        </div>
        <div className="bg-contact bg-opacity-40 p-3 max-sm:p-1 flex justify-center items-center gap-4 max-sm:gap-2 rounded-lg cursor-pointer">
          <SiGooglemaps size={"1.8em"} className="m max-sm:h-3 max-sm:w-3" />
          <p>Pondok Aren, Kota Tangerang Selatan, Banten 15226</p>
        </div>
      </div>
      <hr className="bg-portfolioCart border-hrBorder" />
      <div className="text-white flex justify-center items-center max-sm:text-xs mt-1">
        <p>&copy; 2019 Copyright by Ouzy Maulana. All Right Reserved</p>
      </div>
    </footer>
  );
}

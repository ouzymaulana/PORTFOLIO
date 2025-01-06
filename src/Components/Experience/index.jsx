import React from "react";
import "./style.css";

const Experience = () => {
  return (
    <main
      className="bg-main min-h-max flex flex-col items-center py-28 max-sm:py-5 xl:px-10 gap-14 max-sm:gap-6"
      id="portfolio"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-3xl xl:text-xl max-sm:text-base font-conforter font-semibold text-title">
          Experiences
        </h3>
        <h4 className="text-6xl xl:text-4xl max-sm:text-xl max-lg:text-3xl font-conforter font-semibold text-center">
          Milestones of My Career
        </h4>
      </div>
      <div class="text-gray-100 p-6">
        <div class="max-w-4xl mx-auto">
          <div class="mb-8 flex gap-4 career">
            <div class="arrow flex">
              <div class="line flex justify-center items-center bg-portfolioCart">
                <small className="text-gray-500 font-semibold max-sm:text-xs">
                  2024 - Present
                </small>
              </div>
              <div class="point"></div>
            </div>
            <div class="bg-main flex flex-col justify-center items-center gap-2 w-4 mt-3">
              <div className="bg-yellow-500 rounded-full w-3.5 h-4 career-shadow"></div>
              <div
                className="bg-portfolioCart h-full rounded-full"
                style={{ width: "4px" }}
              ></div>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-600 max-sm:text-sm">
                Frontend Developer
              </h3>
              <p class="text-gray-500 max-sm:text-sm">BNI Sekuritas</p>
              <p class="text-sm text-gray-400 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus.
              </p>
            </div>
          </div>
          <div class="mb-8 flex gap-4 career">
            <div class="arrow flex">
              <div class="line flex justify-center items-center bg-portfolioCart">
                <small className="text-gray-500 font-semibold max-sm:text-xs">
                  2023
                </small>
              </div>
              <div class="point"></div>
            </div>
            <div class="bg-main flex flex-col justify-center items-center gap-2 w-4 mt-3">
              <div className="career-shadow bg-yellow-500 rounded-full w-3.5 h-4"></div>
              <div
                className="bg-portfolioCart h-full rounded-full"
                style={{ width: "4px" }}
              ></div>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-600 max-sm:text-sm">
                Frontend Engineer
              </h3>
              <p class="text-gray-500 max-sm:text-sm">
                PT. Solusi Pembayaran Elektronik
              </p>
              <p class="text-sm text-gray-400 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus.
              </p>
            </div>
          </div>
          <div class="mb-8 flex gap-4 career">
            <div class="arrow flex">
              <div class="line flex justify-center items-center bg-portfolioCart">
                <small className="text-gray-500 font-semibold max-sm:text-xs">
                  2021
                </small>
              </div>
              <div class="point"></div>
            </div>
            <div class="bg-main flex flex-col justify-center items-center gap-2 w-4 mt-3">
              <div className="bg-yellow-500 rounded-full w-3.5 h-4 career-shadow"></div>
              <div
                className="bg-portfolioCart h-full rounded-full"
                style={{ width: "4px" }}
              ></div>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-600 max-sm:text-sm">
                Software Engineer
              </h3>
              <p class="text-gray-500 max-sm:text-sm">
                PT. Solusi Pembayaran Elektronik
              </p>
              <p class="text-sm text-gray-400 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Experience;

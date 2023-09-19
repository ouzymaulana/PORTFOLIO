import React from "react";
import profile from "../../assets/img/Vector 1.svg";

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-main sm:h-screen lg:px-40 max-sm:px-10 gap-20 max-sm:gap-3 max-sm:pb-5 flex-wrap max-lg:pt-64 max-sm:pt-0">
      <div className="flex h-1/2 md:h-0.5 justify-center items-center">
        <div className="font-grandStander lg:text-7xl xl:text-5xl 2xl:text-7xl md:text-5xl sm:text-4xl">
          <h1>
            HEY, I'M OUZY <br /> MAULANA <br /> A{" "}
            <span className="sd text-title">FRONTEND ENGINEER</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center align-middle">
        <img
          src={profile}
          alt="PROFILE"
          height={550}
          width={600}
          className="max-sm:h-52 max-sm:w-80 max-lg:h-96 max-lg:w-96 lg:h-96 lg:w-96 2xl:w-[30rem] 2xl:h-[30rem]"
        />
      </div>
    </main>
    //   <main className="flex justify-center items-center bg-main sm:h-screen lg:px-40 max-sm:px-10 lg:gap-20 max-sm:gap-3 max-sm:pb-5 flex-wrap max-lg:pt-64">
    //   <div className="flex lg:h-1/2 max-lg:h-0.5 justify-center items-center">
    //     <div className="font-grandStander lg:text-7xl md:text-5xl sm:text-4xl">
    //       <h1>
    //         HEY, I'M OUZY <br /> MAULANA <br /> A{" "}
    //         <span className="sd text-title">FRONTEND ENGINEER</span>
    //       </h1>
    //     </div>
    //   </div>
    //   <div className="flex justify-center align-middle">
    //     <img
    //       src={profile}
    //       alt="PROFILE"
    //       height={550}
    //       width={600}
    //       className="max-sm:h-52 max-sm:w-80 max-lg:h-96 max-lg:w-96"
    //     />
    //   </div>
    // </main>
  );
}

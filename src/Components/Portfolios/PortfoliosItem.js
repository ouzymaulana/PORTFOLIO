import React from "react";

export default function PortfoliosItem({ item, index }) {
  const handleOnclickCard = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div
      onClick={() => handleOnclickCard(item.url)}
      key={index}
      className="bg-portfolioCart border-4 max-sm:border-2 border-[#535353] h-96 w-[26.5rem] xl:h-80 xl:w-[22rem] max-sm:w-72 max-sm:h-80 rounded-2xl p-3 flex flex-col gap-2 cursor-pointer"
    >
      <div className="h-48 rounded-lg overflow-hidden w-full max-sm:h-32 bg-white">
        <img
          src={item.img}
          alt="gambar"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="text-lg max-sm:text-sm font-semibold">
        <h5>{item.name}</h5>
      </div>
      <div className="text-justify overflow-hidden max-h-28 text-clip max-sm:text-xs1">
        <p>{item.desc}</p>
      </div>
    </div>
  );
}

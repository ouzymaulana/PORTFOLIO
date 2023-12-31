import React from "react";
import wappin3 from "../../assets/img/wappin4.svg";
import foodieOrder from "../../assets/img/foodieOrder.svg";
import uranus from "../../assets/img/uranus-cafe.svg";
import ecommerce from "../../assets/img/e-commerce.svg";
import backendFoodieOrder from "../../assets/img/backend-foodie-order.jpg";
import myBanking from "../../assets/img/my-banking.svg";
import PortfoliosItem from "./PortfoliosItem";
// import wappinImg from "./../../assets/img/IMG_0692.jpg";

export default function Portfolios() {
  const portfoliosData = [
    {
      name: "WAPPIN LANDING-PAGE",
      url: "https://github.com/ouzymaulana/web_wappin",
      img: wappin3,
      desc: "This landing page application was created to strengthen my knowledge of fundamentals as frontend developer, here I learn the basics of CSS, HTML, Javascript, Dom, CSS Flexbox, responsive websites. I worked on this project before I entered the ReactJS and NextJS frameworks.",
    },
    {
      name: "URANUS CAFE",
      url: "https://github.com/ouzymaulana/uranus-cafe",
      img: uranus,
      desc: "This is a food ordering application, the application uses the ReactJS framework, in this application I implemented the creation and use of a component, use of react hooks, react router, state management(context).",
    },
    {
      name: "E-COMMERCE",
      url: "https://github.com/ouzymaulana/todo-list",
      img: ecommerce,
      desc: "I built this application using the nextjs framework which implements state management (redux & redux toolkit) and manipulates data when there are changes to the quantity.",
    },
    {
      name: "FOODIE ORDER",
      url: "https://github.com/ouzymaulana/foodie-order",
      img: foodieOrder,
      desc: "This is a food ordering application that uses the NextJs framework as the frontend and ExpressJs for the backend, implements Restful API, Axios, Redux, Material UI, Formik and implements JWT for data security.",
    },
    {
      name: "FOODIE ORDER BACKEND",
      url: "https://github.com/ouzymaulana/pemesanan_makanan",
      img: backendFoodieOrder,
      desc: "Using the ExpressJs framework to back up the foodie order application using MySql for data storage, implementing JWT jsonwebtoken for data security.",
    },
    {
      name: "My-Banking",
      url: "https://github.com/ouzymaulana/my-banking",
      img: myBanking,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ",
    },
  ];
  return (
    <main
      className="min-h-max bg-card flex flex-col items-center py-28 max-sm:py-5 max-xl:px-40 xl:px-10 max-sm:px-20 gap-14 max-sm:gap-6"
      id="portfolio"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-3xl xl:text-xl max-sm:text-base font-conforter font-semibold text-title">
          Portfolios
        </h3>
        <h4 className="text-6xl xl:text-4xl max-sm:text-xl max-lg:text-3xl font-conforter font-semibold text-center">
          My Masterpiece Collection
        </h4>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-20 xl:gap-8 max-sm:gap-6 font-conforter">
        <>
          {portfoliosData.map((item, i) => (
            <PortfoliosItem item={item} index={i} />
            // <div
            //   key={i}
            //   className={`sm:border-4 max-sm:border-2 border-[#535353] h-96 w-80 max-sm:w-64 max-sm:h-60 rounded-xl flex gap-4 items-center overflow-hidden cursor-pointer ${item.img} bg-wappin bg-cover`}
            // >
            //   <div className="bg-portfolioCart h-full w-full opacity-50">
            //     <div>{item.name}</div>
            //   </div>
            // </div>
          ))}
        </>
      </div>
    </main>
  );
}

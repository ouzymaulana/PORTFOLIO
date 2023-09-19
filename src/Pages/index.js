import React from "react";
import Header from "../Components/Header";
import Home from "../Components/Home";
import Skills from "../Components/Skills";
import Services from "../Components/Services";
import Portfolios from "../Components/Portfolios";
import Footer from "../Components/Footer";

export default function Main() {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Services />
      <Portfolios />
      <Footer />
    </>
  );
}

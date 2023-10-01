import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import footerBG from '../assets/BannerSection/Background-Overlay (2).png';
import Header from "../pages/Shared/Header";

const Main = () => {
  return (
    <div>
     <Header></Header>
      <Outlet></Outlet>
      <div className="relative">
        <img className="hidden md:block absolute bottom-1 md:right-16" src={footerBG} alt="" />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
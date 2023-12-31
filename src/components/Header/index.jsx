import React from "react";
// components
import { WorkingTime } from "./workingTime";
// styles
import "./style.css";
// images
import Banner from "../../assets/bannerPizza/bannerPizza.jpg";
import QR from "../../assets/bg-header/qr-code.png";

export const Header = () => {
  return (
    <header>
      <div className="container">
        {/* title */}
        <span className="title">
          <h1 style={{ color: "#f0ece5" }}>fast pizza go</h1>
        </span>

        {/* banner */}
        <div className="header-banner">
          <div className="wrapperFlex">
            <span className="text">
              <WorkingTime />
            </span>
            <img src={Banner} alt="banner-header" className="banner-img" />
          </div>
        </div>

        {/* qr-code */}
        <div className="wrapper-qrCode">
          <img src={QR} alt="qr" className="img-qrCode" />
        </div>
      </div>
    </header>
  );
};

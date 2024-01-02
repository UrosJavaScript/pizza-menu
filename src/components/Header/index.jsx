import React from "react";
import { useTranslation } from "react-i18next";
// components
import { WorkingTime } from "./workingTime";
// styles
import "./style.css";
// images
import Banner from "../../assets/bannerPizza/bannerPizza.jpg";
import QR from "../../assets/bg-header/qr-code.png";

export const Header = () => {
  const { t } = useTranslation();
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  return (
    <header>
      <div className="container">
        {/* title */}
        <span className="title">
          <h1 style={{ color: "#f0ece5" }}>{t("headerTitle")}</h1>
        </span>

        {/* banner */}
        <div className="header-banner">
          <div className="wrapperFlex">
            <span className="text">
              <WorkingTime
                hour={hour}
                openHour={openHour}
                closeHour={closeHour}
              />
            </span>
            <img src={Banner} alt="banner-header" className="banner-img" />

            <span className="work-times-number">
              {openHour}:00 - {closeHour}:00
            </span>
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

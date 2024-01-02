/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useTranslation } from "react-i18next";
// helper
import { PIZZA_DATA } from "../../helper";
// components
import Pizza from "./pizza";
// styles
import "./style.css";

export const Menu = () => {
  const { t } = useTranslation();
  return (
    <>
      <main className="container">
        <div className="wrapper-title">
          <h2>{t("menuTitle")}</h2>
        </div>

        <div className="wrapper-menu">
          {PIZZA_DATA.map((item) => {
            return <Pizza props={item} key={item.id} />;
          })}
        </div>
      </main>
    </>
  );
};

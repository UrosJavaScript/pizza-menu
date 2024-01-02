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
  const pizzas = PIZZA_DATA;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <>
      <main className="container">
        <div className="wrapper-title">
          <h2>{t("menuTitle")}</h2>
        </div>

        {numPizzas > 0 ? (
          <div className="wrapper-menu">
            {pizzas.map((item) => (
              <Pizza pizzaObj={item} key={item.id} />
            ))}
          </div>
        ) : (
          <p className="no-pizza">{t("noPizza")}🤠</p>
        )}
      </main>
    </>
  );
};

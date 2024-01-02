import React from "react";
import { useTranslation } from "react-i18next";
// styles
import "./style.css";

const Pizza = ({ pizzaObj }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="wrapper-pizza">
        <img src={pizzaObj.photoName} alt="pizza" className="img-pizza" />
        <span className="pizza-price">{pizzaObj.price}</span>
        <span className="pizza-soldout">
          {pizzaObj.soldOut ? t("soldOut") : <></>}
        </span>
        <div className="pizza-description">
          <span className={`pizza-name ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            {pizzaObj.name}
          </span>
          <span className="pizza-ingredients">{pizzaObj.ingredients}</span>
        </div>
      </div>
    </>
  );
};

export default Pizza;

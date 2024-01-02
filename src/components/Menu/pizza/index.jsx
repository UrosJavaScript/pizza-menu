import React from "react";
// styles
import "./style.css";

const Pizza = ({ props }) => {
  return (
    <>
      <div className="wrapper-pizza">
        <img src={props.photoName} alt="pizza" className="img-pizza" />
        <span className="pizza-price">{props.price}</span>
        <div className="pizza-description">
          <span className="pizza-name">{props.name}</span>
          <span className="pizza-ingredients">{props.ingredients}</span>
        </div>
      </div>
    </>
  );
};

export default Pizza;

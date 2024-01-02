/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { PIZZA_DATA } from "../../helper";
// components
import Pizza from "./pizza";
// styles
import "./style.css";

export const Menu = () => {
  return (
    <>
      <main className="container">
        <div className="wrapper-title">
          <h2>Our Menu</h2>
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

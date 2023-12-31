/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// import { PIZZA_DATA } from "../../helper";
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

        <Pizza props={"PIZZAAAAA + 44444444"} />
        <Pizza props={"wwwwwwwwwwww"} />
      </main>
    </>
  );

  // return (
  //   <div>
  //     {PIZZA_DATA.map((item) => {
  //       return (
  //         <div key={item.id}>
  //           <span>{item.name}</span>
  //           <img src={item.photoName} alt="image" style={{ height: "100px" }} />
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
};

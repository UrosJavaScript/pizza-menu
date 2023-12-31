import React from "react";
// styles
import "./style.css";

const Pizza = ({ props }) => {
  return (
    <>
      <div className="wrapper-pizza">{props}</div>
    </>
  );
};

export default Pizza;

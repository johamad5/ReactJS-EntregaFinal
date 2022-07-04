import "./colorBtn.css";
import React from "react";

const StylishButton = (props) => {
  return (
    <button className={props.color} onClick={props.func}>
      <p>{props.text}</p>
    </button>
  );
};

export default StylishButton;

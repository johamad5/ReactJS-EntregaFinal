import "./colorBtn.css";
import React from "react";

const StylishButton = (props = "button") => {
  return (
    <button className={props.color} onClick={props.func} type={props.tipo}>
      <p>{props.text}</p>
    </button>
  );
};

export default StylishButton;

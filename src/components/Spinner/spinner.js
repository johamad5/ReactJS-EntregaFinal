import React from "react";
import { SpinnerCircularSplit } from "spinners-react";

const Spinner = (props) => {
  return (
    <>
      <SpinnerCircularSplit
        size={85}
        thickness={60}
        speed={130}
        color="rgba(255, 118, 118, 1)"
        secondaryColor="rgba(217, 217, 217, 1)"
      />
      <p>{props.text}</p>
    </>
  );
};
export default Spinner;

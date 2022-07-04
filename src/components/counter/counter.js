import React, { useState } from "react";
import "./counter.css";
import StylishButton from "../buttons/stylishButton";

const Counter = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const decrement = () => {
    quantity > 0 && setQuantity((value) => value - 1);
  };

  const increment = () => {
    quantity < stock && setQuantity(quantity + 1);
  };

  return (
    <div className="counter">
      <div className="controls">
        <StylishButton color="transparent" text="-" func={decrement} />
        <h3>{quantity}</h3>
        <StylishButton color="transparent" text="+" func={increment} />
      </div>

      <StylishButton
        color="colorful"
        text="Agregar al carrito"
        func={() => {
          onAdd(quantity);
        }}
      />
    </div>
  );
};

export default Counter;

import React, { useState } from "react";
import "./counter.css";

const Counter = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    quantity > 0 && setQuantity((value) => value - 1);
  };

  const increment = () => {
    quantity < stock && setQuantity(quantity + 1);
  };

  return (
    <div className="counter">
      <div className="controls">
        <button className="btnControls" onClick={decrement}>
          -
        </button>
        <h3>{quantity}</h3>
        <button className="btnControls" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Counter;

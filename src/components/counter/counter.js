import React, { useState } from "react";
import "./counter.css";

const Counter = ({ stock = 0, inicial = 1, onAdd }) => {
  const [unidades, setCantidad] = useState(inicial);

  const decrement = () => {
    if (unidades > 1) {
      setCantidad(unidades - 1);
    }
  };

  const increment = () => {
    if (unidades < stock) {
      setCantidad(unidades + 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls d-flex">
        <button className="Button" onClick={decrement}>
          -
        </button>
        <h4 className="Number">{unidades}</h4>
        <button className="Button" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button className="Button" onClick={() => onAdd(unidades)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Counter;

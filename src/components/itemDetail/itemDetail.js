import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import "./itemDetail.css";
import Counter from "../counter/counter";
import CartContext from "../cartContext/cartContext";

const ItemDetail = ({ nombre, descripcion, img, precio, stock }) => {
  const { addItem } = useContext(CartContext);

  const [aggregateUnits, setAggregateUnits] = useState(0);

  const handleOnAdd = (unidades) => {
    console.log(`se agregaron ${unidades} ${nombre}`);

    addItem({ img, nombre, unidades, precio });

    setAggregateUnits(unidades);
  };

  return (
    <>
      <h1>{nombre}</h1>
      <img src={`../${img}`} alt="product image" className="imgDetail" />
      <h4>{descripcion}</h4>
      <p>$ {precio}</p>

      {aggregateUnits === 0 ? (
        <Counter stock={stock} onAdd={handleOnAdd} />
      ) : (
        <Link to="/cart"> Ver carrito </Link>
      )}
    </>
  );
};

export default ItemDetail;

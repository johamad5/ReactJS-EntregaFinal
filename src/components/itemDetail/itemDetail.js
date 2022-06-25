import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import "./itemDetail.css";
import Counter from "../counter/counter";
import CartContext from "../cartContext/cartContext";

const ItemDetail = ({ id, nombre, descripcion, img, precio, stock }) => {
  const { addItem } = useContext(CartContext);
  const [aggregateUnits, setAggregateUnits] = useState(0);

  const handleOnAdd = (quantity) => {
    console.log(
      `se agregaron ${quantity} de ${nombre} con identificador ${id}`
    );
    addItem({ id, img, nombre, quantity, precio });
    setAggregateUnits(quantity);
  };

  return (
    <>
      <h1>{nombre}</h1>
      <img src={img} alt="product" className="imgDetail" />
      <h4>{descripcion}</h4>
      <p>$ {precio}</p>

      {aggregateUnits === 0 ? (
        <Counter stock={stock} initial={0} onAdd={handleOnAdd} />
      ) : (
        <Link to="/cart"> Ver carrito </Link>
      )}
    </>
  );
};

export default ItemDetail;

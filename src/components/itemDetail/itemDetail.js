import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import "./itemDetail.css";
import Counter from "../counter/counter";
import CartContext from "../cartContext/cartContext";

const ItemDetail = ({ id, nombre, descripcion, img, precio, stock }) => {
  const { addItem } = useContext(CartContext);
  const [aggregateUnits, setAggregateUnits] = useState(0);

  const handleOnAdd = (quantity) => {
    addItem({ id, img, nombre, quantity, precio });
    setAggregateUnits(quantity);
  };

  return (
    <div className="container">
      <div className="detailSection">
        <h1 className="name">{nombre}</h1>
        <img className="imgProduct" src={img} alt="product" />
        <h4 className="description">{descripcion}</h4>
        <p className="price">$ {precio}</p>

        <span className="btnOption">
          {aggregateUnits === 0 ? (
            <Counter stock={stock} onAdd={handleOnAdd} />
          ) : (
            <>
              <Link to="/cart">
                <span className="transparent">Ver carrito </span>
              </Link>
              <Link to="/">
                <span className="transparent">Seguir comprando </span>
              </Link>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default ItemDetail;

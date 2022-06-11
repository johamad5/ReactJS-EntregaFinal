import React, { Fragment } from "react";
import "./itemDetail.css";

const ItemDetail = ({ nombre, descripcion, img, precio }) => {
  return (
    <Fragment>
      <h1>{nombre}</h1>
      <img src={`../${img}`} alt="product image" className="imgDetail" />
      <h4>{descripcion}</h4>
      <p>$ {precio}</p>
      <button
        onClick={() => {
          console.log("Comprar");
        }}
      >
        Comprar
      </button>
    </Fragment>
  );
};

export default ItemDetail;

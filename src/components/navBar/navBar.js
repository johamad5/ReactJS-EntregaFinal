import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./navBar.css";
import CartWidget from "../cartWidget/cartWidget";
import CartContext from "../cartContext/cartContext";

const NavBar = () => {
  const { unidades } = useContext(CartContext);

  return (
    <nav>
      <CartWidget />
      <Link to="/">Home</Link>
      <Link to="/category/Tortas">Tortas</Link>
      <Link to="/category/Alfajores">Alfajores</Link>
      <Link to="/category/DesayunosMeriendas">Desayunos y meriendas</Link>
      <Link to="/category/Varios">Varios</Link>
      <div className="d-flex">
        <i className="bi bi-bag-heart">{unidades}</i>
      </div>
    </nav>
  );
};

export default NavBar;

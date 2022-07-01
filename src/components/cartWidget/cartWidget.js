import { useContext } from "react";
import CartContext from "../cartContext/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { unidades } = useContext(CartContext);

  const totalCart = unidades;
  if (totalCart === 0) {
    return (
      <Link to="/cart">
        <img src="https://i.imgur.com/IuFGooX.png" alt="Carrito de compras" />
      </Link>
    );
  }

  return (
    <Link to="/cart">
      <img src="https://i.imgur.com/IuFGooX.png" alt="Carrito de compras" />
      {totalCart}
    </Link>
  );
};

export default CartWidget;

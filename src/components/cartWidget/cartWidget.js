import { useContext } from "react";
import CartContext from "../cartContext/cartContext";

const CartWidget = () => {
  const { unidades } = useContext(CartContext);

  const totalCart = unidades;

  return (
    <>
      <img src="https://i.imgur.com/IuFGooX.png" alt="Carrito de compras" />
      {totalCart}
    </>
  );
};

export default CartWidget;

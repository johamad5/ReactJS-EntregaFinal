import { useContext } from "react";
import { Link } from "react-router-dom";
import "./cartContainer.css";
import CartContext from "../cartContext/cartContext";
import CartContainerList from "../cartContainerList/cartContainerList";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  const { deleteCart } = useContext(CartContext);

  if (cart.length < 1) {
    return (
      <>
        <h2>El carrito de compras esta vacio</h2>
        <Link className="btnCC" to="/">
          Ir a comprar
        </Link>
      </>
    );
  }

  return (
    <>
      <CartContainerList cart={cart} />
      <button
        className="btnCC"
        onClick={() => {
          console.log("Finalizar compra");
        }}
      >
        Finalizar compra
      </button>
      <button className="btnCC" onClick={deleteCart}>
        Vaciar carrito
      </button>
      <Link className="btnCC" to="/">
        Seguir comprando
      </Link>
    </>
  );
};

export default CartContainer;

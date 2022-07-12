import { useContext } from "react";
import { Link } from "react-router-dom";
import "./cartContainer.css";
import CartContext from "../cartContext/cartContext";
import StylishButton from "../buttons/stylishButton";
import CartContainerList from "../cartContainerList/cartContainerList";

const CartContainer = () => {
  const { cart, deleteCart, totalCartValue } = useContext(CartContext);

  let total = totalCartValue();

  if (cart.length < 1) {
    return (
      <>
        <h2>El carrito de compras esta vacio</h2>
        <Link className="colorful" to="/">
          Ir a comprar
        </Link>
      </>
    );
  }

  return (
    <>
      <CartContainerList cart={cart} />
      <h3>Total: $ {total}</h3>
      <div>
        <StylishButton
          color="transparent"
          text="Vaciar carrito"
          func={deleteCart}
        />
      </div>
      <div className="options">
        <Link className="colorful" to="/">
          Seguir comprando
        </Link>
        <Link className="colorful" to="/checkout">
          Finalizar compra
        </Link>
      </div>
    </>
  );
};

export default CartContainer;

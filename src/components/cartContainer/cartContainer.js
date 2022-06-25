import { useContext } from "react";
import "./cartContainer.css";
import CartContext from "../cartContext/cartContext";
import CartContainerList from "../cartContainerList/cartContainerList";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  const { deleteCart } = useContext(CartContext);

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
        {" "}
        Vaciar carrito{" "}
      </button>
    </>
  );
};

export default CartContainer;

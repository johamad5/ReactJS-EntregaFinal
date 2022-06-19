import { useContext } from "react";
import "./cartContainer.css";
import CartContext from "../cartContext/cartContext";
import CartContainerList from "../cartContainerList/cartContainerList";

const CartContainer = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <CartContainerList cart={cart} />
      <button
        onClick={() => {
          console.log("Finalizar compra");
        }}
      >
        Finalizar compra
      </button>
    </>
  );
};

export default CartContainer;

import { useContext } from "react";
import "./cart.css";
import cartContext from "../cartContext/cartContext";
import StylishButton from "../buttons/stylishButton";

const Cart = ({ id, nombre, precio, quantity }) => {
  const subTotal = precio * quantity;
  const { deleteItem } = useContext(cartContext);

  const deleteOne = () => {
    deleteItem(id);
  };

  return (
    <div className="cartCard">
      <p>{nombre}</p>
      <p>X {quantity}</p>
      <p> ${subTotal}</p>
      <StylishButton color="transparent" text="Quitar" func={deleteOne} />
    </div>
  );
};

export default Cart;

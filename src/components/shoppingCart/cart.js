import { useContext } from "react";
import "./cart.css";
import cartContext from "../cartContext/cartContext";
import StylishButton from "../buttons/stylishButton";

const Cart = ({ id, nombre, precio, quantity }) => {
  const subTotal = precio * quantity;
  const { deleteItem, lessUnits } = useContext(cartContext);

  const deleteOne = () => {
    deleteItem(id);
  };

  const less = () => {
    lessUnits(id);
  };

  return (
    <div className="cartCard">
      <p>{nombre}</p>
      <p>X {quantity}</p>
      <p> ${subTotal}</p>
      <StylishButton color="transparent" text="Quitar" func={deleteOne} />
      <StylishButton color="transparent" text="-" func={less} />
    </div>
  );
};

export default Cart;

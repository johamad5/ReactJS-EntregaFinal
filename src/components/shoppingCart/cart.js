import { useContext } from "react";
import cartContext from "../cartContext/cartContext";

const Cart = ({ id, nombre, precio, quantity }) => {
  const subTotal = precio * quantity;
  const { deleteItem } = useContext(cartContext);

  const deleteOne = () => {
    deleteItem(id);
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>X {quantity}</td>
      <td> ${subTotal}</td>
      <button onClick={deleteOne}>Quitar</button>
    </tr>
  );
};

export default Cart;

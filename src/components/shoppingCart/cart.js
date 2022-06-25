import { useContext } from "react";
import cartContext from "../cartContext/cartContext";

const Cart = ({ id, img, nombre, unidades, precio }) => {
  const subTotal = precio * unidades;
  const { deleteItem } = useContext(cartContext);

  const deleteOne = () => {
    deleteItem(id);
  };

  return (
    <tr>
      <th scope="row">
        <img src={img} alt={id} />
      </th>
      <td>{nombre}</td>
      <td>X {unidades}</td>
      <td> ${subTotal}</td>
      <button onClick={deleteOne}>Quitar</button>
    </tr>
  );
};

export default Cart;

import "./cartContainerList.css";
import Cart from "../shoppingCart/cart";

const CartContainerList = ({ cart }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Unidades</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((art) => (
          <Cart key={art.id} {...art} />
        ))}
      </tbody>
    </table>
  );
};

export default CartContainerList;

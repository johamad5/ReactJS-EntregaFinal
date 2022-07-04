import Cart from "../shoppingCart/cart";

const CartContainerList = ({ cart }) => {
  return (
    <div className="container">
      {cart.map((art) => (
        <Cart key={art.id} {...art} />
      ))}
    </div>
  );
};

export default CartContainerList;

import Cart from "../shoppingCart/cart";

const CartContainerList = ({ cart }) => {
  return (
    <>
      {cart.map((art) => (
        <Cart key={art.id} {...art} />
      ))}
    </>
  );
};

export default CartContainerList;

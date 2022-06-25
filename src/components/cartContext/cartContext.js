import { useState, useEffect, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [unidades, setUnidades] = useState(0);

  const addItem = (addProduc) => {
    if (!cart.some((art) => art.id === addProduc.id)) {
      setCart([...cart, addProduc]);
    }
  };

  const deleteItem = (id) => {
    const cartProducts = cart.filter((product) => product.id !== id);
    setCart(cartProducts);
  };

  const deleteCart = () => {
    const cartProducts = [];
    setCart(cartProducts);
  };

  useEffect(() => {
    let unidades = 0;
    cart.forEach((art) => {
      unidades += art.unidades;
    });
    setUnidades(unidades);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addItem, deleteItem, deleteCart, unidades }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

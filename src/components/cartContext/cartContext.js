import { useState, useEffect, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    let unidades = 0;
    cart.forEach((articulo) => {
      unidades += articulo.unidades;
    });
    setUnidades(unidades);
  }, [cart]);

  const addItem = (addProduc) => {
    if (!cart.some((articulo) => articulo.id === addProduc.id)) {
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

  return (
    <CartContext.Provider
      value={{ cart, addItem, deleteItem, deleteCart, unidades }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

import { useState, useEffect, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [unidades, setUnidades] = useState(0);

  const addItem = (addProduc) => {
    if (!cart.some((art) => art.id === addProduc.id)) {
      setCart([...cart, addProduc]);
    } else {
      const artic = cart.find((art) => art.id === addProduc.id);
      artic.quantity = artic.quantity + addProduc.quantity;
      setCart([...cart]);
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
      unidades += art.quantity;
    });
    setUnidades(unidades);
  }, [cart]);

  const totalCartValue = () => {
    let totalValue = 0;
    cart.forEach((art) => {
      totalValue += art.quantity * art.precio;
    });
    return totalValue;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        deleteItem,
        deleteCart,
        unidades,
        totalCartValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

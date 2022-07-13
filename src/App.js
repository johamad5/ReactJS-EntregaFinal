import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import { CartProvider } from "./components/cartContext/cartContext";
import CartContainer from "./components/cartContainer/cartContainer";
import Checkout from "./components/checkout/checkout";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

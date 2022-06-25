import { Link } from "react-router-dom";
import "./navBar.css";
import CartWidget from "../cartWidget/cartWidget";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img src="https://i.imgur.com/iLPQgYl.png" alt="Company logo" />
      </Link>
      <Link to="/category/Tortas">Tortas</Link>
      <Link to="/category/Alfajores">Alfajores</Link>
      <Link to="/category/DesayunosMeriendas">Desayunos y meriendas</Link>
      <Link to="/category/Varios">Varios</Link>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

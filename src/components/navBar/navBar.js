import "./navBar.css";
import CartWidget from "../cartWidget/cartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <CartWidget />
      <Link to="/">Home</Link>
      <Link to="/category/Tortas">Tortas</Link>
      <Link to="/category/Alfajores">Alfajores</Link>
      <Link to="/category/DesayunosMeriendas">Desayunos y meriendas</Link>
      <Link to="/category/Varios">Varios</Link>
    </nav>
  );
};

export default NavBar;

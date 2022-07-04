import { Link, NavLink } from "react-router-dom";
import "./navBar.css";
import CartWidget from "../cartWidget/cartWidget";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img
          className="imge"
          src="https://firebasestorage.googleapis.com/v0/b/proyectofinal-reactjs-32aed.appspot.com/o/miliLogo.png?alt=media&token=7652c8ba-b105-4b6f-811d-f7e074ff7e68"
          alt="Company logo"
        />
      </Link>
      <NavLink to="/category/Tortas" activeClassName="active">
        TORTAS
      </NavLink>
      <NavLink to="/category/Alfajores" activeClassName="active">
        ALFAJORES
      </NavLink>
      <NavLink to="/category/DesayunosMeriendas" activeClassName="active">
        DESAYUNOS Y MERIENDAS
      </NavLink>
      <NavLink to="/category/Varios" activeClassName="active">
        VARIOS
      </NavLink>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

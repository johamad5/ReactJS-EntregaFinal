import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ id, nombre, img }) => {
  return (
    <div className="card">
      <div className="cardBody">
        <div className="cardImg">
          <h3 className="cardTitle">{nombre}</h3>
          <img src={img} alt="product" />
        </div>
        <Link to={`/detail/${id}`}>
          <p className="colorful">Ver detalle</p>
        </Link>
      </div>
    </div>
  );
};

export default Item;

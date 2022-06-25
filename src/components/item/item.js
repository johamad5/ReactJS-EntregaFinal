import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ id, nombre, img }) => {
  return (
    <div className="card">
      <div className="cardBody">
        <h3 className="cardTitle">{nombre}</h3>
        <div className="cardImg">
          <img src={img} alt="product image" />
        </div>
        <Link to={`/detail/${id}`}>
          <p className="detail">Ver detalle</p>
        </Link>
      </div>
    </div>
  );
};

export default Item;

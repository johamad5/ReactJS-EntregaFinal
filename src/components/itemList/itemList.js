import "./itemList.css";
import Item from "../item/item";

const ItemList = ({ products }) => {
  return (
    <div className="itemList">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemList;

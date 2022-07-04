import { useParams } from "react-router-dom";
import "./itemListContainer.css";
import ItemList from "../itemList/itemList";
import { SpinnerCircularSplit } from "spinners-react";
import { getProducts } from "../../services/firebase/firestore";
import { useAsync } from "../hooks/useAsync";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { error, data, loading } = useAsync(
    () => getProducts(categoryId),
    [categoryId]
  );

  if (loading) {
    return (
      <SpinnerCircularSplit
        size={85}
        thickness={61}
        speed={137}
        color="rgba(243, 120, 12, 1)"
        secondaryColor="rgba(217, 217, 217, 1)"
      />
    );
  }

  if (error) {
    return <h3>Hubo un error</h3>;
  }

  return (
    <div className="container">
      <h1>Ricco pastelería</h1>
      {data.length > 0 ? (
        <ItemList products={data} />
      ) : (
        <div>
          <h3>No tenemos productos disponibles por el momento :/</h3>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";
import { getProducts, getProductsByCategory } from "../productCatalog";
import ItemList from "../itemList/itemList";

const ItemListContainer = () => {
  const [products, setProductos] = useState([]);
  const [loading, setLoagind] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoagind(true);

    if (!categoryId) {
      getProducts()
        .then((res) => {
          setProductos(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoagind(false);
        });
    } else {
      getProductsByCategory(categoryId)
        .then((res) => {
          setProductos(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoagind(false);
        });
    }
  }, [categoryId]);

  if (loading) {
    return <h1> Cargando...</h1>;
  }

  return (
    <>
      <h1>Ricco pasteleria.</h1>

      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <h3>No tenemos productos disponibles por el momento :/</h3>
      )}
    </>
  );
};

export default ItemListContainer;

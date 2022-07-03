import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";
import ItemList from "../itemList/itemList";
import { getDocs, collection, query, where } from "firebase/firestore";
import { ddbb } from "../../services/firebase";
import { SpinnerCircularSplit } from "spinners-react";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const productCollection = categoryId
      ? query(
          collection(ddbb, "products"),
          where("categoria", "==", categoryId)
        )
      : collection(ddbb, "products");

    getDocs(productCollection)
      .then((resp) => {
        const productsFirabase = resp.docs.map((elements) => {
          return { id: elements.id, ...elements.data() };
        });
        setProducts(productsFirabase);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

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

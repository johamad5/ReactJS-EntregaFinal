import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail";
import { ddbb } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";
import Spinner from "../Spinner/spinner";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const docRef = doc(ddbb, "products", productId);
    getDoc(docRef)
      .then((doc) => {
        const specificProduct = { id: doc.id, ...doc.data() };
        setProduct(specificProduct);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <Spinner text="cargando..." />;
  }

  return (
    <>
      <ItemDetail {...product} />
    </>
  );
};

export default ItemDetailContainer;

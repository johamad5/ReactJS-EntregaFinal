import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail";
import { ddbb } from "../../services/firabase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    const docRef = doc(ddbb, "products", productId);
    getDoc(docRef).then((doc) => {
      const specificProduct = { id: doc.id, ...doc.data() };
      setProduct(specificProduct);
    });
  }, [productId]);

  return (
    <>
      <ItemDetail {...product} />
    </>
  );
};

export default ItemDetailContainer;

import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../productCatalog";
import ItemDetail from "../itemDetail/itemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    getProductsById(productId).then((response) => {
      setProduct(response);
    });
  }, []);

  return (
    <Fragment>
      <ItemDetail {...product} />
    </Fragment>
  );
};

export default ItemDetailContainer;

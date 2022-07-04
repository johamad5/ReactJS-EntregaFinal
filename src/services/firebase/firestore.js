import { getDocs, collection, query, where } from "firebase/firestore";
import { ddbb } from ".";
import { adaptingNames } from "../../components/adapters/productAdapter";

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const productCollection = categoryId
      ? query(
          collection(ddbb, "products"),
          where("categoria", "==", categoryId)
        )
      : collection(ddbb, "products");

    getDocs(productCollection)
      .then((resp) => {
        const databaseProducts = resp.docs.map((elements) => {
          return adaptingNames(elements);
        });
        resolve(databaseProducts);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

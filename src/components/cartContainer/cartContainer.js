import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./cartContainer.css";
import CartContext from "../cartContext/cartContext";
import StylishButton from "../buttons/stylishButton";
import CartContainerList from "../cartContainerList/cartContainerList";
import {
  addDoc,
  collection,
  writeBatch,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { ddbb } from "../../services/firebase";

const CartContainer = () => {
  const [loading, setLoading] = useState(false);
  const { cart, deleteCart, totalCartValue } = useContext(CartContext);

  let total = totalCartValue();

  if (cart.length < 1) {
    return (
      <>
        <h2>El carrito de compras esta vacio</h2>
        <Link className="btnCC" to="/">
          Ir a comprar
        </Link>
      </>
    );
  }

  const purchaseProducts = () => {
    setLoading(true);

    let fecha = new Date();
    const order = {
      // Utilizar form para los datos de los campos
      customer: {
        nombre: "Johana Madero",
        telefono: "099123456",
        email: "johana.madero@gmail.com",
        direcion: "miCasa 123",
      },
      fecha: fecha,
      customerCart: cart,
      total: total,
    };

    const batch = writeBatch(ddbb);
    const ids = cart.map((art) => art.id);
    const collectionRef = collection(ddbb, "products");
    const outOfStock = [];

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((resp) => {
        resp.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const product = cart.find((prod) => prod.id === doc.id);
          const prodQuantity = product.quantity;

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(ddbb, "orders");
          console.log(`orden OK`);
          return addDoc(collectionRef, order);
        } else {
          return Promise.reject({ type: "out_of_stock", products: outOfStock });
        }
      })
      .then(({ id }) => {
        batch.commit();
        deleteCart();
        console.log(`Su orden se genero correctamente, su ID es ${id}`);
      })
      .catch((error) => {
        if (error.type === "out_of_stock") {
          console.log("Algunos productos del carrito no poseen stock");
        } else {
          console.log(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    <h2>Se esta generando la orden</h2>;
  }

  return (
    <>
      <CartContainerList cart={cart} />
      <h3>Total: $ {total}</h3>
      <div className="options">
        <StylishButton
          color="transparent"
          text="Finalizar compra"
          func={purchaseProducts}
        />
        <StylishButton
          color="transparent"
          text="Vaciar carrito"
          func={deleteCart}
        />
      </div>
      <Link className="colorful" to="/">
        Seguir comprando
      </Link>
    </>
  );
};

export default CartContainer;

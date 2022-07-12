/*import React, { useContext, useState } from "react";
import CartContext from "../cartContext/cartContext";
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

const Checkout2 = () => {
  const { cart, deleteCart, totalCartValue } = useContext(CartContext);
  const total = totalCartValue();
  const [compraId, setCompraId] = useState("");

  const [clientData, setClientData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setClientData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let fecha = new Date();

    const Order = {
      customer: {
        nombre: clientData.nombre,
        apellido: clientData.apellido,
        telefono: clientData.telefono,
        email: clientData.email,
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

          return addDoc(collectionRef, Order);
        } else {
          return Promise.reject({ type: "out_of_stock", products: outOfStock });
        }
      })
      .then(({ id }) => {
        batch.commit();
        setCompraId(id);
        deleteCart();
      })
      .catch((error) => {
        if (error.type === " out_of_stock") {
          <div>
            <h2>Lo sentimos, hay productos fuera de stock</h2>
          </div>;
        } else {
          console.log(error);
        }
      });
  };

  return (
    <>
      {cart.length !== 0 ? (
        <div className="containerFormulario">
          <form onSubmit={handleSubmit} className="form">
            <label>Ingresa tu nombre: </label>
            <input
              type="text"
              name="nombre"
              value={clientData.nombre || ""}
              onChange={handleChange}
              className="inputForm"
            />

            <label>Ingresa tu apellido: </label>
            <input
              type="text"
              name="apellido"
              value={clientData.apellido || ""}
              onChange={handleChange}
              className="inputForm"
            />

            <label>Ingresa tu telefono:</label>
            <input
              type="number"
              name="telefono"
              value={clientData.direccion || ""}
              onChange={handleChange}
              className="inputForm"
            />

            <label>Ingresa tu email: </label>
            <input
              type="text"
              name="email"
              value={clientData.email || ""}
              onChange={handleChange}
              className="inputForm"
            />

            <div className="botoncheckout">
              <button>comprar</button>
            </div>
          </form>
        </div>
      ) : (
        <div className="compraexitosa">
          <h2> Compra exitosa!</h2>
          <h3>Tu numero de pedido es # {compraId} </h3>
        </div>
      )}
    </>
  );
};

export default Checkout2;
*/

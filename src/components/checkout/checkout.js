import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import StylishButton from "../buttons/stylishButton";
import Spinner from "../Spinner/spinner";
import CartContext from "../cartContext/cartContext";
import "./checkout.css";
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

const Checkout = () => {
  const { cart, deleteCart, totalCartValue } = useContext(CartContext);
  let total = totalCartValue();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const purchaseProducts = (thisOrder) => {
    setLoading(true);

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
          return addDoc(collectionRef, thisOrder);
        } else {
          return Promise.reject({ type: "out_of_stock", products: outOfStock });
        }
      })
      .then(({ id }) => {
        batch.commit();
        deleteCart();
        setLoading(false);
        console.log(`Su orden se genero correctamente, su ID es ${id}`);

        setTimeout(() => {
          navigate("/");
        }, 2000);
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let fecha = new Date();
    const order = {
      customer: {
        nombre: data.name + " " + data.surname,
        telefono: data.phone,
        email: data.mail,
        state: "Generada",
      },
      fecha: fecha,
      customerCart: cart,
      total: total,
    };
    console.log(order);
    purchaseProducts(order);
  };

  if (loading) {
    return <Spinner text="cargando..." />;
  }

  return (
    <div className="form">
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          className="inputForm"
          placeholder="Nombre"
          {...register("name", {
            required: true,
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.name?.type === "required" && (
          <p className="errorMessage">Campo obligatorio</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="errorMessage">
            El nombre no puede tener menos de 2 caracteres
          </p>
        )}
        {errors.name?.type === "maxLength" && (
          <p className="errorMessage">
            El nombre no puede tener más de 20 caracteres
          </p>
        )}
        <input
          type="text"
          name="surname"
          className="inputForm"
          placeholder="Apellido"
          {...register("surname", {
            required: true,
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.surname?.type === "required" && (
          <p className="errorMessage">Campo obligatorio</p>
        )}
        {errors.surname?.type === "minLength" && (
          <p className="errorMessage">
            El apellido no puede tener menos de 2 caracteres
          </p>
        )}
        {errors.surname?.type === "maxLength" && (
          <p className="errorMessage">
            El apellido no puede tener más de 20 caracteres
          </p>
        )}
        <input
          type="number"
          name="phone"
          className="inputForm"
          placeholder="Teléfono"
          {...register("phone", {
            required: true,
            minLength: 8,
            maxLength: 9,
          })}
        />
        {errors.phone?.type === "required" && (
          <p className="errorMessage">Campo obligatorio</p>
        )}
        {errors.phone?.type === "minLength" && (
          <p className="errorMessage">
            El número no puede tener menos de 8 caracteres
          </p>
        )}
        {errors.phone?.type === "maxLength" && (
          <p className="errorMessage">
            El número no puede tener más de 9 caracteres
          </p>
        )}
        <input
          type="email"
          name="mail"
          className="inputForm"
          placeholder="Correo electrónico"
          {...register("mail", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
          })}
        />
        {errors.mail?.type === "required" && (
          <p className="errorMessage">Campo obligatorio</p>
        )}
        {errors.mail?.type === "patern" && (
          <p className="errorMessage">Formato de email no válido</p>
        )}
        <div className="btnForm">
          <StylishButton
            color="transparent"
            text="Finalizar compra"
            tipo="submit"
          />
          <Link className="transparent" to="/cart">
            Volver
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

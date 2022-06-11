const products = [
  {
    id: "A1",
    nombre: "Alfajor de maicena",
    categoria: "Alfajores",
    descripcion:
      "Clásico alfajor con tapas de maicena, rellenos de dulce de leche y coco por los bordes.",
    img: "./img/productImages/alfajorMaicena.jpg",
    unidades: "1",
    precio: 35,
  },
  {
    id: "A2",
    nombre: "Alfajor salchichón",
    categoria: "Alfajores",
    descripcion:
      "Dos rebanadas de salchichón de chocolate como tapas, relleno de dulce de leche y bañado en chocolate",
    img: "./img/productImages/alfajorSalchichon.jpg",
    unidades: "1",
    precio: 45,
  },
  {
    id: "T1",
    nombre: "Carrot cake",
    categoria: "Tortas",
    descripcion:
      "Torta dulce con zanahoria rallada, nueces y pasas de uva, cubierto con un clásico frosting de queso crema.",
    img: "./img/productImages/carrotCake.jpg",
    unidades: "1",
    precio: 650,
  },
  {
    id: "T2",
    nombre: "Lemon pie",
    categoria: "Tortas",
    descripcion:
      "Tarta de limón con una base de masa quebrada y cubierta con merengue.",
    img: "./img/productImages/lemonPie.jpg",
    unidades: "1",
    precio: 720,
  },
  {
    id: "T3",
    nombre: "Tarta frutal",
    categoria: "Tortas",
    descripcion:
      "Masa quebrada rellena de crema y decorada con una variedad de frutas.",
    img: "./img/productImages/tartaFrutal.jpg",
    unidades: "1",
    precio: 720,
  },
  {
    id: "T4",
    nombre: "Torta brownie",
    categoria: "Tortas",
    descripcion:
      "Se compone por una base de brownie clásico, cubierto por encima con una capa de dulce de leche y copos de merengue italiano.",
    img: "./img/productImages/tortaBrownie.jpeg",
    unidades: "1",
    precio: 590,
  },
  {
    id: "V1",
    nombre: "Budin de naranja",
    categoria: "Varios",
    descripcion:
      "Budín de masa esponjosa, húmedo y con un gran sabor y aroma a naranja, bañado por una fina capa de glaseado real",
    img: "./img/productImages/budinDeNaranja.jpeg",
    unidades: "1",
    precio: 190,
  },
];

export const getProducts = () => {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.filter((resp) => resp.categoria === categoryId));
    }, 500);
  });
};

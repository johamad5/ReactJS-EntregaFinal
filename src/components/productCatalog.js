const products = [
  {
    id: "A1",
    nombre: "Alfajor de maicena",
    categoria: "Alfajores",
    descripcion:
      "Clásico alfajor con tapas de maicena, rellenos de dulce de leche y coco por los bordes.",
    img: "https://i.imgur.com/n20vEwV.jpg",
    precio: 35,
    unidades: 1,
    stock: 100,
  },
  {
    id: "A2",
    nombre: "Alfajor salchichón",
    categoria: "Alfajores",
    descripcion:
      "Dos rebanadas de salchichón de chocolate como tapas, relleno de dulce de leche y bañado en chocolate",
    img: "https://i.imgur.com/nWdQCsM.jpg",
    precio: 45,
    unidades: 1,
    stock: 100,
  },
  {
    id: "T1",
    nombre: "Carrot cake",
    categoria: "Tortas",
    descripcion:
      "Torta dulce con zanahoria rallada, nueces y pasas de uva, cubierto con un clásico frosting de queso crema.",
    img: "https://i.imgur.com/ev4OJ21.jpg",
    precio: 650,
    unidades: 1,
    stock: 6,
  },
  {
    id: "T2",
    nombre: "Lemon pie",
    categoria: "Tortas",
    descripcion:
      "Tarta de limón con una base de masa quebrada y cubierta con merengue.",
    img: "https://i.imgur.com/YVYJXkF.jpg",
    precio: 720,
    unidades: 1,
    stock: 6,
  },
  {
    id: "T3",
    nombre: "Tarta frutal",
    categoria: "Tortas",
    descripcion:
      "Masa quebrada rellena de crema y decorada con una variedad de frutas.",
    img: "https://i.imgur.com/iA4tPNS.jpg",
    precio: 720,
    unidades: 1,
    stock: 6,
  },
  {
    id: "T4",
    nombre: "Torta brownie",
    categoria: "Tortas",
    descripcion:
      "Se compone por una base de brownie clásico, cubierto por encima con una capa de dulce de leche y copos de merengue italiano.",
    img: "https://i.imgur.com/opTqqRI.jpg",
    precio: 590,
    unidades: 1,
    stock: 10,
  },
  {
    id: "V1",
    nombre: "Budin de naranja",
    categoria: "Varios",
    descripcion:
      "Budín de masa esponjosa, húmedo y con un gran sabor y aroma a naranja, bañado por una fina capa de glaseado real",
    img: "https://i.imgur.com/Gthkc27.jpg",
    precio: 190,
    unidades: 1,
    stock: 20,
  },
];

export const getProducts = () => {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve(products);
    }, 5000);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 5000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.filter((resp) => resp.categoria === categoryId));
    }, 5000);
  });
};

export const adaptingNames = (doc) => {
  const data = doc.data();

  const formattingNames = {
    id: doc.id,
    nombre: data.nombre,
    stock: data.stock,
    precio: data.precio,
    categoria: data.categoria,
    descripcion: data.descripcion,
    img: data.img,
  };

  return formattingNames;
};

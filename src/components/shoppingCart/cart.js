const Cart = ({ id, img, nombre, unidades, precio }) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{img}</td>
      <td>{nombre}</td>
      <td>{unidades}</td>
      <td>c/u ${precio}</td>
    </tr>
  );
};

export default Cart;

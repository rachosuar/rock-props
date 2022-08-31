import { React, useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

import productos from "../../data/data";

const ItemDetailContainer = () => {
  let [producto, setProducto] = useState([]);

  const obtenerProductos = () =>
    new Promise((res, rej) => {
      setTimeout(() => res(productos), 2000);
    });

  useEffect(() => {
    let updateProducts = async () => {
      try {
        const prod = await obtenerProductos();
        setProducto(prod);
      } catch (err) {
        console.log("algo no salió bien...", err);
      }
    };
    updateProducts();
  }, []);
  let addToCart = (counter) => {
    alert(`${counter} items added`);
  };
  let detalle = producto.find((prod) => prod.id == 9);
  return (
    <>
      {producto.length === 0 ? (
        <h1>Cargando</h1>
      ) : (
        <ItemDetail {...detalle} count={1} onAdd={addToCart} />
      )}
    </>
  );
};

export default ItemDetailContainer;

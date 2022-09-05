import { React, useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

import productos from "../../data/data";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  let [producto, setProducto] = useState([]);
  let { categoria, id } = useParams();

  const obtenerProductos = () =>
    new Promise((res, rej) => {
      setTimeout(() => res(productos.find((prod) => prod.id === +id)), 2000);
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

  return (
    <>
      {producto.length === 0 ? (
        <ItemDetail count={1} />
      ) : (
        <ItemDetail {...producto} count={1} onAdd={addToCart} />
      )}
    </>
  );
};

export default ItemDetailContainer;

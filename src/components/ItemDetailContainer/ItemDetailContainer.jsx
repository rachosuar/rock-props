import { React, useState, useEffect, useContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Notificacion from "../Notificacion/Notificacion";
import productos from "../../data/data";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  let { notificacion } = useContext(CartContext);
  let [producto, setProducto] = useState([]);
  let { id } = useParams();

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
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      {producto.length === 0 ? (
        <ItemDetail count={1} />
      ) : (
        <>
          <ItemDetail {...producto} count={1} />
          {notificacion.nombre ? <Notificacion {...notificacion} /> : null}
        </>
      )}
    </>
  );
};

export default ItemDetailContainer;

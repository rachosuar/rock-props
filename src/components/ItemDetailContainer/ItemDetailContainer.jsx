import { React, useState, useEffect, useContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Notificacion from "../Notificacion/Notificacion";
import { db } from "../../utils/firebase";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  let { notificacion } = useContext(CartContext);
  let [producto, setProducto] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    let updateProducts = async () => {
      try {
        const query = doc(db, "items", `${id}`);
        let response = await getDoc(query);
        let productos = { ...response.data(), id: response.id };

        setProducto(productos);
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

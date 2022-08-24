import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import productos from "../../data/data";
import Item from "../Item/Item";

import Spiner from "../Spiner/Spiner";

const ItemList = () => {
  let [product, setProducto] = useState([]);

  const obtenerProductos = () =>
    new Promise((res, rej) => {
      setTimeout(() => res(productos), 2000);
    });

  useEffect(() => {
    let updateProducts = async () => {
      try {
        const prod = await obtenerProductos();
        setProducto(prod);
        console.log(prod);
      } catch (err) {
        console.log("error", err);
      }
    };
    updateProducts();
  }, []);

  let addToCart = (counter) => {
    alert(`${counter} items added`);
  };

  return (
    <>
      <Container>
        <Row>
          {product.length === 0 ? (
            <>
              <Spiner />
              <Spiner />
              <Spiner />
            </>
          ) : (
            product.map((prod) => (
              <Item
                className="margin-m"
                key={Math.trunc(Math.random() * 10000)}
                stock={prod.stock}
                nombre={prod.nombre}
                count={1}
                onAdd={addToCart}
                imagen={prod.imagen}
                coleccion={prod.coleccion}
                categoria={prod.categoria}
                price={prod.price}
              />
            ))
          )}
        </Row>
      </Container>
      ;
    </>
  );
};

export default ItemList;

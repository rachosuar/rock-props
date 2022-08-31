import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemList from "../Itemlist/ItemList";
import productos from "../../data/data";
import Spiner from "../Spiner/Spiner";

const ItemListContainer = () => {
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
      } catch (err) {
        console.error("error", err);
      }
    };
    updateProducts();
  }, []);

  return (
    <div>
      <Container fluid="md">
        <Row xl="auto">
          <Col>
            {product.length === 0 ? (
              <>
                <Container>
                  <Row>
                    <Spiner />
                    <Spiner />
                    <Spiner />
                  </Row>
                </Container>
              </>
            ) : (
              <ItemList productos={product} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemListContainer;

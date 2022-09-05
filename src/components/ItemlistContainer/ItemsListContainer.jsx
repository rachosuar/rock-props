import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemList from "../Itemlist/ItemList";
import productos from "../../data/data";
import Spiner from "../Spiner/Spiner";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  let [product, setProducto] = useState([]);
  let { id } = useParams();

  const obtenerProductos = () =>
    new Promise((res, rej) => {
      setTimeout(() => res(productos), 2000);
    });

  useEffect(() => {
    let updateProducts = async () => {
      try {
        const prod = await obtenerProductos();
        id
          ? setProducto(prod.filter((item) => item.categoria === id))
          : setProducto(prod);
      } catch (err) {
        console.error("error", err);
      }
    };
    updateProducts();
  }, [id]);

  return (
    <div>
      <Container fluid="md">
        <Row md="auto">
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

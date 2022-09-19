import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemList from "../Itemlist/ItemList";
import { db } from "../../utils/firebase";
import Spiner from "../Spiner/Spiner";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
const ItemListContainer = () => {
  let [product, setProducto] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      let consulta;
      if (id) {
        consulta = query(
          collection(db, "items"),
          where("categoria", "==", `${id}`)
        );
      } else {
        consulta = collection(db, "items");
      }
      let response = await getDocs(consulta);
      let productos = response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setProducto(productos);
    };
    obtenerProductos();
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

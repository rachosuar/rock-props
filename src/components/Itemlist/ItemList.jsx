import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <>
      <Container fluid="md">
        <Row md="auto">
          {productos.map((prod) => (
            <Item className="margin-m" key={prod.id} count={1} {...prod} />
          ))}
        </Row>
      </Container>
      ;
    </>
  );
};

export default ItemList;

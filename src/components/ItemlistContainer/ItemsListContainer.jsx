import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemList from "../Itemlist/ItemList";

const ItemListContainer = () => {
  return (
    <div>
      <Container fluid="md">
        <Row xl="auto">
          <Col>
            <ItemList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemListContainer;

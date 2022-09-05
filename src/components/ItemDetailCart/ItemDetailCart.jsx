import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetailCart = ({
  nombre,
  precio,
  imagen,
  removeFromCart,
  categoria,
  id,
}) => {
  return (
    <Col xl={8} className="productdetail">
      <Container fluid="auto" className="cartitemcontainer">
        <Row className="justify-content-sm-cente cartitem">
          <Col xs={2}>
            <Link to={`/item/${id}`}>
              <Image src={imagen} roundedCircle="true" className="cartimage" />
            </Link>
          </Col>
          <Col xs={5}>
            <h3> {nombre} </h3>
          </Col>
          <Col xs={3}>Cantidad: 1</Col>
          <Col xs={2}>
            <p className="deleteitem" onClick={() => removeFromCart(nombre)}>
              🗑
            </p>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default ItemDetailCart;

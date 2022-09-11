import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetailCart = ({
  nombre,
  price,
  imagen,
  removeFromCart,

  id,
  counter,
  size,
}) => {
  return (
    <Col xl={10} className="productdetail">
      <Container fluid="auto" className="cartitemcontainer">
        <Row className="justify-content-sm-center cartitem">
          <Col xs={2}>
            <Link to={`/item/${id}`}>
              <Image src={imagen} roundedCircle="true" className="cartimage" />
            </Link>
          </Col>
          <Col xs={4} className="m-2">
            <h3> {nombre} </h3>
            <h4>Size:{size}</h4>
          </Col>
          <Col xs={2} className="">
            Cantidad: {counter}
          </Col>
          <Col xs={2} className="">
            {" "}
            <p>{`$${price * counter}`}</p>
          </Col>

          <Col xs={1}>
            <p
              className="deleteitem"
              onClick={() => removeFromCart(id, nombre, size)}
            >
              ❌
            </p>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default ItemDetailCart;

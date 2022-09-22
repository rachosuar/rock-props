import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const PopoverCartItem = ({ imagen, nombre, counter, size }) => {
  return (
    <Container className="cartdetailpopup">
      <Row className="justify-content-sm-center">
        <Col xs="auto" style={{ alignSelf: "center" }}>
          {counter}
        </Col>
        <Col xs="auto">
          <Image
            src={imagen}
            roundedCircle={true}
            alt="productimage"
            height="55px"
            style={{ alignSelf: "center", padding: "0", margin: "0" }}
          />
        </Col>
        <Col xs={3} style={{ alignSelf: "center", padding: "0", margin: "0" }}>
          {nombre}
        </Col>
        <Col xs="auto" style={{ alignSelf: "center" }}>
          {size}
        </Col>
      </Row>
    </Container>
  );
};

export default PopoverCartItem;

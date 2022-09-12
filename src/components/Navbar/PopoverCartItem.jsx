import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const PopoverCartItem = ({ imagen, nombre, counter, size }) => {
  return (
    <Container className="cartdetailpopup">
      <Row className="justify-content-sm-center">
        <Col md={1} style={{ alignSelf: "center" }}>
          {counter}
        </Col>
        <Col>
          <Image
            src={imagen}
            roundedCircle={true}
            alt="productimage"
            height="55px"
            style={{ alignSelf: "center", padding: "0", margin: "0" }}
          />
        </Col>
        <Col style={{ alignSelf: "center", padding: "0", margin: "0" }}>
          {nombre}
        </Col>
        <Col
          md={1}
          style={{ alignSelf: "center", transform: "translateX(-1rem)" }}
        >
          {size}
        </Col>
      </Row>
    </Container>
  );
};

export default PopoverCartItem;

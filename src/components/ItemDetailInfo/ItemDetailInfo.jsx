import React from "react";
import { Col, Row, Form, Badge } from "react-bootstrap";

const ItemDetailInfo = ({
  nombre,
  counter,
  stock,

  price,

  selectSize,
  sizeTag,
}) => {
  return (
    <>
      <Row xxl="auto" className="justify-content-md-center m-5 mb-5">
        <h1> {nombre}</h1>
      </Row>

      <Row xl="auto" className="justify-content-md-center m-2 mb-5">
        <p className="itemdetail_paragraph">
          💣 Diseños originales exclusivos <br />
          <br />
          💯 Impresiones láser de altísima definición <br />
          <br />
          👕 Algodón 20.1 de alta calidad <br />
          <br />
          🚛 Envíos a todo el pais <br />
        </p>
      </Row>

      <Row className="justify-content-md-center mb-5 mt-5 pricerow">
        <Col xs={4}>
          <Form.Group className="mb-3 ml-2">
            <Form.Select onChange={(e) => selectSize(e.target.value)}>
              <option>SIZE</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </Form.Select>
            {sizeTag ? <Badge bg="danger">Elija un talle</Badge> : null}
          </Form.Group>
        </Col>
        <Col xs={6}>
          <span className="pricetag">{`$${price},00`}</span>
        </Col>
      </Row>

      <h3 className="mt-5">{`Stock:${stock}`}</h3>
    </>
  );
};

export default ItemDetailInfo;

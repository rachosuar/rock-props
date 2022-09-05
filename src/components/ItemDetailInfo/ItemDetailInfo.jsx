import React from "react";
import { Col, Row, Form, Badge } from "react-bootstrap";
import Counter from "../Counter/Counter";
import Boton from "../Boton/Boton";
import mediosdepago from "../../img/mercadopago_logos.jpeg";

const ItemDetailInfo = ({
  nombre,
  counter,
  stock,
  sumCount,
  restCount,
  price,
  onAdd,
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
      <Counter
        counter={counter}
        stock={stock}
        sumCount={sumCount}
        restCount={restCount}
      />
      {counter === stock ? (
        <Row>
          <Badge bg="warning">No hay mas stock!</Badge>
        </Row>
      ) : null}
      <Row className="justify-content-md-center mb-5 mt-5 pricerow">
        <Col xs={4}>
          <Form.Group className="mb-3 ml-2">
            <Form.Label column="s">Size</Form.Label>
            <Form.Select>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={6}>
          <span className="pricetag">{price}</span>
        </Col>
      </Row>
      <Boton
        xl="auto"
        color="btn-primary"
        texto="AGREGAR AL CARRITO"
        handleClick={() => {
          onAdd(counter);
        }}
      />
      <h3 className="mt-5">{`Stock:${stock}`}</h3>
      <img
        src={mediosdepago}
        alt="medios de pago"
        width="390rem"
        height="120rem"
        className="mt-3 mb-2"
      />
    </>
  );
};

export default ItemDetailInfo;

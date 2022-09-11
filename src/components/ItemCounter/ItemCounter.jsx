import React, { useState } from "react";
import { Row, Col, Badge } from "react-bootstrap";
import Boton from "../Boton/Boton";

const ItemCounter = ({ stock, onAdd }) => {
  let [counter, setCounter] = useState(1);
  let restCount = () => {
    setCounter(counter - 1);
  };
  let sumCount = () => {
    setCounter(counter + 1);
  };
  let agregarCompra = () => {
    onAdd(counter);
  };
  return (
    <>
      <Row className="justify-content-md-center m-2">
        <Col xs={4}>
          {counter > 1 ? (
            <Boton color="btn-secondary" texto="-" handleClick={restCount} />
          ) : (
            <Boton color="btn-secondary" disable={true} texto="X" />
          )}
        </Col>
        <Col xs={4}>
          <Badge bg="dark" style={{ fontSize: "1.5em" }}>
            {counter}
          </Badge>
        </Col>
        <Col xs={4}>
          {counter !== stock ? (
            <Boton color="btn-secondary" texto="+" handleClick={sumCount} />
          ) : (
            <Boton color="btn-secondary" disable={true} texto="X" />
          )}
        </Col>
      </Row>
      <Boton
        xl="auto"
        color="btn-primary"
        texto="AGREGAR AL CARRITO"
        handleClick={agregarCompra}
      />
    </>
  );
};

export default ItemCounter;

import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import Boton from "../Boton/Boton";

const ItemCounter = ({ counter, stock, restCount, sumCount, onAdd }) => {
  return (
    <>
      <Row className="justify-content-md-center m-2">
        <Col xs={4}>
          {counter > 1 ? (
            <Boton
              color="btn-secondary"
              texto="-"
              handleClick={() => restCount()}
            />
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
            <Boton
              color="btn-secondary"
              texto="+"
              handleClick={() => sumCount()}
            />
          ) : (
            <Boton color="btn-secondary" disable={true} texto="X" />
          )}
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
    </>
  );
};

export default ItemCounter;

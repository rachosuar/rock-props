import React, { useState } from "react";
import Boton from "../Boton/Boton";
import {
  Container,
  Row,
  Col,
  Badge,
  Card,
  CardImg,
  Form,
  Accordion,
} from "react-bootstrap";

const Item = ({
  stock,
  count,
  onAdd,
  imagen,
  nombre,
  coleccion,
  categoria,
  price,
}) => {
  let [counter, setCounter] = useState(count);

  let restCount = () => {
    setCounter(counter - 1);
  };
  let sumCount = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <Col>
        <Card className="card" style={{}}>
          <CardImg variant="top" src={imagen} style={{ height: "25rem" }} />
          <Card.Body>
            <Card.Title className="card__name">{nombre}</Card.Title>
            <Container fluid="md">
              <Row className="justify-content-md-center m-2">
                <Col xs={3}>
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
                <Col xs={3}>
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
            </Container>
            {counter === stock ? (
              <Row>
                <Badge bg="warning">No hay mas stock!</Badge>
              </Row>
            ) : null}
            <Row className="justify-content-md-center m-2 pricerow">
              <Col s="auto">
                <Form.Group className="mb-3">
                  <Form.Label column="sm">Size</Form.Label>
                  <Form.Select>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <span className="pricetag">{price}</span>
              </Col>
            </Row>
            <Accordion className="m-2">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Detalles</Accordion.Header>
                <Accordion.Body>
                  <ul>{`Colección: ${coleccion}`}</ul>
                  <ul>Algodon 20.1</ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Boton
              xl="auto"
              color="btn-primary"
              texto="AGREGAR AL CARRITO"
              handleClick={() => {
                onAdd(counter);
              }}
            />
            <h3>{`Stock:${stock}`}</h3>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Item;

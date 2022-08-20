import React, { useState } from "react";
import Boton from "./Boton";
import { Container, Row, Col, Badge, Card, CardImg } from "react-bootstrap";

const Counter = ({ stock, count, onAdd, imagen }) => {
  let [counter, setCounter] = useState(count);

  let restCount = () => {
    setCounter(counter - 1);
  };
  let sumCount = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <Card style={{ width: "15rem" }}>
        <CardImg variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Container fluid="true">
            <Row className="justify-content-md-center">
              <Col md="auto">
                {counter !== 0 ? (
                  <Boton
                    color="btn-secondary"
                    texto="-"
                    handleClick={() => restCount()}
                  />
                ) : (
                  <Boton color="btn-secondary" disable={true} texto="X" />
                )}
              </Col>
              <Col lg="auto">
                <Badge bg="dark" style={{ fontSize: "1.5em" }}>
                  {counter}
                </Badge>
              </Col>
              <Col md="auto">
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
          <Boton
            color="btn-primary"
            texto="AGREGAR"
            handleClick={() => {
              onAdd(counter);
            }}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default Counter;

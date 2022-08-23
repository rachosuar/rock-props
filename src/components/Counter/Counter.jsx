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
} from "react-bootstrap";

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
      <Card style={{ width: "25rem", minHeight: "50rem" }}>
        <CardImg variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            perspiciatis iste velit praesentium.
          </Card.Text>
          <Container fluid="true">
            <Row className="justify-content-md-center">
              <Col md="auto">
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
          <Row className="justify-content-md-center m-2">
            <Col sm="auto">
              <Form.Group className="mb-3">
                <Form.Label>Size</Form.Label>
                <Form.Select>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </Form.Select>
              </Form.Group>
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
        </Card.Body>
      </Card>
    </>
  );
};

export default Counter;

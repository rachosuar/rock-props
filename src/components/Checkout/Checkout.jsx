import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Checkout = ({ finalizarCompra }) => {
  return (
    <>
      <Container>
        <Form onSubmit={finalizarCompra}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control required type="text" placeholder="Juan Perez" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="name@example.com"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Repeat Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Telefono</Form.Label>
            <Form.Control required type="text" placeholder="11-12345678" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Finalizar Compra!
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Checkout;

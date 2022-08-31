import React from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

const Spiner = ({ stock, count, onAdd, imagen, nombre }) => {
  return (
    <>
      <Col>
        <Card
          style={{
            width: "23rem",
            margin: "1rem",
            height: "30rem",
            blur: "10px",
            transition: "margin-left 4s ease-in-out 1s",
            borderRadius: "30px",
            border: "2px solid blue",
            boxShadow: "5px 5px 10px black",
          }}
        >
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Container fluid="md">
              <Row
                style={{
                  height: "10rem",
                }}
                className="justify-content-md-center m-2"
              ></Row>
              <Spinner animation="border" role="status"></Spinner>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Spiner;
import React from "react";
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

const Item = ({ nombre, stock, id, imagen }) => {
  return (
    <>
      <Col>
        <Card
          className="card"
          style={{
            borderRadius: "30px",
            border: "2px solid blue",
            boxShadow: "5px 5px 10px black",
          }}
        >
          <CardImg
            variant="top"
            src={imagen}
            style={{
              height: "25rem",
              borderRadius: "30px",
            }}
          />
          <Card.Body>
            <Card.Title className="card__name">{nombre}</Card.Title>
            <Container fluid="md">
              <Row className="justify-content-md-center m-2"></Row>
            </Container>
            <Boton
              xl="auto"
              color="btn-secondary"
              texto="DETALLES"
              handleClick={() => {
                console.log(id);
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

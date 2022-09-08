import React from "react";
import Boton from "../Boton/Boton";
import { Col, Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ nombre, stock, id, imagen, categoria }) => {
  return (
    <>
      <Col>
        <Card
          className="card cardstyle"
          style={{
            borderRadius: "30px",
            border: "2px solid blue",
            boxShadow: "5px 5px 10px black",
          }}
        >
          <Link to={`/item/${id}`}>
            <CardImg
              variant="top"
              src={imagen}
              style={{
                height: "25rem",
                borderRadius: "30px",
              }}
            />
          </Link>

          <Card.Body>
            <Card.Title className="card__name">{nombre}</Card.Title>

            <Link to={`/item/${id}`}>
              <Boton xl="auto" color="btn-secondary" texto="DETALLES" />
            </Link>
            <h3>{`Stock:${stock}`}</h3>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Item;

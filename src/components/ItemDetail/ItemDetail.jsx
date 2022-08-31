import { React, useState, useEffect } from "react";
import { Container, Row, Col, Badge, Form, Image } from "react-bootstrap";
import Boton from "../Boton/Boton";
import mediosdepago from "../../img/mercadopago_logos.jpeg";

const ItemDetail = ({
  id,
  nombre,
  imagen,
  stock,
  coleccion,
  price,
  count,
  onAdd,
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
      <Container fluid="xl" className="itemdetail">
        <Row xl="auto">
          <Col xl={8}>
            <Image
              className="itemdetail__image mt-2 mb-2"
              src={imagen}
              fluid={true}
            />
          </Col>

          <Col xl={4}>
            <Row xxl="auto" className="justify-content-md-center m-5 mb-5">
              <h1> {nombre}</h1>
            </Row>
            <Row xl="auto" className="justify-content-md-center m-2 mb-5">
              <h3>{`Colección: ${coleccion}`}</h3>
            </Row>
            <Row xl="auto" className="justify-content-md-center m-2 mb-5">
              <p className="itemdetail_paragraph">
                "💣 Diseños originales exclusivos <br />
                💯 Impresiones láser de altísima definición <br />
                👕 Algodón 20.1 de alta calidad <br />
                🚛 Envíos a todo el pais" <br />
              </p>
            </Row>
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
              width="350rem"
              height="100rem"
              className="mb-2"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;

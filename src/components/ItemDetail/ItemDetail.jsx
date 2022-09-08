import { React, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Rings } from "react-loader-spinner";
import ItemCounter from "../ItemCounter/ItemCounter";
import mediosdepago from "../../img/mercadopago_logos.jpeg";
import { Link } from "react-router-dom";

import ItemDetailInfo from "../ItemDetailInfo/ItemDetailInfo";

const ItemDetail = ({ id, nombre, imagen, stock, coleccion, price, count }) => {
  let [counter, setCounter] = useState(count);
  let [cart, setCart] = useState([]);

  let restCount = () => {
    setCounter(counter - 1);
  };
  let sumCount = () => {
    setCounter(counter + 1);
  };
  let onAdd = (counter) => {
    alert(`${counter} items where added to the cart!`);
    let newArr = [...cart, counter];
    setCart(newArr);
  };

  return (
    <>
      <Container fluid="xl" className="itemdetail">
        {imagen ? (
          <>
            <Row xl="auto">
              <Col xl={8} className="imagedetail">
                <Image
                  className="itemdetail__image mt-5 mb-5"
                  src={imagen}
                  fluid={true}
                  style={{ borderRadius: "100px" }}
                />
              </Col>
              <Col xl={4}>
                <ItemDetailInfo
                  nombre={nombre}
                  counter={counter}
                  stock={stock}
                  sumCount={sumCount}
                  restCount={restCount}
                  price={price}
                  onAdd={onAdd}
                />
                {cart.length ? (
                  <>
                    <Link to="/home">
                      <Button variant="primary" className="m-3">
                        {" "}
                        SEGUIR COMPRANDO{" "}
                      </Button>
                    </Link>
                    <Link to="/cart">
                      <Button variant="success" className="m-3">
                        {" "}
                        FINALIZAR MI COMPRA{" "}
                      </Button>
                    </Link>
                  </>
                ) : (
                  <ItemCounter
                    onAdd={onAdd}
                    counter={counter}
                    stock={stock}
                    sumCount={sumCount}
                    restCount={restCount}
                  />
                )}
                <img
                  src={mediosdepago}
                  alt="medios de pago"
                  width="390rem"
                  height="120rem"
                  className="mt-5 mb-2"
                />
              </Col>
            </Row>
          </>
        ) : (
          <Row className="justify-content-sm-center spinercontainer">
            <Col xs={6}>
              <Rings
                height="40rem"
                width="40rem"
                color="rgb(85, 89, 220)"
                radius="6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
              />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default ItemDetail;

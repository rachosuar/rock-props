import { React, useState, useContext } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Rings } from "react-loader-spinner";
import ItemCounter from "../ItemCounter/ItemCounter";
import mediosdepago from "../../img/mercadopago_logos.jpeg";
import { Link } from "react-router-dom";

import ItemDetailInfo from "../ItemDetailInfo/ItemDetailInfo";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, nombre, imagen, stock, categoria, price }) => {
  let { addPorducts } = useContext(CartContext);

  let [cart, setCart] = useState(false);
  let [size, setSize] = useState();
  let [sizeTag, setSizeTag] = useState(false);

  let onAdd = (counter) => {
    if (!size || size === "SIZE") {
      setSizeTag(true);
    } else {
      addPorducts({ counter, id, nombre, imagen, price, size });
      setCart(true);
    }
  };
  let selectSize = (size) => {
    if (size !== "SIZE") {
      setSize(size);
      setSizeTag(false);
    } else {
      setSizeTag(true);
    }
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
                  stock={stock}
                  price={price}
                  onAdd={onAdd}
                  selectSize={selectSize}
                  sizeTag={sizeTag}
                />
                {cart ? (
                  <>
                    <Link to={`/categoria/${categoria}`}>
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
                    stock={stock}
                    cart={cart}
                    size={size}
                    imagen={imagen}
                    nombre={nombre}
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

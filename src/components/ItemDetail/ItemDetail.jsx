import { React, useState, useEffect } from "react";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import { Rings } from "react-loader-spinner";

import ItemDetailInfo from "../ItemDetailInfo/ItemDetailInfo";

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

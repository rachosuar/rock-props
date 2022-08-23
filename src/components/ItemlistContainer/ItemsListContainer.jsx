import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";

import slide1 from "../../img/firstslide.jpg";
import slide2 from "../../img/secondslide.jpg";
import slide3 from "../../img/thirdslide.jpg";
import Counter from "../Counter/Counter";
import producta from "../../img/producta.jpg";
// import productb from "../../img/productb.jpg";
// import productg from "../../img/productg.jpg";

const ItemListContainer = ({ greeting, texto }) => {
  let addToCart = (counter) => {
    alert(`${counter} items added`);
  };
  return (
    <div>
      <Container fluid="md">
        <Row xl="auto">
          <Col>
            <Counter
              className="margin-m"
              stock={5}
              count={1}
              onAdd={(counter) => {
                addToCart(counter);
              }}
              imagen={producta}
            />{" "}
          </Col>
        </Row>
      </Container>

      <Carousel interval="5000">
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ItemListContainer;

import React from "react";
import Carousel from "react-bootstrap/Carousel";

import slide1 from "../../img/firstslide.jpg";
import slide2 from "../../img/secondslide.jpg";
import slide3 from "../../img/thirdslide.jpg";

const ItemListContainer = ({ greeting, texto }) => {
  console.log(greeting);
  return (
    <div>
      <h3 className="greeting"> {greeting}</h3>

      <h1>{texto}</h1>

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

import React from "react";
import cart from "../../img/cart.svg";
import { Badge } from "react-bootstrap";

const Cartwidget = ({ carrito }) => {
  return (
    <div className="cartwidget">
      <img
        src={cart}
        width="45"
        height="45"
        className="d-inline-block "
        alt="Shopping Cart"
      />
      {carrito !== 0 ? (
        <Badge bg="primary">{carrito}</Badge>
      ) : (
        <Badge bg="secondary">{carrito}</Badge>
      )}
    </div>
  );
};

export default Cartwidget;

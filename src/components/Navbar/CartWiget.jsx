import React from "react";
import cart from "../../img/cart.svg";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cartwidget = ({ carrito }) => {
  return (
    <div className="cartwidget">
      <Link to="/cart">
        <img
          src={cart}
          width="45"
          height="45"
          className="d-inline-block "
          alt="Shopping Cart"
        />
      </Link>
      {carrito !== 0 ? (
        <Badge bg="primary">{carrito}</Badge>
      ) : (
        <Badge bg="secondary">{carrito}</Badge>
      )}
    </div>
  );
};

export default Cartwidget;

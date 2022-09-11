import React from "react";
import cartimg from "../../img/cart.svg";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cartwidget = ({ carrito }) => {
  let { cart } = useContext(CartContext);

  let cartCounter = cart.length
    ? cart.map((item) => item.counter).reduce((a, b) => a + b)
    : 0;

  return (
    <div className="cartwidget">
      <Link to="/cart">
        <img
          src={cartimg}
          width="45"
          height="45"
          className="d-inline-block "
          alt="Shopping Cart"
        />
      </Link>
      {cart.length !== 0 ? (
        <Badge bg="primary">{cartCounter}</Badge>
      ) : (
        <Badge bg="secondary">{cartCounter}</Badge>
      )}
    </div>
  );
};

export default Cartwidget;

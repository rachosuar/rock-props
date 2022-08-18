import React from "react";
import cart from "../../img/cart.svg";

const Cartwidget = () => {
  return (
    <div className="cartwidget">
      <img
        src={cart}
        width="30"
        height="30"
        className="d-inline-block "
        alt="Shopping Cart"
      />
      <p className="cartnumber">0</p>
    </div>
  );
};

export default Cartwidget;

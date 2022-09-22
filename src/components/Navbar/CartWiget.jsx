import React, { useContext, useState } from "react";
import cartimg from "../../img/cart.svg";
import { Badge, Overlay, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import PopoverCartItem from "./PopoverCartItem";

const Cartwidget = () => {
  let { cart, showCart, mostrarCart, ocultarCart } = useContext(CartContext);
  let [target, setTarget] = useState(null);

  let cartCounter = cart.length
    ? cart.map((item) => item.counter).reduce((a, b) => a + b)
    : 0;

  let onMouseHover = (e) => {
    setTarget(e.target);
    mostrarCart();
  };
  return (
    <>
      {cart.length > 0 ? (
        <div className="cartwidget">
          <Link to="/cart">
            <img
              src={cartimg}
              width="45"
              height="45"
              className="d-inline-block "
              alt="Shopping Cart"
              onMouseEnter={onMouseHover}
              onMouseLeave={ocultarCart}
            />
            {showCart ? (
              <Overlay
                show={showCart}
                target={target}
                placement="bottom"
                containerPadding={10}
              >
                <Popover id="popover-contained">
                  <Popover.Header as="h3">Carrito de Compras</Popover.Header>
                  <Popover.Body style={{ backgroundColor: "rgb(85, 89, 220)" }}>
                    {cart.map((item) => (
                      <PopoverCartItem
                        key={`${item.id}+${item.size}`}
                        count={cart.counter}
                        {...item}
                      />
                    ))}
                  </Popover.Body>
                </Popover>
              </Overlay>
            ) : null}
          </Link>

          <Badge bg="primary">{cartCounter}</Badge>
        </div>
      ) : null}
    </>
  );
};

export default Cartwidget;

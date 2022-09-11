import { React, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemDetailCart from "../ItemDetailCart/ItemDetailCart";

const Cart = () => {
  let { cart, deleteProduct, clearProducts } = useContext(CartContext);

  return (
    <>
      {cart.length ? (
        <Container fluid="xl" className="cartdetail p-3">
          <Row className="justify-content-sm-center">
            <Col sm={10}>
              {cart.map((item) => (
                <ItemDetailCart
                  key={item.id + item.price}
                  count={cart.counter}
                  {...item}
                  removeFromCart={deleteProduct}
                />
              ))}
            </Col>

            <Col sm={2} className="cartbuttons">
              <Row>
                <h2 className="totalizador">
                  {`$${cart
                    .map((item) => item.price * item.counter)
                    .reduce((a, b) => a + b)},00`}
                </h2>
              </Row>
              <Row>
                <Link to={"/"}>
                  <Button size="lg" variant="success" className="my-2">
                    Seguir Comprando
                  </Button>
                </Link>
              </Row>
              <Row>
                <Link to={"/"}>
                  <Button size="lg" variant="primary" className="my-2">
                    Finalizar Compra
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="danger"
                  className="mt-4"
                  onClick={clearProducts}
                >
                  Vaciar carrito
                </Button>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <>
          <Container fluid="xl" className="cartdetail p-3">
            <Row className="justify-content-sm-center">
              <Col sm={8}>
                <h1 className="noitemscart">No hay nada en el carrito 🛒</h1>
              </Col>
              <Col sm={4} className="cartbuttons-empty">
                <Row>
                  <Link to={"/"}>
                    <Button size="lg" variant="success" className="mt-5">
                      COMPRA AHORA!
                    </Button>
                  </Link>
                </Row>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Cart;

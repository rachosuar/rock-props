import { React, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import productos from "../../data/data";
import { Link } from "react-router-dom";
import ItemDetailCart from "../ItemDetailCart/ItemDetailCart";

const Cart = () => {
  let [carrito, setCarrito] = useState([]);

  // const obtenerProductos = () =>
  //   new Promise((res, rej) => {
  //     setTimeout(() => res(productos), 30000);
  //   });

  useEffect(() => {
    let updateProducts = async () => {
      try {
        // const prod = await obtenerProductos();
        setCarrito([
          productos[0],
          productos[10],
          productos[20],
          productos[15],
          productos[36],
        ]);
      } catch (err) {
        console.log("algo no salió bien...", err);
      }
    };
    updateProducts();
  }, []);
  let removeFromCart = (nombre) => {
    window.confirm(`wish to removed ${nombre}?`);
  };
  return (
    <>
      {carrito.length ? (
        <Container fluid="xl" className="cartdetail p-3">
          <Row xl="auto">
            {carrito.map((item) => (
              <ItemDetailCart
                key={item.id}
                {...item}
                removeFromCart={removeFromCart}
              />
            ))}
            <Col xl={4} className="cartbuttons">
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
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <>
          <Container fluid="xl" className="cartdetail p-3">
            <Row xl="auto">
              <Col xl={8}>
                <h1 className="noitemscart">No hay items en el carrito</h1>
              </Col>
              <Col xl={4} className="cartbuttons">
                <Row>
                  <Link to={"/"}>
                    <Button size="lg" variant="success" className="my-2">
                      Seguir Comprando
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

import { React, useContext, useState } from "react";
import { Container, Row, Col, Button, Offcanvas, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Checkout from "../Checkout/Checkout";
import ItemDetailCart from "../ItemDetailCart/ItemDetailCart";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { getDate } from "../../utils/firebase";

const Cart = () => {
  let {
    cart,
    deleteProduct,
    clearProducts,
    clearProductsAfter,
    showTotal,
  } = useContext(CartContext);
  let [checkout, setCheckout] = useState(false);
  let [success, setSucces] = useState(false);
  let [buyer, setBuyer] = useState({});
  let [idOrder, setIdOrder] = useState();

  let finalizarCompra = (e) => {
    e.preventDefault();
    let newOrder = { buyer: {}, items: {} };
    if (
      e.target[1].value === e.target[2].value &&
      e.target[3].value.length > 6 &&
      e.target[3].value.length < 10
    ) {
      let newBuyer = {
        nombre: e.target[0].value,
        email: e.target[1].value,
        repemail: e.target[2].value,
        telefono: e.target[3].value,
      };
      setBuyer(newBuyer);
      newOrder = {
        buyer: { ...buyer },
        items: { ...cart },
        date: getDate(),
        total: showTotal(),
      };
    } else if (buyer.email !== buyer.repemail) {
      alert("los emails no coinciden!");
    } else {
      alert("Revise el telefono!");
    }
    const orderColecction = collection(db, "orders");
    addDoc(orderColecction, newOrder).then(async ({ id }) => {
      await successOperation();
      setIdOrder(id);
    });
    console.log(newOrder);
  };

  let successOperation = () => {
    setCheckout(false);
    setSucces(true);
  };

  let showCheckout = () => {
    setCheckout(true);
  };

  return (
    <>
      <Modal
        show={success}
        onHide={() => setSucces(false)}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Compra Exitosa!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`${
            buyer.nombre
          } tu compra por ${showTotal()} fue realizada con exito y el numero de referencia es ${idOrder}`}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              clearProductsAfter();
              setSucces(false);
            }}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      <Offcanvas
        show={checkout}
        placement="end"
        onHide={() => setCheckout(false)}
      >
        <Offcanvas.Header closeButton />
        <Offcanvas.Title>CHECKOUT</Offcanvas.Title>
        <Checkout finalizarCompra={finalizarCompra} />
      </Offcanvas>
      :
      {cart.length ? (
        <Container fluid="xl" className="cartdetail p-3">
          <Row className="justify-content-sm-center">
            <Col sm={10}>
              {cart.map((item) => (
                <ItemDetailCart
                  key={`${item.id} + ${item.size}`}
                  count={cart.counter}
                  {...item}
                  removeFromCart={deleteProduct}
                />
              ))}
            </Col>

            <Col sm={2} className="cartbuttons">
              <Row>
                <h2 className="totalizador">{`$ ${showTotal()} , 00`}</h2>
              </Row>
              <Row>
                <Link to={"/"}>
                  <Button size="lg" variant="success" className="my-2">
                    Seguir Comprando
                  </Button>
                </Link>
              </Row>
              <Row>
                <Button
                  size="lg"
                  variant="primary"
                  className="my-2"
                  onClick={showCheckout}
                >
                  Finalizar Compra
                </Button>

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
              <Col sm={10}>
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

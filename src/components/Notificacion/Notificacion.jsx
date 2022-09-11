import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const Notificacion = ({ counter, nombre, imagen, size }) => {
  return (
    <ToastContainer position="middle-end">
      <Toast show={true} animation={true} autohide={true} bg="primary">
        <Toast.Header closeButton={false}>
          <img
            src={imagen}
            className="rounded me-2 imgtost"
            alt="imagen producto"
          />
          <strong className="me-auto">{nombre}</strong>
          <small>UNA REMERA AGREGADA</small>
        </Toast.Header>
        <Toast.Body>{`Se agregaron ${counter} remeras talle ${size}.`}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Notificacion;

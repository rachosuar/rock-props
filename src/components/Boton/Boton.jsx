import React from "react";
import { Button } from "react-bootstrap";

const Boton = ({ color, texto, handleClick }) => {
  return (
    <Button className={color} onClick={handleClick}>
      {texto}
    </Button>
  );
};

export default Boton;

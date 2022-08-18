import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

import logo from "../../img/logo.jpg";
import Cartwidget from "./CartWiget";

const Navbars = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            ROCK&PROPS
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="rock$prop"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#productos">Productos</NavDropdown.Item>
              <NavDropdown.Item href="#talles">
                Tabla de talles
              </NavDropdown.Item>
              <NavDropdown.Item href="FAQ">FAQ</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#colecciones">
                Colecciones
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Cartwidget />
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;

import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

import logo from "../../img/logo.jpg";
import Cartwidget from "./CartWiget";

const Navbars = ({ carrito }) => {
  return (
    <>
      <Navbar variant="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            ROCK&PROPS
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top mx-2"
              alt="rock$prop"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#musica">MUSICA</NavDropdown.Item>
              <NavDropdown.Item href="#rock">ROCK</NavDropdown.Item>
              <NavDropdown.Item href="#movies">MOVIES</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#tablatalles">
                TABLA DE TALLES
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Cartwidget carrito={carrito} />
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;

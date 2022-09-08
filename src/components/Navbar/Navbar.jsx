import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../../img/logo.jpg";
import Cartwidget from "./CartWiget";

const Navbars = () => {
  return (
    <>
      <Navbar variant="light" sticky="top">
        <Container>
          <Navbar.Brand>
            <NavLink to="/" className="navbarlink">
              ROCK&PROPS
            </NavLink>
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
              <NavDropdown.Item as="div">
                <NavLink
                  to="/categoria/rock"
                  className={({ isActive }) =>
                    isActive ? "claseactivo" : "navbarlink"
                  }
                >
                  ROCK
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <NavLink
                  to="/categoria/props"
                  className={({ isActive }) =>
                    isActive ? "claseactivo" : "navbarlink"
                  }
                >
                  PROPS
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item as="div">
                <NavLink
                  to="/categoria/movies"
                  className={({ isActive }) =>
                    isActive ? "claseactivo" : "navbarlink"
                  }
                >
                  MOVIES
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as="div">
                <NavLink
                  to="/tablatalles"
                  className={({ isActive }) =>
                    isActive ? "claseactivo" : "navbarlink"
                  }
                >
                  TABLA DE TALLES
                </NavLink>
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

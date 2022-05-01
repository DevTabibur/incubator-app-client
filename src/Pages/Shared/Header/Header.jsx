import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Incubator from '../../../Assets/Images/logo-2.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Container>

          <Navbar.Brand href="#home">
            <img src={Incubator} alt="logo" />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

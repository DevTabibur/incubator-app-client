import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Incubator from '../../../Assets/Images/logo-2.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="shadow header" collapseOnSelect expand="lg">

        <Container>

          <Navbar.Brand as={Link} to="/">
            <img src={Incubator} alt="logo" />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="ms-auto">
              <Nav.Link as={Link} className="header-link" to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} className="header-link" to="/manage-item">Manage Item</Nav.Link>
              <Nav.Link as={Link} className="header-link" to="/add-item">Add Item</Nav.Link>
              <Nav.Link as={Link} className="header-link" to="/my-items">My Items</Nav.Link>
              <Nav.Link as={Link} className="header-link" to="/login">Login</Nav.Link>
              
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

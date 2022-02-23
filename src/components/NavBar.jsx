import React from 'react';
import logo from "../assets/logo.png";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar variant="light" className="App-header">
        <Container>
          <img src={logo}
            width="65"
            height="55"
            className="d-inline-block align-top App-logo"
            alt=""
          />
          <Navbar.Brand href="#home" className="brand-title">Tienda de luces</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#products">Velas decorativas</NavDropdown.Item>
                    <NavDropdown.Item href="#packs">Packs</NavDropdown.Item>
                    <NavDropdown.Item href="#giftcards">Gift cards</NavDropdown.Item>
                </NavDropdown>  
                <Nav.Link href="#contact">Contactenos</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar
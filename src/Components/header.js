import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";


export default function header(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {props.title ? <Navbar.Brand href="/React-Todo-App/">{props.title}</Navbar.Brand>: "My App"}
        {/* <Navbar.Brand href="#home">{props.title}</Navbar.Brand> */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/React-Todo-App/">Home</Nav.Link>
            <Nav.Link href="/React-Todo-App/src/Components/About.js">About</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Actions</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

header.defaultProps = {
  title: "Default Title"
}

header.propTypes = {
  title: PropTypes.string.isRequired
}

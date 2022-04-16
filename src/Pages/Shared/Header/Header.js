import { signOut } from "firebase/auth";
import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase_init";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img height={30} src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#experts">Experts</Nav.Link>
            {/* <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Prices
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Performance</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Re-checking
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {
              user ?
                <button className="btn btn-danger" onClick={handleSignOut}>Sign Out</button>
                :
              <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png'
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
            <img style={{height: '30px'}} src={logo} alt="logo" />
        </Navbar.Brand>
        <Nav className="me-auto link">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Nav>
      </Container>
    </Navbar>
    
   
 


    // <header className="header">

    //   {/* <nav>
    //             <Link to='/'>Home</Link>
    //             <Link to='/about'>About</Link>
    //         </nav>
    //         <h3>This is Header part</h3> */}
    // </header>
  );
};

export default Header;

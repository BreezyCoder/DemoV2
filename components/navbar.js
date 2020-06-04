import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Slide } from "react-reveal";
import Logo from "../media/logo.png";
import "../css/navbar.css";

//styles
const styles = {
  fonts: {
    fontFamily: "none",
    color: "white",
    textAlign: "center",
  },
};

const NavLogo = <img src={Logo} className="logo" alt="" />;

export default function Navi() {
  const [state, setState] = useState({
    show: false,
  });

  const handleMouseOver = () => {
    setState({
      show: true,
    });
  };

  const handleMouseOff = () => {
    setState({
      show: false,
    });
  };

  const handleLinkClick = () => {
    setState({
      show: false,
    });
  };

  return (
    <>
      <Slide down>
        <header>
          <h5 style={styles.fonts}>
            We support the COVID-19 Rules & Regulations
          </h5>
        </header>
      </Slide>
      <Navbar sticky="top" id="navbar" collapseOnSelect expand="lg">
        <Navbar.Brand style={{ width: "15%" }} href="#home">
          <Link to="/">{NavLogo}</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link href="#link">About Us</Nav.Link>
            </Link>
            <NavDropdown
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseOff}
              show={state.show}
              title="More.."
              id="basic-nav-dropdown"
            >
              <Link to="/products">
                <NavDropdown.Item href="#products" onClick={handleLinkClick}>
                  Products
                </NavDropdown.Item>
              </Link>
              <Link to="/signup">
                <NavDropdown.Item onClick={handleLinkClick} href="#news">
                  Register to our News Letter
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

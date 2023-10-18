import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import "./style.css";

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="navbar navbar-default fixed-top">
        <Navbar.Brand href="#home">
        <hr style={{ width: 1520, backgroundColor: "grey" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

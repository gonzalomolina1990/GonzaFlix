import React from "react";
import "../App.css";
import { Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import useIsOnline from "./useOnlineStatus";

function Navigation() {
  const isOnline = useIsOnline();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbarColor"
      fixed="top"
      variant="dark"
    >
      <Navbar.Brand href="/">GonzaFlix</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="search">Buscar</Nav.Link>
          <Nav.Link href="About">Sobre Nosotros</Nav.Link>
          <Nav.Link href="Contact">Contacto</Nav.Link>
        </Nav>
        {!isOnline && alert("Offline")}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;

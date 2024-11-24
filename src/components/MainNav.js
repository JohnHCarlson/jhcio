import React from "react";


import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";

import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const MainNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="px-3">
        <Navbar.Brand href="/">JHC</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav.Item>{" "}
            <Nav.Item>
              <Nav.Link as={Link} to="/resume">
                Resume
              </Nav.Link>
            </Nav.Item>{" "}
            <Nav.Item>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
            </Nav.Item>{" "}
            <Nav.Item>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Link href="https://twitter.com" target="_blank">
              <i className="fab fa-twitter"></i>
            </Nav.Link>
            <Nav.Link href="https://github.com" target="_blank">
              <i className="fab fa-github"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;

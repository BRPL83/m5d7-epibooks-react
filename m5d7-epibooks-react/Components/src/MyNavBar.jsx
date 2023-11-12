import React, { useState } from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import {Link } from "react-router-dom";

const MyNavBar= ({ searchQuery, setSearchQuery }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toogleNightMode = () => {
    setIsNightMode(!isNightMode);
  };
  return (
    <Navbar expand="lg" className={`mb-3 ${isNightMode ? "bg-dark" : "bg-light"}`} variant={isNightMode ? "dark" : "light"}
    >
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>EpiBooks</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/browse" className="nav-link">
              Browse
            </Link>
          </Nav>
          <Nav className="ms-auto">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="A Game of Thrones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              </Form.Group>
              <Button
                variant={isNightMode ? "outline-light" : "outline-dark"}
                onClick={toogleNightMode}
                className="ms-2"
              >
                {isNightMode ? "Day" : "Night"}
              </Button>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
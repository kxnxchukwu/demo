import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


export const NavBar = () => {

    return (
        <Navbar bg="warning" variant="light">
        <Container fluid>
          <Navbar.Brand className="h1" href="/">RecordsMatch</Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link className="btn-outline-secondary">
            <Link className="text-decoration-none text-muted" to="/">
                Home
            </Link>
            </Nav.Link>
            <Nav.Link className="btn-outline-secondary">
            <Link className="text-decoration-none text-muted" to="/blog">
                Blog
            </Link>
            </Nav.Link>
            <Nav.Link className="btn-outline-secondary">
            <Link className="text-decoration-none text-muted" to="/about">
                About Us
            </Link>
            </Nav.Link>
            <Nav.Link className="btn-outline-secondary">
            <Link className="text-decoration-none text-muted" to="/signin">
                Sign In
            </Link>
            </Nav.Link>
            <Nav.Link className="btn-outline-secondary">
            <Link className="text-decoration-none text-muted" to="/create">
                Create Profile
            </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};


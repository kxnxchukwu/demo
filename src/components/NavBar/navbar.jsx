import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () => {

    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link className="btn-outline-secondary" href="/">Home</Nav.Link>
            <Nav.Link className="btn-outline-secondary" href="/blog">Blog</Nav.Link>
            <Nav.Link className="btn-outline-secondary"  href="/about">About Us</Nav.Link>
            <Nav.Link className="btn-outline-secondary" href="/signin">Sign In</Nav.Link>
            <Nav.Link className="btn-outline-secondary" href="/create">Create Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};


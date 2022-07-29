import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



export const SignInPage = () => {
    return (
        <Container className="m-5 mx-auto" lg={12}>
        <Row className="m-2 col-8 mx-auto">
        <Col lg={12}>
        <h1 className="text-center">Sign In</h1>
        </Col>
        <Col lg={12}>
        <p className="text-center">Welcome Back</p>
        </Col>
        </Row>
        <Form className="m-4 col-8 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-grid gap-2">
        <Button variant="primary" type="submit" lg={12}>
          Sign In
        </Button>
        </div>
      </Form>
      </Container>
    );
}
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const BlogPage = () => {
  return (
    <Container className="m-5 mx-auto" lg={12}>
      <Row className="m-2">
        <Col className="d-flex align-items-center">
          <div className="d-block">
            <h1 className="h1">Blog</h1>
            <p className="lead">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.
            </p>
          </div>
        </Col>
        <Col>
          <img
            src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1659048426/card_n9y2cf.png"
            alt="Banner Image"
            width={"600px"}
            height={"500px"}
          />
        </Col>
      </Row>
    </Container>
  );
};
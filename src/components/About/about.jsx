import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const AboutPage = () => {
  return (
    <Container className="m-5 mx-auto" lg={12}>
      <Row className="m-2">
        <Col className="d-flex align-items-center">
          <div className="d-block mx-auto">
            <h1 className="h1">About Us</h1>
            <p className="lead">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.
            </p>
          </div>
        </Col>
        <Col>
          <img
            src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1659048426/card_n9y2cf.png"
            alt="Background Containing Artists"
            width={"600px"}
            height={"500px"}
          />
        </Col>
      </Row>
    </Container>
  );
};

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
            <p className="lead">RecordsMatch is a global music streaming platform bringing fans closer to artists through unique experiences and the highest sound quality..
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

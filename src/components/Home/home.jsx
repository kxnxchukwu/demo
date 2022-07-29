import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Category } from "../Category/category";
import TrackList from "../PlaylistGrid/PlaylistGrid";
import { tracks } from "../../utils";

export const HomePage = () => {
  return (
    <Container className="m-5 mx-auto" lg={12}>
      <Row className="m-2">
        <Col className="d-flex align-items-center">
          <div className="d-block">
            <h1 className="h1">Music is Life</h1>
            <p className="lead">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that.
            </p>
            <Button variant="outline-secondary">Sign In</Button>
            {"  "}
            <Button variant="outline-secondary">Create Profile</Button>
          </div>
        </Col>
        <Col>
          <img
            src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1659046936/banner_oiqnkm.png"
            alt="Background Containing Artists"
          />
        </Col>
      </Row>
      <Row className="m-2 d-flex flex-column">
        <Col className="m-2 d-flex justify-content-between" lg="12">
          <h1 className="h1">Category</h1>
          <Link className="float-end" to={`/see-all`}>
            See All
          </Link>
        </Col>
        <Col className="mt-4 d-flex justify-content-between" lg="12">
          <Category />
          <Category />
          <Category />
        </Col>
      </Row>
      <Row className="m-2 d-flex flex-column">
        <Col className="m-2 d-flex justify-content-between" lg="12">
          <h1 className="h1">Explore</h1>
          <Link className="float-end" to={`/see-all`}>
            See All
          </Link>
        </Col>
        <Col className="mt-4 d-flex justify-content-between" lg="12">
            <img src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1659048426/card_n9y2cf.png" alt="Explore Background" />
            <img src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1659048426/card_n9y2cf.png" alt="Explore Background" />
            <img src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1659048426/card_n9y2cf.png" alt="Explore Background" />
            <img src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1659048426/card_n9y2cf.png" alt="Explore Background" />
        </Col>
      </Row>
      <Row className="m-2 d-flex flex-column">
        <Col className="m-2 d-flex justify-content-between" lg="12">
          <h1 className="h1">Artist to Watch</h1>
          <Link className="float-end" to={`/see-all`}>
            See All
          </Link>
        </Col>
        <Col className="mt-4 d-flex justify-content-between" lg="12">
        <img src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1659048426/card_n9y2cf.png" alt="Artists to Watch Background" />
        <img src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1659048426/card_n9y2cf.png" alt="Artists to Watch Background" />
        <img src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1659048426/card_n9y2cf.png" alt="Artists to Watch Background" />
        <img src="https://res.cloudinary.com/kxnxchukwu/image/upload/v1659048426/card_n9y2cf.png" alt="Artists to Watch Background" />
        </Col>
      </Row>
      <Row className="m-2 d-flex flex-column">
        <Col className="m-2 d-flex justify-content-between" lg="12">
          <h1 className="h1">Top Songs</h1>
          <Link className="float-end" to={`/see-all`}>
            See All
          </Link>
        </Col>
        <Col className="mt-4" lg="12">
         <TrackList tracks={tracks}/>
        </Col>
      </Row>
    </Container>
  );
};

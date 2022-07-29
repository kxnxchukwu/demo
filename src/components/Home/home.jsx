import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
            What's next in music is first on RecordsMatch
Upload your first track and begin your journey. RecordsMatch gives you space to showcase, find your fans, and connect with talent managers.
            </p>
            <Link to="/signin" className="btn btn-outline-secondary">Sign In</Link>
            {"  "}
            <Link to="/create" className="btn btn-outline-secondary">Create Profile</Link>
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
          <Category title="Hip-Hop/Rap"/>
          <Category title="Pop" />
          <Category title="Rock" />
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

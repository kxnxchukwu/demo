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
            <p>
            <span className="font-weight-bold lead">Denise Chacha</span>: "As lovers of music, musical development and growth are key things we look for when listening to new projects from our favourite artists. In Ireland, there has been an undeniable shift in the music industry. The Urban scene is now being recognised on a national level, and spreading ever so steadily to the UK. This has encouraged artists to put their all into their projects, as more eyes are on the scene. With this, the race to be the face of the scene is definitely on."
            </p>
            <p>
               <span class="font-weight-bold lead">Nerd Reeves</span>: "Best known for his forward-leaning, high-energy bands, the British saxophonist and clarinetist picked up a flute and found peace. In this conversation, he goes inside his ethereal new solo EP, discusses the winding down of his long-running groups, and previews recent sessions with jazz headliners."
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
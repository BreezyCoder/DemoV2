import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Slide } from "react-reveal";
import "../css/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <Slide up>
        <Container>
          <Row>
            <Col lg={2}>
              <h4>Facebook</h4>
              <h1>
                <AiFillFacebook
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open("https://facebook.com/");
                  }}
                />
              </h1>
            </Col>
            <Col lg={2}>
              <h4>Instagram</h4>
              <h1>
                <AiFillInstagram />
              </h1>
            </Col>
            <Col lg={4}>
              <h4>Twitter</h4>
              <h1>
                <AiFillTwitterSquare />
              </h1>
            </Col>
            <Col lg={2}>
              <h4>YouTube</h4>
              <h1>
                <AiFillYoutube />
              </h1>
            </Col>
            <Col lg={2}>
              <h4>WhatsApp</h4>
              <h1>
                <AiOutlineWhatsApp />
              </h1>
            </Col>
          </Row>
        </Container>
      </Slide>
    </div>
  );
}

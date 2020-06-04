import React, { useEffect } from "react";
import animatedScrollTo from "animated-scroll-to";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Fade } from "react-reveal";
import Winner from "../media/cardImg.jpg";
import "../css/global.css";
import "../css/home.css";

const cardImg = <img src={Winner} className="card-image" alt="" />;

export default function Landing() {
  useEffect(() => {
    animatedScrollTo(0);
  });

  return (
    <>
      <div className="parralax-1">
        <Fade>
          <div
            style={{ textAlign: "center", color: "white", paddingTop: "1%" }}
            className="heading"
          >
            <h3>
              Welcome to Crafted Terrains, it's winter time, and that means its
              time to face the Ice-Queen
            </h3>
          </div>
        </Fade>
        <Fade>
          <Container>
            <Row>
              <Col lg={6}>
                <Card>
                  <Card.Header>This month's peasant craft's winner</Card.Header>
                  <Card.Body>{cardImg}</Card.Body>
                  <Card.Footer>
                    <Button variant="light" block>
                      View All Crafts
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
              <Col lg={6}>
                <h3>
                  To join the Glorious or Peasant level carfts, and to find out
                  how you can win, Join our Discord server and register to the
                  news letter.
                </h3>
              </Col>
            </Row>
          </Container>
        </Fade>
      </div>
      <div className="parralax-2">
        <Fade>
          <Container>
            <Row>
              <Col lg={12}>
                <h1>The Ice-Queen</h1>
                <br />
                <br />
                <h4>
                  The Ice-Queen has taken over the land of Narathroll and it is
                  up to YOU to take back the land she has over ruled!
                </h4>
              </Col>
            </Row>
          </Container>
        </Fade>
      </div>
      <div className="parralax-3">
        <Fade>
          <Container>
            <Row>
              <Col lg={12}>
                <h3 align="center">
                  Take the journey with friends and face blistering cold
                  terrains!
                </h3>
              </Col>
              <Col lg={12}>
                <h4>
                  Yeti's and Snow Wolve's are awaiting for you in the wilderness
                  of Narathroll, the ice-dragon of the east protecting the
                  throne the Ice-Queen is ruling from.
                </h4>
              </Col>
            </Row>
          </Container>
        </Fade>
      </div>
    </>
  );
}

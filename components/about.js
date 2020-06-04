import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import animatedScrollTo from "animated-scroll-to";
import { Fade } from "react-reveal";

export default function About() {
  useEffect(() => {
    animatedScrollTo(0);

    return function cleanUp() {
      animatedScrollTo(0);
    };
  });

  return (
    <>
      <div className="about-wrapper">
        <Fade>
          <Container>
            <Row>
              <Col lg={12}>
                <h1>Hello about us page</h1>
              </Col>
            </Row>
          </Container>
        </Fade>
      </div>
    </>
  );
}

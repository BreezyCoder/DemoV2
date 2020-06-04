import React, { useState, useEffect } from "react";
import { cookies, useCookies } from "react-cookie";
import animatedScrollTo from "animated-scroll-to";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import { Fade } from "react-reveal";
import axios from "axios";
import "../css/userControl.css";

export default function UserControl() {
  useEffect(() => {
    animatedScrollTo(0);
    return () => {
      animatedScrollTo(0);
    };
  });

  const [cookies, setCookie] = useCookies(["name"]);

  const [state, setState] = useState({
    name: "",
    email: "",
    show: false,
    error: false,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setCookie("name", state.name, { path: "/" });
    axios
      .post("/users", {
        name: state.name,
        email: state.email,
        cookie: cookies.name,
      })
      .then((res) => {
        if (res.status === 200) {
          setState({
            show: true,
          });
        }
      })
      .catch((err) => {
        if (err) {
          setState({
            show: true,
          });
        }
      });
    e.preventDefault();
  };

  const handleClose = () => {
    setState({
      show: false,
    });
    window.location = "/";
  };

  const handleErrorClose = () => {
    setState({
      error: false,
    });
  };

  return (
    <>
      {/*Error Modal */}
      <Modal show={state.error} onHide={handleErrorClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "none", fontSize: "1.5rem" }}>
            There was an error in the form submistion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The server made a boo boo :'(, wanna try again??
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" block onClick={handleErrorClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/*Success Modal*/}
      <Modal show={state.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "none", fontSize: "1.5rem" }}>
            Welcome to the Team {state.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          We have a policey here at Crafted Terrains that we will only update
          you with prices and promotions once a month, buying a product is
          entirely your choice, please feel free to browse our{" "}
          <a
            href="#products"
            onClick={() => {
              window.location = "/products";
            }}
          >
            Products
          </a>
          .
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" block onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="user-control-wrapper">
        <Fade>
          <Container>
            <Row>
              <Col lg={2}></Col>
              <Col style={{ marginTop: "2%" }} lg={8}>
                <h3 style={{ marginBottom: "5%" }}>
                  Sign up and receive the latest news
                </h3>
                <Form onSubmit={handleSubmit}>
                  <Form.Row>
                    <Col>
                      <Form.Label>Full Name:</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        type="text"
                        required
                        placeholder="Enter your Name"
                        value={state.name}
                        name="name"
                      />
                    </Col>
                    <Col>
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        type="text"
                        required
                        placeholder="Enter your Email"
                        value={state.email}
                        name="email"
                      />
                      <Form.Text style={{ fontFamily: "none" }}>
                        All information is secured and will not be shared under
                        any circumstances
                      </Form.Text>
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col style={{ marginTop: "5%" }}>
                      <Button type="submit" block variant={submit}>
                        Submit
                      </Button>
                    </Col>
                  </Form.Row>
                </Form>
              </Col>
              <Col lg={2}>{}</Col>
            </Row>
          </Container>
        </Fade>
      </div>
    </>
  );
}

const submit = "outline-light";

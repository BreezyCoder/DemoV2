import React, { useEffect } from "react";
import animatedScrollTo from "animated-scroll-to";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { ProductList } from "./productsList";
import "../css/global.css";
import "../css/products.css";

const listings = ProductList.map((list) => (
  <Col lg={4}>
    <Card key={list.id} style={{ marginTop: "5%" }}>
      <Card.Header style={{ fontFamily: "roboto", fontSize: "1.5rem" }}>
        {list.id}
      </Card.Header>
      <Card.Body>
        <img src={list.image} className="card-image" alt="" />
      </Card.Body>
      <Card.Text>Best {list.id} for the best crafter</Card.Text>
      <Card.Footer>
        <Link to={list.route}>
          <Button
            variant="light"
            style={{
              fontFamily: "none",
              fontWeight: "bolder",
              textDecoration: "none",
            }}
            block
          >
            View {list.id}
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  </Col>
));

export default function Products() {
  useEffect(() => {
    animatedScrollTo(0);
    return () => {
      animatedScrollTo(0);
    };
  });

  return (
    <div className="products">
      <Fade>
        <Container>
          <Row>
            <Col lg={12}>
              <h3>Products</h3>
            </Col>
            {listings}
          </Row>
        </Container>
      </Fade>
    </div>
  );
}

import React, { useState } from "react";
import { Consumables } from "./products db/consumablesList";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Bounce } from "react-reveal";
import { Counters } from "./counters";
import "../css/consumables.css";

export default function Consumable() {
  const listings = Consumables.map((list) => (
    <Col lg={4}>
      <Bounce up>
        <Card
          key={list.product}
          style={{
            width: "100%",
            height: "25rem",
            marginTop: "5%",
            textAlign: "center",
          }}
        >
          <Card.Header as="h4">{list.product}</Card.Header>
          <Card.Body>
            {list.productImage}
            <br />
            <br />
            {list.description}
            <br />
            <br />
            {list.weight}
            <h5>Price: {list.price}</h5>
          </Card.Body>
          <Card.Footer>
            <Counters />
          </Card.Footer>
        </Card>
      </Bounce>
    </Col>
  ));

  return (
    <>
      <div className="cons-wrapper">
        <h1 style={{ color: "white" }}>Consumables</h1>
        <Container>
          <Row>{listings}</Row>
        </Container>
      </div>
    </>
  );
}

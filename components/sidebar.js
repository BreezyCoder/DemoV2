import React, { useState } from "react";
import Sidebar from "react-sidebar";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../css/sidebar.css";

const sidebarButtons = [
  {
    id: "Home",
    route: "/",
  },
  {
    id: "About",
    route: "/about",
  },
  {
    id: "Products",
    route: "/products",
  },
  {
    id: "Register on News-Letter",
    route: "/signup",
  },
];

export default function SidebarNav() {
  const [state, setState] = useState({
    sidebarOpen: false,
  });

  const handleSideBarOpen = (open) => {
    setState({
      sidebarOpen: open,
    });
  };

  const handleSideBarClose = (close) => {
    setState({
      show: close,
    });
  };

  const buttonsNav = sidebarButtons.map((buttons) => (
    <Col lg={12}>
      <Link to={buttons.route}>
        <Button
          style={{ marginTop: "3%" }}
          block
          id={buttons.id}
          variant="light"
          onClick={handleSideBarClose}
        >
          {buttons.id}
        </Button>
      </Link>
    </Col>
  ));

  return (
    <>
      <Sidebar
        shadow={true}
        sidebar={
          <>
            <Container>
              <Row>{buttonsNav}</Row>
            </Container>
          </>
        }
        className="sidebar"
        open={state.sidebarOpen}
        onSetOpen={handleSideBarOpen}
        styles={{
          sidebar: {
            backgroundColor: "#4c6f8d",
            position: "fixed",
            width: "65vw",
            color: "black",
          },
        }}
      ></Sidebar>
    </>
  );
}

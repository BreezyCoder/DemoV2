import React from "react";
import animatedScrollTo from "animated-scroll-to";
import { BsFillCaretUpFill } from "react-icons/bs";
import { Bounce } from "react-reveal";
import { Button } from "react-bootstrap";

export default function ScrollBtn() {
  return (
    <>
      <Bounce top>
        <Button
          variant="light"
          className="scroll-btn"
          style={{
            position: "fixed",
            right: "3%",
            top: "90%",
            zIndex: "100",
            display: "none",
          }}
          onClick={() => {
            animatedScrollTo(0);
          }}
        >
          <BsFillCaretUpFill />
        </Button>
      </Bounce>
    </>
  );
}

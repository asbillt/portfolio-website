import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import { Slide } from "@mui/material";

function Home() {
  const navigate = useNavigate();
  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center"
    >
      <Row>
        <Slide in={true} direction="right" easing="linear" timeout={750}>
          <h1 className="text-center text-white display-5 fw-normal px-0 pt-3 my-0">
            Hello, I'm <span className="text-warning">David Asbill</span>.{" "}
            <br />
            I'm a full-stack software engineer.
          </h1>
        </Slide>
        <Col className="d-flex justify-content-center py-4">
          <Slide
            in={true}
            direction="right"
            easing="linear"
            timeout={750}
            style={{ transitionDelay: "750ms" }}
          >
            <Button
              variant="warning"
              className="homebtn border-1 d-flex fs-5 text-warning bg-transparent"
              onClick={() => navigate("/about")}
            >
              <span className="px-2 py-1">Learn About Me</span>
              <CgArrowRight className="align-self-center" />
            </Button>
          </Slide>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

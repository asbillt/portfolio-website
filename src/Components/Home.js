import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CgArrowRight } from "react-icons/cg";

function Home() {
  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center"
    >
      <Row>
        <h1 className="text-center text-white display-5 fw-normal px-0 pt-3 my-0">
          Hello, I'm <span className="text-warning">David Asbill</span>. <br />
          I'm a full-stack software engineer.
        </h1>
        <Col className="d-flex justify-content-center py-4">
          <Button
            variant="light"
            className="homebtn border-1 d-flex fs-5 text-white bg-transparent"
          >
            <span className="px-2 py-1">Learn About Me</span>
            <CgArrowRight className="align-self-center" />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

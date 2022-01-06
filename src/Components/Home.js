import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import { Slide } from "@mui/material";

function Home() {
  const navigate = useNavigate();
  return (
    <Grid>
      <Container
        fluid
        className="vh-100 d-flex justify-content-center align-items-center"
      >
        <Row>
          <Slide in={true} direction="right" easing="ease-out" timeout={1000}>
            <h1 className="text-center text-white display-5 fw-normal px-0 pt-3 my-0">
              Hello, I'm <span className="text-warning">David Asbill</span>.{" "}
              <br />
              I'm a front end software engineer.
            </h1>
          </Slide>
          <Col className="d-flex justify-content-center py-4">
            <Slide
              in={true}
              direction="right"
              easing="ease-out"
              timeout={1000}
              style={{ transitionDelay: "750ms" }}
            >
              <Button
                variant="outline-warning"
                className="border-1 d-flex fs-5"
                onClick={() => navigate("/about")}
              >
                <span className="px-2 py-1">Learn About Me</span>
                <CgArrowRight className="align-self-center" />
              </Button>
            </Slide>
          </Col>
        </Row>
      </Container>
    </Grid>
  );
}

export default Home;

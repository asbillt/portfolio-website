import React from "react";
import NavigationBar from "./NavigationBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Slide } from "@mui/material";

function Projects() {
  return (
    <div>
      <NavigationBar />
      <Container className="vh-100 text-white" style={{ paddingTop: "14vh" }}>
        <Row className="">
          <Slide in={true} direction="right" easing="ease-out" timeout={750}>
            <h1 className="text-center">Some apps I've built:</h1>
          </Slide>
        </Row>
        <Row className="d-flex flex-column gy-4 p-5">
          <Slide
            in={true}
            direction="right"
            easing="ease-out"
            timeout={750}
            style={{ transitionDelay: 500 }}
          >
            <Col className="bg-black bg-opacity-25">
              <div className="d-flex flex-column">
                <Col>
                  <h4>
                    Source Code:
                    <a
                      href="https://github.com/asbillt/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      Blog
                    </a>
                  </h4>
                  <h4>
                    Hosted App:
                    <a
                      href="https://github.com/asbillt/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      Blog
                    </a>
                  </h4>
                  <div className="text-center">
                    <h4>Blog</h4>
                    <p>A personal blog built in React.js.</p>
                  </div>
                </Col>
                <Col>
                  <h5>Built with:</h5>
                  <ul>
                    <li>React.js</li>
                    <li>JSON Server</li>
                  </ul>
                </Col>
              </div>
            </Col>
          </Slide>
          <Slide
            in={true}
            direction="right"
            easing="ease-out"
            timeout={750}
            style={{ transitionDelay: 1000 }}
          >
            <Col className="bg-black bg-opacity-25">
              <div className="d-flex flex-column">
                <Col>
                  <h4>
                    Source Code:
                    <a
                      href="https://github.com/asbillt/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      Blog
                    </a>
                  </h4>
                  <h4>
                    Hosted App:
                    <a
                      href="https://github.com/asbillt/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      Blog
                    </a>
                  </h4>
                  <div className="text-center">
                    <h4>Blog</h4>
                    <p>A personal blog built in React.js.</p>
                  </div>
                </Col>
                <Col>
                  <h5>Built with:</h5>
                  <ul>
                    <li>React.js</li>
                    <li>JSON Server</li>
                  </ul>
                </Col>
              </div>
            </Col>
          </Slide>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;

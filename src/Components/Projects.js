import React from "react";
import NavigationBar from "./NavigationBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "@mui/material";

function Projects() {
  return (
    <div>
      <NavigationBar />
      <Container className="vh-100 text-white" style={{ paddingTop: "14vh" }}>
        <Row className="">
          <Fade in={true} direction="right" easing="ease-out" timeout={500}>
            <h1 className="text-center">Some apps I've built:</h1>
          </Fade>
        </Row>
        <Row className="d-flex p-4 g-4">
          <Fade
            in={true}
            direction="right"
            easing="ease-out"
            timeout={500}
            style={{ transitionDelay: 250 }}
          >
            <Col
              xs={12}
              lg={6}
              xxl={4}
              className="backgroundColorBlog backgroundBorder p-3"
            >
              <div className="d-flex flex-column">
                <Col>
                  <h4>
                    Source Code:
                    <a
                      href="https://github.com/asbillt/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
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
                      className="text-decoration-none text-warning ps-2"
                    >
                      Blog
                    </a>
                  </h4>
                  <div className="text-center p-4">
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
          </Fade>
          <Fade
            in={true}
            direction="right"
            easing="ease-out"
            timeout={500}
            style={{ transitionDelay: 500 }}
          >
            <Col
              xs={12}
              lg={6}
              xxl={4}
              className="backgroundColorPortfolio backgroundBorder p-3"
            >
              <div className="d-flex flex-column">
                <Col>
                  <h4>
                    Source Code:
                    <a
                      href="https://github.com/asbillt/portfolio-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
                    >
                      Portfolio Website
                    </a>
                  </h4>
                  <h4>
                    Hosted App:
                    <a
                      href="https://github.com/asbillt/portfolio-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
                    >
                      Portfolio Website
                    </a>
                  </h4>
                  <div className="text-center p-4">
                    <h4>Portfolio Website</h4>
                    <p>A personal portofolio website built in React.js.</p>
                  </div>
                </Col>
                <Col>
                  <h5>Built with:</h5>
                  <ul>
                    <li>React.js</li>
                    <li>Material UI</li>
                    <li>Bootstrap</li>
                  </ul>
                </Col>
              </div>
            </Col>
          </Fade>
          <Fade
            in={true}
            direction="right"
            easing="ease-out"
            timeout={500}
            style={{ transitionDelay: 750 }}
          >
            <Col
              xs={12}
              lg={6}
              xxl={4}
              className="backgroundColorAsbillt backgroundBorder p-3"
            >
              <div className="d-flex flex-column">
                <Col>
                  <h4>
                    Source Code:
                    <a
                      href="https://github.com/asbillt/asbillt-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
                    >
                      Asbillt Website
                    </a>
                  </h4>
                  <h4>
                    Hosted App:
                    <a
                      href="https://asbillt.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
                    >
                      Asbillt Website
                    </a>
                  </h4>
                  <div className="text-center p-4">
                    <h4>Portfolio Website</h4>
                    <p>A personal portofolio website built in React.js.</p>
                  </div>
                </Col>
                <Col>
                  <h5>Built with:</h5>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                  </ul>
                </Col>
              </div>
            </Col>
          </Fade>
          <Fade
            in={true}
            direction="right"
            easing="ease-out"
            timeout={500}
            style={{ transitionDelay: 1000 }}
          >
            <Col
              xs={12}
              lg={6}
              xxl={4}
              className="backgroundColorTea backgroundBorder p-3"
            >
              <div className="d-flex flex-column">
                <Col>
                  <h4>
                    Source Code:
                    <a
                      href="https://github.com/asbillt/asbillt-website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
                    >
                      Tea Party Website
                    </a>
                  </h4>
                  <h4>
                    Hosted App:
                    <a
                      href="https://asbillt.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
                    >
                      Tea Party Website
                    </a>
                  </h4>
                  <div className="text-center p-4">
                    <h4>Tea Party Website</h4>
                    <p>A tea party website built in React.js.</p>
                  </div>
                </Col>
                <Col>
                  <h5>Built with:</h5>
                  <ul>
                    <li>React.js</li>
                    <li>Bootstrap</li>
                  </ul>
                </Col>
              </div>
            </Col>
          </Fade>
          <Fade
            in={true}
            direction="right"
            easing="ease-out"
            timeout={500}
            style={{ transitionDelay: 1250 }}
          >
            <Col
              xs={12}
              lg={6}
              xxl={4}
              className="backgroundColorFlipper backgroundBorder p-3"
            >
              <div className="d-flex flex-column">
                <Col>
                  <h4>
                    Source Code:
                    <a
                      href="https://github.com/asbillt/javascript-color-flipper"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
                    >
                      Color Flipper
                    </a>
                  </h4>
                  <h4>
                    Hosted App:
                    <a
                      href="https://asbillt.github.io/javascript-color-flipper/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
                    >
                      Color Flipper
                    </a>
                  </h4>
                  <div className="text-center p-4">
                    <h4>Color Flipper</h4>
                    <p>Color Flipper</p>
                  </div>
                </Col>
                <Col>
                  <h5>Built with:</h5>
                  <ul>
                    <li>JavaScript (ES6)</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                  </ul>
                </Col>
              </div>
            </Col>
          </Fade>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;

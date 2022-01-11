// Import Statements:
// Import React library.
import React from "react";
// Import the NavigationBar component.
import NavigationBar from "./NavigationBar";
// Import React-Bootstrap layout components.
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Import various software icons.
import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiSass,
  DiVisualstudio,
  DiGit,
  DiNpm,
} from "react-icons/di";
import {
  SiJavascript,
  SiBootstrap,
  SiGithub,
  SiTypescript,
  SiMaterialdesign,
  SiMaterialui,
} from "react-icons/si";
// Import Fade transition from Material UI
import { Fade } from "@mui/material";

function About() {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Row
          // The row is a wrapper for 2 columns.
          className="g-4"
        >
          <Col
            // "left/top column"
            // Col spans 12 columns at xs through md breakpoints.
            // Col spans 6 columns from lg and above breakpoints.
            // Each div has a fade transition, one for the header
            // and one for the paragraph.
            xs={12}
            lg={6}
            className="text-white"
          >
            <div className="d-flex justify-content-center">
              <Fade in={true} easing="ease-out" timeout={300}>
                <h1>About Me</h1>
              </Fade>
            </div>
            <div className="pt-3 pt-lg-5">
              <Fade
                in={true}
                easing="ease-out"
                timeout={300}
                style={{ transitionDelay: 300 }}
              >
                <p className="fs-5">
                  Hello! My name is <span className="text-warning">David</span>{" "}
                  and I enjoy creating apps that live on the internet. I've been
                  an engineer for <span className="text-warning">9 years</span>,
                  the last <span className="text-warning">2 years</span> as a
                  Software Engineer, mostly in{" "}
                  <span className="text-warning">React</span>.
                  <br />
                  <br />
                  My interest in{" "}
                  <span className="text-warning">
                    software development
                  </span>{" "}
                  started in early 2020 when I built my first business website.
                  Fast forward to today, and I've had the opportunity to work on
                  numerous projects creating{" "}
                  <span className="text-warning">
                    Front End User Interfaces
                  </span>{" "}
                  that are accessible and inclusive digital experiences.
                </p>
              </Fade>
            </div>
          </Col>
          <Col
            // "right/bottom column"
            // Col spans 12 columns at xs through md breakpoints.
            // Col spans 6 columns at lg and above breakpoints.
            // The header has a fade transition.
            // The 3 column layout has a fade transition.
            // Each column of the 3 column layout is made up of
            // smaller child columns.
            // Each child column contains: (1)a link and (2)a div with a title and icon.
            xs={12}
            lg={6}
          >
            <div className="d-flex justify-content-center text-white">
              <Fade
                in={true}
                easing="ease-out"
                timeout={300}
                style={{ transitionDelay: 600 }}
              >
                <h1>Languages + Tools:</h1>
              </Fade>
            </div>
            <Fade
              in={true}
              easing="ease-out"
              timeout={300}
              style={{ transitionDelay: 900 }}
            >
              <div className="d-flex pt-4 pt-lg-5">
                <Col xs={4} className="px-4">
                  <Col className="pb-4">
                    <a
                      href="https://en.wikipedia.org/wiki/HTML5"
                      target="_blank"
                      rel="noreferrer"
                      className="languages"
                    >
                      <div className="text-center pb-4 languages">
                        <h6>HTML5</h6>
                        <DiHtml5
                          className="fs-1"
                          style={{ color: "#e34f26" }}
                        />
                      </div>
                    </a>
                  </Col>
                  <Col className="pb-4">
                    <a
                      href="https://reactjs.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="languages"
                    >
                      <div className="text-center pb-4 languages">
                        <h6>React.js</h6>
                        <DiReact
                          className="fs-1"
                          style={{ color: "#00d8ff" }}
                        />
                      </div>
                    </a>
                  </Col>
                  <Col className="pb-4">
                    <a
                      href="https://material.io/"
                      target="_blank"
                      rel="noreferrer"
                      className="languages"
                    >
                      <div className="text-center pb-4 languages">
                        <h6>Material Design</h6>
                        <SiMaterialdesign
                          className="fs-1"
                          style={{ color: "white" }}
                        />
                      </div>
                    </a>
                  </Col>
                  <Col className="pb-4">
                    <a
                      href="https://visualstudio.microsoft.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="languages"
                    >
                      <div className="text-center pb-4 languages">
                        <h6>Visual Studio</h6>
                        <DiVisualstudio
                          className="fs-1"
                          style={{ color: "#0078d7" }}
                        />
                      </div>
                    </a>
                  </Col>
                  <Col className="pb-4">
                    <a
                      href="https://github.com/home"
                      target="_blank"
                      rel="noreferrer"
                      className="languages"
                    >
                      <div className="text-center pb-4 languages">
                        <h6>GitHub</h6>
                        <SiGithub className="fs-1" style={{ color: "white" }} />
                      </div>
                    </a>
                  </Col>
                </Col>
                <Col xs={4} className="px-4">
                  <Col className="pb-4">
                    <a
                      href="https://en.wikipedia.org/wiki/CSS"
                      target="_blank"
                      rel="noreferrer"
                      className="languages"
                    >
                      <div className="text-center pb-4 languages">
                        <h6>CSS3</h6>
                        <DiCss3 className="fs-1" style={{ color: "#264de4" }} />
                      </div>
                    </a>
                  </Col>
                  <Col className="pb-4">
                    <a
                      href="https://getbootstrap.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="languages"
                    >
                      <div className="text-center pb-4 languages">
                        <h6>Bootstrap</h6>
                        <SiBootstrap
                          className="fs-1"
                          style={{ color: "#6610f2" }}
                        />
                      </div>
                    </a>
                  </Col>
                  <Col className="pb-4">
                    <a
                      href="https://mui.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="languages"
                    >
                      <div className="text-center pb-4 languages">
                        <h6>Material UI</h6>
                        <SiMaterialui
                          className="fs-1"
                          style={{ color: "#2196f3" }}
                        />
                      </div>
                    </a>
                  </Col>
                  <Col className="pb-4">
                    <a
                      href="https://www.npmjs.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="languages"
                    >
                      <div className="text-center pb-4 languages">
                        <h6>NPM</h6>
                        <DiNpm className="fs-1" style={{ color: "#cc3534" }} />
                      </div>
                    </a>
                  </Col>
                </Col>
                <Col xs={4} className="px-4">
                  <Col className="pb-4">
                    <a
                      href="https://en.wikipedia.org/wiki/JavaScript"
                      target="_blank"
                      rel="noreferrer"
                      className="languages"
                    >
                      <div className="text-center pb-4 languages">
                        <h6>JavaScript</h6>
                        <SiJavascript
                          className="fs-1"
                          style={{ color: "#f7df1e" }}
                        />
                      </div>
                    </a>
                  </Col>
                  <Col className="pb-4">
                    <a
                      href="https://www.typescriptlang.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="languages"
                    >
                      <div className="text-center pb-4 languages">
                        <h6>TypeScript</h6>
                        <SiTypescript
                          className="fs-1"
                          style={{ color: "#3178c6" }}
                        />
                      </div>
                    </a>
                  </Col>
                  <Col className="pb-4">
                    <a
                      href="https://sass-lang.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="languages"
                    >
                      <div className="text-center pb-4 languages">
                        <h6>Sass</h6>
                        <DiSass className="fs-1" style={{ color: "#c69" }} />
                      </div>
                    </a>
                  </Col>
                  <Col className="pb-4">
                    <a
                      href="https://git-scm.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="languages"
                    >
                      <div className="text-center pb-4 languages">
                        <h6>Git</h6>
                        <DiGit className="fs-1" style={{ color: "#f1502f" }} />
                      </div>
                    </a>
                  </Col>
                </Col>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// Export the default about component.
export default About;

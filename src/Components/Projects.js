// Import statements:
// Import react library.
import React from "react";
// Import NavigationBar component.
import NavigationBar from "./NavigationBar";
// Import React-Bootstrap layout components.
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Import Material UI fade transition.
import { Fade } from "@mui/material";

function Projects() {
  return (
    <div>
      <NavigationBar />
      <Container
        // Container spans 100% of vertical height of viewport.
        className="vh-100 text-white"
      >
        <Row
          // Row container header with fade transition
          className="pb-4"
        >
          <Fade in={true} easing="ease-out" timeout={500}>
            <h1 className="text-center">Some apps I've built:</h1>
          </Fade>
        </Row>
        <Row
          // Row wrapping columns, each column with a fade transition.
          className="d-flex g-4"
        >
          <Fade
            in={true}
            easing="ease-out"
            timeout={500}
            style={{ transitionDelay: 250 }}
          >
            <Col
              // Col spans 12 columns from xs through md breakpoints.
              // Col spans 6 columns from lg through xl breakpoints.
              // Col spans 4 columns xxl and above breakpoint.
              xs={12}
              lg={6}
              xxl={4}
            >
              <div className="height backgroundColorDwellings backgroundBorder p-3 d-flex flex-column">
                <Col>
                  <h4>
                    Source Code:
                    <a
                      href="https://github.com/asbillt/dwellings"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
                    >
                      Dwellings
                    </a>
                  </h4>
                  <h4>
                    Hosted App:
                    {/* <a
                      href="https://github.com/asbillt/dwellings"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
                    >
                      Dwellings
                    </a> */}
                  </h4>
                  <div className="text-center p-4">
                    <h4>Dwellings (In Progress)</h4>
                    <p>A real estate app built in Next.js.</p>
                  </div>
                </Col>
                <Col>
                  <h5>Built with:</h5>
                  <ul>
                    <li>Next.js</li>
                    <li>Chakra UI</li>
                  </ul>
                </Col>
              </div>
            </Col>
          </Fade>
          <Fade
            in={true}
            easing="ease-out"
            timeout={500}
            style={{ transitionDelay: 500 }}
          >
            <Col
              // Col spans 12 columns from xs through md breakpoints.
              // Col spans 6 columns from lg through xl breakpoints.
              // Col spans 4 columns xxl and above breakpoint.
              xs={12}
              lg={6}
              xxl={4}
            >
              <div className="height backgroundColorEcosystems backgroundBorder p-3 d-flex flex-column">
                <Col>
                  <h4>
                    Source Code:
                    <a
                      href="https://github.com/asbillt/react-ecosystems"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
                    >
                      React Ecosystems
                    </a>
                  </h4>
                  <h4>
                    Hosted App:
                    {/* <a
                      href="https://github.com/asbillt/react-ecosystems"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
                    >
                      React Ecosystems
                    </a> */}
                  </h4>
                  <div className="text-center p-4">
                    <h4>Todo List</h4>
                    <p>A todo list app built in React.js.</p>
                  </div>
                </Col>
                <Col>
                  <h5>Built with:</h5>
                  <ul>
                    <li>React.js</li>
                    <li>Redux</li>
                  </ul>
                </Col>
              </div>
            </Col>
          </Fade>
          <Fade
            in={true}
            easing="ease-out"
            timeout={500}
            style={{ transitionDelay: 750 }}
          >
            <Col
              // Col spans 12 columns from xs through md breakpoints.
              // Col spans 6 columns from lg through xl breakpoints.
              // Col spans 4 columns xxl and above breakpoint.
              xs={12}
              lg={6}
              xxl={4}
            >
              <div className="height backgroundColorPortfolio backgroundBorder p-3 d-flex flex-column">
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
                      href="https://asbillt.github.io/portfolio-website/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
                    >
                      Portfolio Website
                    </a>
                  </h4>
                  <div className="text-center p-4">
                    <h4>Portfolio Website</h4>
                    <p>A personal portfolio website built in React.js.</p>
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
            style={{ transitionDelay: 1000 }}
          >
            <Col
              // Col spans 12 columns from xs through md breakpoints.
              // Col spans 6 columns from lg through xl breakpoints.
              // Col spans 4 columns xxl and above breakpoint.
              xs={12}
              lg={6}
              xxl={4}
            >
              <div className="height backgroundColorAsbillt2 backgroundBorder p-3 d-flex flex-column">
                <Col>
                  <h4>
                    Source Code:
                    <a
                      href="https://github.com/asbillt/asbillt-website-v2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
                    >
                      Asbillt Website V2
                    </a>
                  </h4>
                  <h4>
                    Hosted App:
                    {/* <a
                      href="https://github.com/asbillt/asbillt-website-v2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
                    >
                      Asbillt Website V2
                    </a> */}
                  </h4>
                  <div className="text-center p-4">
                    <h4>Asbillt.com (In Progress)</h4>
                    <p>Updated responsive version of Asbillt.com.</p>
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
            style={{ transitionDelay: 1250 }}
          >
            <Col
              // Col spans 12 columns from xs through md breakpoints.
              // Col spans 6 columns from lg through xl breakpoints.
              // Col spans 4 columns xxl and above breakpoint.
              xs={12}
              lg={6}
              xxl={4}
            >
              <div className="height backgroundColorAsbillt1 backgroundBorder p-3 d-flex flex-column">
                <Col>
                  <h4>
                    Source Code:
                    <a
                      href="https://github.com/asbillt/Asbillt-Website-V1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"
                    >
                      Asbillt Website V1
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
                      Asbillt Website V1
                    </a>
                  </h4>
                  <div className="text-center p-4">
                    <h4>Asbillt.com</h4>
                    <p>Business website that communicates services.</p>
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
            style={{ transitionDelay: 1500 }}
          >
            <Col
              // Col spans 12 columns from xs through md breakpoints.
              // Col spans 6 columns from lg through xl breakpoints.
              // Col spans 4 columns xxl and above breakpoint.
              xs={12}
              lg={6}
              xxl={4}
            >
              <div className="height backgroundColorBlog backgroundBorder p-3 d-flex flex-column">
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
                    {/* <a
                      href="https://github.com/asbillt/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-warning ps-2"

                    >
                      Blog
                    </a> */}
                  </h4>
                  <div className="text-center p-4">
                    <h4>Blog (In Progress)</h4>
                    <p>A personal blog built in React.js.</p>
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
            style={{ transitionDelay: 1750 }}
          >
            <Col
              // Col spans 12 columns from xs through md breakpoints.
              // Col spans 6 columns from lg through xl breakpoints.
              // Col spans 4 columns xxl and above breakpoint.
              xs={12}
              lg={6}
              xxl={4}
            >
              <div className="height backgroundColorFlipper backgroundBorder p-3 d-flex flex-column">
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
                    <p>A website where users can set website colors.</p>
                  </div>
                </Col>
                <Col>
                  <h5>Built with:</h5>
                  <ul>
                    <li>JavaScript (ES6)</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
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

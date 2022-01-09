import React from "react";
import NavigationBar from "./NavigationBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
import { Fade } from "@mui/material";

function About() {
  return (
    <div>
      <NavigationBar />
      <Container
        className="vh-100 d-flex text-white justify-content-center align-items-center flex-column bg-black bg-opacity-25"
        style={{ paddingTop: "10vh" }}
      >
        <Row className="pb-5">
          <div className="d-flex justify-content-center">
            <Col className="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-5">
              <Fade in={true} easing="linear" timeout={750}>
                <h1 className="text-center pb-2">About Me</h1>
              </Fade>
              <Fade
                in={true}
                easing="linear"
                timeout={750}
                style={{ transitionDelay: "250ms" }}
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
                  <span className="text-warning">web development</span> started
                  in early 2020 when I built my first business website. Fast
                  forward to today, and I've had the opportunity to work on
                  numerous projects creating{" "}
                  <span className="text-warning">
                    Front End User Interfaces
                  </span>{" "}
                  that are accessible and inclusive digital experiences.
                </p>
              </Fade>
            </Col>
          </div>
        </Row>
        <Row className="">
          <div className="">
            <Row>
              <Fade
                in={true}
                easing="linear"
                timeout={750}
                style={{ transitionDelay: "500ms" }}
              >
                <h1 className="pb-2 text-center">Languages and Tools</h1>
              </Fade>
              <Fade
                in={true}
                easing="linear"
                timeout={750}
                style={{ transitionDelay: "750ms" }}
              >
                <p className="fs-5 text-center">
                  Here are some of the technologies I am working with:
                </p>
              </Fade>
            </Row>
            <Fade
              in={true}
              easing="linear"
              timeout={750}
              style={{ transitionDelay: "1000ms" }}
            >
              <Row className="fs-5 d-flex">
                <Col className="d-flex justify-content-center">
                  <ul className="">
                    <li>
                      HTML5 <DiHtml5 />
                    </li>
                    <li>
                      CSS3 <DiCss3 />
                    </li>
                    <li>
                      JavaScript (ES6) <SiJavascript />
                    </li>
                    <li>
                      Typescript <SiTypescript />
                    </li>
                    <li>
                      React.js <DiReact />
                    </li>
                    <li>
                      Bootstrap <SiBootstrap />
                    </li>
                    <li>
                      Sass <DiSass />
                    </li>
                  </ul>
                </Col>
                <Col className="d-flex justify-content-center">
                  <ul>
                    <li>
                      Material Design <SiMaterialdesign />
                    </li>
                    <li>
                      Material UI <SiMaterialui />
                    </li>
                    <li>
                      Visual Studio <DiVisualstudio />
                    </li>
                    <li>
                      Git <DiGit />
                    </li>
                    <li>
                      Github <SiGithub />
                    </li>
                    <li>
                      NPM <DiNpm />
                    </li>
                    <li>OOP</li>
                    <li>Rest APIs</li>
                  </ul>
                </Col>
              </Row>
            </Fade>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default About;

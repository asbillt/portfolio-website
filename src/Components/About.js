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
  SiNodedotjs,
  SiBootstrap,
  SiGithub,
  SiTypescript,
} from "react-icons/si";

function About() {
  return (
    <div>
      <NavigationBar />
      <Container className="vh-100 d-flex justify-content-center text-white mt-5 pt-5">
        <div className="px-5 mx-5">
          <Row className="">
            <div className="pb-4">
              <h2 className="pb-4">About Me</h2>
              <p className="fs-5">
                Hello! My name is David and I enjoy creating apps that live on
                the internet. My interest in{" "}
                <span className="text-warning">web development</span> started in
                early 2020 when I built my first business website.
                <br />
                <br />
                Fast forward to today, and I've had the opportunity to work on
                numerous projects on{" "}
                <span className="text-warning">
                  Front End User Interfaces
                </span>{" "}
                that are accessible and inclusive digital experiences.
              </p>
            </div>
            <div className="pt-4">
              <h2 className="pb-4">
                Programming languages, technologies, and tools:
              </h2>
              <Col>
                <ol className="ps-3">
                  <li>
                    HTML <DiHtml5 />
                  </li>
                  <li>
                    CSS <DiCss3 />
                  </li>
                  <li>
                    JavaScript <SiJavascript />
                  </li>
                  <li>
                    Typescript <SiTypescript />
                  </li>
                  <li>
                    React.js <DiReact />
                  </li>
                  <li>
                    Node.js <SiNodedotjs />
                  </li>
                  <li>
                    Bootstrap <SiBootstrap />
                  </li>
                  <li>
                    Sass <DiSass />
                  </li>
                  <li>SQL</li>
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
                  <li>Object-Oriented Programming</li>
                  <li>Rest APIs</li>
                </ol>
              </Col>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default About;

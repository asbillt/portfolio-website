import React from "react";
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
} from "react-icons/si";

function About() {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center text-white">
      <div>
        <Row className="">
          <Col>
            <h2 className="pb-4">About Me</h2>
            <p>
              Hello! My name is David and I enjoy creating apps that live on the
              internet. My interest in web development started in early 2020
              when I built my first business website in wordpress.
              <br />
              <br />
              Fast forward to today, and I've had the opportunity to work on
              numerous projects blah blah blah.
            </p>
          </Col>
          <Col>
            <Row>
              <h2 className="pb-4">Programming languages and tools:</h2>
            </Row>
            <Row>
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
                </ol>
              </Col>
              <Col>
                <ol>
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
                  <li>APIs</li>
                </ol>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default About;

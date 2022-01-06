import React from "react";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import { Fade } from "@mui/material";

function Home() {
  const navigate = useNavigate();
  const [anim, setAnim] = useState(false);
  useEffect(() => {
    setAnim(true);
  }, []);

  return (
    <Grid>
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Row>
          <h1 className="text-center text-white display-5 fw-normal px-0 pt-3 my-0">
            <div>
              <Fade in={anim} easing="linear" timeout={100}>
                <span>H</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 100 }}
              >
                <span>e</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 200 }}
              >
                <span>l</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 300 }}
              >
                <span>l</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 400 }}
              >
                <span>o</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 500 }}
              >
                <span>,</span>
              </Fade>{" "}
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 700 }}
              >
                <span>I</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 800 }}
              >
                <span>'</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={10}
                style={{ transitionDelay: 900 }}
              >
                <span>m</span>
              </Fade>{" "}
              <span className="text-warning">
                <Fade
                  in={anim}
                  easing="linear"
                  timeout={100}
                  style={{ transitionDelay: 1100 }}
                >
                  <span>D</span>
                </Fade>
                <Fade
                  in={anim}
                  easing="linear"
                  timeout={100}
                  style={{ transitionDelay: 1200 }}
                >
                  <span>a</span>
                </Fade>
                <Fade
                  in={anim}
                  easing="linear"
                  timeout={100}
                  style={{ transitionDelay: 1300 }}
                >
                  <span>v</span>
                </Fade>
                <Fade
                  in={anim}
                  easing="linear"
                  timeout={100}
                  style={{ transitionDelay: 1400 }}
                >
                  <span>i</span>
                </Fade>
                <Fade
                  in={anim}
                  easing="linear"
                  timeout={100}
                  style={{ transitionDelay: 1500 }}
                >
                  <span>d</span>
                </Fade>{" "}
                <Fade
                  in={anim}
                  easing="linear"
                  timeout={100}
                  style={{ transitionDelay: 1700 }}
                >
                  <span>A</span>
                </Fade>
                <Fade
                  in={anim}
                  easing="linear"
                  timeout={100}
                  style={{ transitionDelay: 1800 }}
                >
                  <span>s</span>
                </Fade>
                <Fade
                  in={anim}
                  easing="linear"
                  timeout={100}
                  style={{ transitionDelay: 1900 }}
                >
                  <span>b</span>
                </Fade>
                <Fade
                  in={anim}
                  easing="linear"
                  timeout={100}
                  style={{ transitionDelay: 2000 }}
                >
                  <span>i</span>
                </Fade>
                <Fade
                  in={anim}
                  easing="linear"
                  timeout={100}
                  style={{ transitionDelay: 2100 }}
                >
                  <span>l</span>
                </Fade>
                <Fade
                  in={anim}
                  easing="linear"
                  timeout={100}
                  style={{ transitionDelay: 2200 }}
                >
                  <span>l</span>
                </Fade>
              </span>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 2300 }}
              >
                <span>.</span>
              </Fade>
              <br />
            </div>
            <div>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 2400 }}
              >
                <span>I</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 2500 }}
              >
                <span>'</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 2600 }}
              >
                <span>m</span>
              </Fade>{" "}
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 2800 }}
              >
                <span>a</span>
              </Fade>{" "}
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 3000 }}
              >
                <span>f</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 3100 }}
              >
                <span>r</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 3200 }}
              >
                <span>o</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 3300 }}
              >
                <span>n</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 3400 }}
              >
                <span>t</span>
              </Fade>{" "}
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 3600 }}
              >
                <span>e</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 3700 }}
              >
                <span>n</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 3800 }}
              >
                <span>d</span>
              </Fade>{" "}
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 4000 }}
              >
                <span>s</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 4100 }}
              >
                <span>o</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 4200 }}
              >
                <span>f</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 4300 }}
              >
                <span>t</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 4400 }}
              >
                <span>w</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 4500 }}
              >
                <span>a</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 4600 }}
              >
                <span>r</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 4700 }}
              >
                <span>e</span>
              </Fade>{" "}
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 4900 }}
              >
                <span>e</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 5000 }}
              >
                <span>n</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 5100 }}
              >
                <span>g</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 5200 }}
              >
                <span>i</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 5300 }}
              >
                <span>n</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 5400 }}
              >
                <span>e</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 5500 }}
              >
                <span>e</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 5600 }}
              >
                <span>r</span>
              </Fade>
              <Fade
                in={anim}
                easing="linear"
                timeout={100}
                style={{ transitionDelay: 5700 }}
              >
                <span>.</span>
              </Fade>
            </div>
          </h1>
          <Col className="d-flex justify-content-center py-4">
            <Fade
              in={anim}
              easing="linear"
              timeout={1500}
              style={{ transitionDelay: 6000 }}
            >
              <Button
                variant="outline-warning"
                className="border-1 d-flex fs-5"
                onClick={() => navigate("/about")}
              >
                <span className="px-2 py-1">Learn About Me</span>
                <CgArrowRight className="align-self-center" />
              </Button>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Grid>
  );
}

export default Home;

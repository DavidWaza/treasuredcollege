import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import abtStyles from "../styles/About.module.css";

const aboutUs = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <div className={abtStyles.abtBg}>
              <h1>about us</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <div className={abtStyles.parallax}>
            <h1>treasured heritage school</h1>
          </div>
        </Row>
        <Row>
          <div className={abtStyles.pargph}>
            <p>
              We understand the needs, expectations, aspiration and anxieties of
              parents and their desire for quality education, these we aspire to
              satisfy.
            </p>
          </div>
        </Row>
        <Row>
          <div className={abtStyles.line}></div>
        </Row>
        <Row>
          <div className={abtStyles.container}>
            <Col sm={6}>
              <div className={abtStyles.intro}>
                <p>introduction</p>
                <p>quality children education</p>
                <p>
                  <span className={`${abtStyles.span}`}>
                    treasured heritage school (THC)
                  </span>{" "}
                  is a Christian co-educational instituition established to
                  train and develope potential leaders that will set the pace of
                  leadership for the next generation. These sets of leaders are
                  imbued with the fear of, and reverence of God and empathy for
                  humanity. At <span className={`${abtStyles.span}`}>THC</span>,
                  we dont just teach, but we educate and impact life moulding
                  qualities and attributes into our students. With our crop of
                  seasoned professionals and God-fearing teachers, coupled with
                  our modern teaching methodology that is aided by modern day
                  teaching technology (e-learning and other teaching
                  techniques), our students are assured of a solid foundation
                  for an all round success in life.
                </p>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default aboutUs;

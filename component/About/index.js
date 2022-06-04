import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import abtStyles from "../../styles/About.module.css";

const index = () => {
  return (
    <div className={`${abtStyles.main}`} id= "about">
      <Container fluid>
        <Row>
          <Col sm={4}>
            <div className={`${abtStyles.mainText}`}>
              <p>about us</p>
              <div className={`${abtStyles.underline}`} />
            </div>
          </Col>
          <Col sm={6}>
            <div className={`${abtStyles.Content}`}>
              <p>
                At{" "}
                <span className={`${abtStyles.span}`}>
                  treasured heritage school
                </span>{" "}
                we intend to raise the benchmark of academic excellence in our
                immediate environment and contend favourably with our
                international contemporaries. We will strive to periodically
                review and improve on our content to meet the constantly
                evolving innovations in the global education world.
              </p>  
              <div className={`${abtStyles.header}`}>
                <p>our curriculum</p>
              </div>
              <div className={`${abtStyles.Content}`}>
                <p>
                  Our curriculum is a blend of the{" "}
                  <span className={`${abtStyles.span}`}>Nigerian</span> and{" "}
                  <span className={`${abtStyles.span}`}>British</span> and{" "}
                  <span className={`${abtStyles.span}`}>American</span>{ " "}
                  curricula.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default index;

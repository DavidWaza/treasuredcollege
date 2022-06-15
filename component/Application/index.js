import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Body.module.css";
import Button from "../Button/Button"

const index = () => {
  return (
    <Container fluid>
      <div className={styles.body}>
        <Row>
          <Col sm={6}>
            <div className={styles.addbg}></div>
          </Col>
          <Col sm={6}>
            <div className={styles.addContent}>
              <p>apply for admission</p>
              <p>
                We don’t just give students an education and experience that
                sets them up for success in a career, we help them succeed in
                their career—to discover a field they’re passionate about and
                dare to lead it.
                
              </p>
              <Button title = "Apply Now" />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default index;

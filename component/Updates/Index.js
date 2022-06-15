import React, { useState } from "react";
import Image from "next/image";
import ComingSoon from "../../images/comingsoon.svg";
import Mail from "../../images/paper-plane.svg";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Body.module.css";
import Button from "../Button/Button";

const Index = () => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Container fluid>
      <div className={styles.updateBody}>
        <Row>
          <Col sm={6}>
            <div className={styles.updates}>
              <p>News & update</p>
              <div className={styles.comingsoon}>
                <div className={styles.image}>
                  <Image src={ComingSoon} alt="" width={250} height={250} />
                </div>
                <div className={styles.updatetext}>
                  <p>!..Soon</p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className={styles.newsletter}>
              <div className={styles.image}>
                <Image src={Mail} alt="" />
              </div>
              <div className={styles.newstext}>
                <h4>Subscribe to our Newsletter</h4>
                <p>Get updates to news & events</p>
              </div>
              <form className={styles.form} onSubmit={handleSubmit}>
                <input
                  className={styles.formControl}
                  placeholder="Your email address"
                  value={value}
                  onChange={handleChange}
                />
                <div className={styles.emailBtn}>
                  {" "}
                  <Button title="Subscribe" />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default Index;

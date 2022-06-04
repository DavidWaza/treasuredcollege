import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bodyStyles from "../../styles/Body.module.css";
import Image from "next/image";
import Trophy from "../../images/trophy.png";
import Bino from "../../images/bino.png";

const index = () => {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <div className={`${bodyStyles.container}`}>
            <div className={`${bodyStyles.missionContainer}`}>
              <div className={`${bodyStyles.h1}`}>
                <div className={`${bodyStyles.icon}`}>
                  <Image src={Trophy} alt="" />
                </div>
                <h1>mission</h1>
              </div>
              <div className={`${bodyStyles.contentWrapper}`}>
                <div className={`${bodyStyles.Content}`}>
                  <p>
                    We are on a mission to set the standard in the educational
                    sector and be the grooming ground to raise well equipped
                    generational leaders for all round success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <div className={`${bodyStyles.container}`}>
            <div className={`${bodyStyles.missionContainer}`}>
              <div className={`${bodyStyles.h1}`}>
              <div className={`${bodyStyles.icon}`}>
                  <Image src={Bino} alt="" />
                </div>
                <h1>vision</h1>
              </div>
              <div className={`${bodyStyles.contentWrapper}`}>
                <div className={`${bodyStyles.Content}`}>
                  <p>
                    To build a condusive environment that will nurture
                    innovative, creative and God-fearing individuals who can
                    compete internationally with thier contemporaries as well as
                    contribue actively an positively in the society
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default index;

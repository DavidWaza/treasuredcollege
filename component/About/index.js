import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import abtStyles from "../../styles/About.module.css";
import Button from "../Button/Button";

const index = () => {
  return (
    <div className={`${abtStyles.main}`} id="about">
      <Container fluid>
        <Row>
          <Col sm={4}>
            <div className={`${abtStyles.mainText}`}>
              <p>welcome to THC</p>
              <div className={`${abtStyles.underline}`} />
            </div>
          </Col>
          <Col sm={8}>
            <div className={`${abtStyles.Content}`}>
              <p>
                <span className={`${abtStyles.span}`}>
                  treasured heritage school (THC)
                </span>{" "}
                is a Christian co-educational instituition established to train
                and develope potential leaders that will set the pace of
                leadership for the next generation. These sets of leaders are
                imbued with the fear of, and reverence of God and empathy for
                humanity. At <span className={`${abtStyles.span}`}>THC</span>,
                we dont just teach, but we educate and impact life moulding
                qualities and attributes into our students. With our crop of
                seasoned professionals and God-fearing teachers, coupled with
                our modern teaching methodolgy that is aided by modern day
                teaching technology (e-learning and other teaching techniques),
                our students are assured of a solid foundation for an all round
                success in life.
              </p>
              <div className={`${abtStyles.header}`}>
                <p>our curriculum</p>
              </div>
              <div className={`${abtStyles.Content}`}>
                <p>
                  Our curriculum is a blend of the{" "}
                  <span className={`${abtStyles.span}`}>Nigerian</span> and{" "}
                  <span className={`${abtStyles.span}`}>British</span> and{" "}
                  <span className={`${abtStyles.span}`}>American</span>{" "}
                  curricula.
                </p>
              </div>
            </div>
            <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/about`}>
              <a>
                <Button title="Know More" />
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default index;

import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Ict from "../../images/ICT.png";
import Lab from "../../images/lab.png";
import Kitchen from "../../images/kitchen.png";
import Stadium from "../../images/stadium.png";
import Lib from "../../images/lib.png";
import Class from "../../images/class.png";
import Button from "../Button/Button";

const Index = () => {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <div className={styles.header}>
            <p>our facilities</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <div className={styles.fac}>
            <Image src={Ict} alt="logo" />
            <div className={styles.facContent}>
              <p>Standard ict lab</p>
              <p>Our ICT facility is of international standard</p>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className={styles.fac}>
            <Image src={Lab} alt="Logo" />
            <div className={styles.facContent}>
              <p>science lab</p>
              <p>well-equipped science laboratories</p>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className={styles.fac}>
            <Image src={Kitchen} alt="Logo" />
            <div className={styles.facContent}>
              <p>home economics lab</p>
              <p>Modern Home Economics Laboratory</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <div className={styles.fac}>
            <Image src={Stadium} alt="logo" />
            <div className={styles.facContent}>
              <p>Adequate sporting facilities</p>
              <p>
                we have basketball court, football field, lawn tennis court,
                volleyball etc.
              </p>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className={styles.fac}>
            <Image src={Lib} alt="logo" />
            <div className={styles.facContent}>
              <p>adequate library</p>
              <p>provision of adequate library</p>
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className={styles.fac}>
            <Image src={Class} alt="logo" />
            <div className={styles.facContent}>
              <p>furnished classroom</p>
              <p>Adequately furnished classrooms with good ventilators</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.facButton}>
            <Button title=" Take a Tour " />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Index;

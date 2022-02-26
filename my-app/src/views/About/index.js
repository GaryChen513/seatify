import React from "react";
import { Row, Col, Container } from "reactstrap";
import Content from "./Content";
import about from "../../images/about.png";
const About = () => {
  return (
     <Container fluid>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Content />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={about} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default About;

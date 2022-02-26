import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Row, Col, Buttom } from "reactstrap";
import { HiUsers, HiLightBulb, HiClipboardCheck } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import "./home.css";

const Main = (props) => {
  return (
    <div className="typewrite">
      <Row noGutters className="text-center align-items-center seat-row">
        <Col>
          <Typewriter
            cursor="false"
            onInit={(typewriter) => {
              typewriter
                .typeString("If you're looking for seat ")
                .pauseFor(2000)
                .start();
            }}
          />
          <button
            color="none"
            className="book-table-btn"
            onClick={() => {
              props.setPage(1);
            }}
          >
            {" "}
            Book Your Seat
          </button>
        </Col>
      </Row>
      <Row noGutters className="text-center big-img-container">
        <Col>
          <img
            src={require("../../images/home.png")}
            alt="cafe"
            className="big-img"
          />
        </Col>
      </Row>
      <Row className="description">
        <Col className="column">
          <div className="image">
            <HiLightBulb></HiLightBulb>
            {/* < img alt="" data-src="https://www.sendinblue.com/wp-content/uploads/2021/08/icn-ftr-2b.svg" class=" lazyloaded" src="https://www.sendinblue.com/wp-content/uploads/2021/08/icn-ftr-2b.svg"/> */}
          </div>
          <h3 className="text">Better Visualisation</h3>
          <p className="text-p">
            Use our AR technology to look through the study space to find your
            sweet spot.
          </p>
        </Col>
        <Col className="column">
          <div className="image">
            <HiClipboardCheck></HiClipboardCheck>
            {/* < img alt="" data-src="https://www.sendinblue.com/wp-content/uploads/2021/08/icn-ftr-3b.svg" class=" lazyloaded" src="https://www.sendinblue.com/wp-content/uploads/2021/08/icn-ftr-3b.svg"/> */}
          </div>
          <h3 className="text">Goodbye Covid-19</h3>
          <p className="text-p">
            Our system automatically block out the seat besides you to keep you
            safe and healthy.
          </p>
        </Col>
        <Col className="column">
          <div className="image">
            <HiUsers></HiUsers>
            {/* < img alt="" data-src="https://www.sendinblue.com/wp-content/uploads/2021/08/icn-ftr-1b.svg" class=" ls-is-cached lazyloaded" src="https://www.sendinblue.com/wp-content/uploads/2021/08/icn-ftr-1b.svg" /> */}
          </div>
          <h3 className="text">Long Time No See</h3>
          <p className="text-p">
            We know quarantine time is hard, we made this to support your space
            booking at your preferred office.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Main;

import React from "react";
import {Row, Col, Buttom} from "reactstrap";

const Main = (props) => {
    return (
        <div>
            <Row noGutters className="text-center align-items-center seat-row">
                <Col>
                <p className="seat-booking">
                    If you're looking for seat
                </p>
                <button color="none" className="book-table-btn" onClick={() => {
                    props.setPage(1)
                }
                }> Book Your Seat</button>
                </Col>
            </Row>
            <Row noGutters className="text-center big-img-container">
                <Col>
                <img src={require("../../images/workspace.jpg")} alt="cafe" className="big-img"/>
                </Col>
            </Row>
        </div>
    )
}

export default Main;
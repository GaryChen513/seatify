import React, { useState, useEffect } from "react";
import { Row, Col, Input, Button } from "reactstrap";
import Selector from "../../components/Selector";
import SeatMatrix from "../../components/SeatMatrix.js";
import API from "../../utils/API";
import "./book.css";

const Book = (props) => {
  const [floor, setFloor] = useState([]);
  const [cur_time, setCur_time] = useState(8);
  const [cur_floor, setCur_floor] = useState(1);
  const [seats, setSeats] = useState([]);
  const [date, setDate] = useState("");

  const { onRequest } = props;

  const FLOORS = ["1st Floor", "2nd Floor", "3rd Floor", "4th Floor"];

  const TIMES = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
  ];

  useEffect(() => {
    loadFloor();
  }, [cur_time, cur_floor]);

  const loadFloor = () => {
    API.getFloor(cur_floor)
      .then((res) => {
        setFloor(res.data[0]);
        setSeats(res.data[0].seats);
      })
      .catch((err) => console.log(err));
  };

  const getCurrentDate = () => {
    const dater = new Date();

    const date =
      dater.getDate() + "/" + dater.getMonth() + "/" + dater.getFullYear();

    return [date];
  };

  return (
    <div>
      <Row noGutters className="text-center align-items-center seat-row ">
        <Col xs="12" sm="4">
          <Selector
            itemList={getCurrentDate()}
            setSelectedItem={setDate}
            key="date"
          />
        </Col>

        <Col xs="12" sm="4">
          <Selector
            itemList={TIMES}
            setSelectedItem={setCur_time}
            key="times"
          />
        </Col>

        <Col xs="12" sm="4">
          <Selector
            itemList={FLOORS}
            setSelectedItem={setCur_floor}
            key="floors"
          />
        </Col>
      </Row>

      <Row>
        <SeatMatrix
          seats={seats}
          cur_time={cur_time}
          cur_floor={cur_floor}
          onRequest={onRequest}
          key={cur_floor}
        />
      </Row>

      <Row>
        <button
          className="book-table-btn"
          onClick={() => {
            props.setPage(2);
          }}
        >
          {" "}
          Book Your Seat
        </button>
      </Row>
    </div>
  );
};

export default Book;

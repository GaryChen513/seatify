import React, { useState, useEffect } from "react";
import Seat from "./Seat";
import level from "../../../script/Seed.js"; // dummy data
import { sliceArray } from "../utils";
import "./Seat.css";

const SeatMatrix = () => {
  const [seats, setSeats] = useState([]);
  const [cur_time, setCur_time] = useState(1);

  useEffect(() => {
    setSeats(level.seats);
    setCur_time(14);
  }, []);

  const generateSeats = (arr, start, end) => {
    return (
      <div className="row">
        {sliceArray(arr, start, end).map((seat) => {
          return <Seat seat={seat} cur_time={cur_time} key={seat.id} />;
        })}
      </div>
    );
  };

  return (
    <div className="floor-complex">
      <div className="row floor-layout">
        <div className="col col-md-2">
          {generateSeats(seats, 0, 4)}
          {generateSeats(seats, 4, 8)}
        </div>

        <div className="col col-md-2">
          {generateSeats(seats, 8, 12)}
          {generateSeats(seats, 12, 16)}
          {generateSeats(seats, 16, 20)}
          {generateSeats(seats, 20, 24)}
        </div>

        <div className="col col-md-2">
          {generateSeats(seats, 24, 28)}
          {generateSeats(seats, 28, 32)}
        </div>
      </div>
    </div>
  );
};

export default SeatMatrix;

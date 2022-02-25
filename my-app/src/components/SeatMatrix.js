import React, { useState, useEffect } from "react";
import Seat from "./Seat";
// import level from "../script/Seed.js"; // dummy data
import { sliceArray } from "../utils";
import "./Seat.css";

const SeatMatrix = (props) => {
  const { seats, cur_time, onRequest, cur_floor } = props;

  const default_seat_num = cur_floor * 32;

  const generateSeats = (arr, start, end) => {
    return (
      <div className="row">
        {sliceArray(arr, start, end).map((seat) => {
          return (
            <Seat
              seat={seat}
              cur_time={cur_time}
              onRequest={onRequest}
              key={seat.table_num}
            />
          );
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

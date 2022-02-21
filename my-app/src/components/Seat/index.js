import React, { useState, useEffect } from "react";
import "../Seat.css";

const Seat = (props) => {
  const { seat, cur_time } = props;
  const [color, setColor] = useState("");

  // const seatID = seat.id // string
  // const seatOccupiedTime = seat.occupiedTime; // list(int)

  useEffect(() => {
    if (seat.occupiedTime.includes(cur_time)) {
      setColor("seat-occupied");
    } else {
      setColor("seat-grey");
    }
  }, []);

  function handleClick(e) {
    if (color === "seat-occupied") {
      return;
    }

    if (color === "seat-grey") {
      setColor("seat-black");
      seat.occupiedTime.push(cur_time);
      console.log(seat);
    } else {
      setColor("seat-grey");
      seat.occupiedTime.pop();
      console.log(seat);
    }
  }

  return (
    <div className="col-2 col-md-2">
      <div className={`seat ${color}`} onClick={(e) => handleClick(e)} />
    </div>
  );
};

export default Seat;

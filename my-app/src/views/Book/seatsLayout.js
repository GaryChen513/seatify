import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import SeatMatrix from "../../components/SeatMatrix.js";

const SeatsLayout = (props) => {
  // const [floor, setFloor] = useState([]);
  // const [cur_time, setCur_time] = useState(8);
  // const [cur_floor, setCur_floor] = useState(1);
  // const [seats, setSeats] = useState([]);

  // const [request, setRequest] = useState({}); // {seat_id: time_booked}

  // const { onRequest } = props;


  useEffect(() => {
    setCur_time(12);
    setCur_floor(2);
    loadFloor();
    
  }, [cur_time, cur_floor, request]);

  function loadFloor() {
    API.getFloor(cur_floor)
      .then((res) => {
        setFloor(res.data[0]);
        setSeats(res.data[0].seats);
      })
      .catch((err) => console.log(err));
  }

  return (
    <SeatMatrix
      seats={seats}
      cur_time={cur_time}
      cur_floor={cur_floor}
      onRequest={onRequest}
      key={cur_floor}
    />

  );
};

export default SeatsLayout;

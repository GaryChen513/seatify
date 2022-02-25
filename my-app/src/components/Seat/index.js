import React, { useState, useEffect , useContext} from "react";
import "../Seat.css";
import { RequestContext } from "../../views";

const Seat = (props) => {
  const { seat, cur_time } = props;
  const [ color, setColor] = useState("");
  const { request, onRequest } = useContext(RequestContext)

  useEffect(() => {
    if (seat.occupiedTime.includes(cur_time)) {
      setColor("seat-occupied");
    } else {
      const id = seat._id;

      if (id in request && request[id].includes(cur_time)) {
        setColor("seat-green")
      } else {
        setColor("seat-grey");
      }
    }
  }, [cur_time]);

  function handleClick(e) {
    e.preventDefault();

    if (color === "seat-occupied") {
      return;
    }

    const occupiedTime = seat.occupiedTime;
    const id = seat._id;

    if (color === "seat-grey") {
      setColor("seat-green");
      occupiedTime.push(cur_time);
    } else {
      setColor("seat-grey");
      seat.occupiedTime.pop();
    }

    onRequest(id, occupiedTime);
  }

  return (
    <div className="col-2 col-md-2">
      <div className={`seat ${color}`} onClick={(e) => handleClick(e)} />
    </div>
  );
};

export default Seat;

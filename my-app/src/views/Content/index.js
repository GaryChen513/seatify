import React from "react";
import { ImPointRight } from "react-icons/im";

const Content = () => {
  return (
    <div>
      <blockquote>
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, our idea of this{" "}
          <span color="purple"> Reservation System </span>
          is inspired from{" "}
          <span color="purple">
            UOA Room Booking System and Current Soical Issues.
          </span>
          <br />
          - Topic: Available Seats (Very similar to the Cinema Reservation
          System). - Purpose: Automatically generate available seats.
          <br />
          (it can be applied for each level of a company or a shared office).
        </p>
        <ul>
          <li>
            <ImPointRight /> Dong
          </li>
          <li>
            <ImPointRight /> Gary
          </li>
          <li>
            <ImPointRight /> Sim
          </li>
          <li>
            <ImPointRight /> Kayley
          </li>
          <li>
            <ImPointRight /> Wendy
          </li>
        </ul>

        <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
          "Strive to build things that make a difference!"{" "}
        </p>
      </blockquote>
    </div>
  );
};

export default Content;

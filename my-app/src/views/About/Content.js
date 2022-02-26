import React from "react";
import { ImPointRight } from "react-icons/im";

const Content = () => {
  return (
    <div>
        <blockquote>
          <p style={{ textAlign: "justify" }}>
            We have friends tested positive for covid after going to University and cinema because the booking system did not block the seats around them. 
            <br />
            <br />
            We all want to go out during covid time, but we are afraid of getting infected. Many people procrastinate a lot and not feeling motivated working at home with their bed just one feet away from their working table.
            <br />
            <br />
            How can we make sure that we can work at an office space but keeping social distance at the same time to prevent ourselves from getting infected by coronavirus? We have the solution. Our booking system automatically disable seats around the selected seat(s), keeping at least 1.5m away from people around you. 
            <br />
            <br />
            This system can be applied to many areas, from University, office to cinema and flight. Users are allowed to use Augmented Reality (AR) to check which seat is available or use this technology to navigate their way in the cinema where there’s no light! Even if there’s no any disease, we can still adapt our system for normal daily use!
            <br />
            <br />
            We believe that this system can help to keep us safe and healthy, and stop the spread.
          </p>
          {/* <ul>
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
          </ul> */}

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
    </div>
  );
};

export default Content;
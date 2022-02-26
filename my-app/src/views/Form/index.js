import React, { useState } from "react";
import "./form.css";
import API from "../../utils/API.js";
import { message } from "antd";

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const { request, setRequest, setPage } = props;

  const handleSubmit = (e) => {
    //event object
    e.preventDefault(); //important!!! not refreshing the page
    if (firstName && email) {
      for (const id in request) {
        const occupiedTime = request[id];

        API.updateSeat(id, { occupiedTime })
          .then((res) => {
            setRequest({});
            message.success("Article Updated");
          })
          .catch((err) => console.log(err));
      }

      setPage(1);
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" onClick={handleSubmit}>
            Click here to book
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Form;

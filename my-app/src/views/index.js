import React, { useState, useEffect } from "react";
import { Nav } from "reactstrap";

import Navbar from "./Navbar";
import Home from "./Home";
import Book from "./Book";
import Form from "./Form";
import About from "./Content";

const RequestContext = React.createContext();

function View() {
  const [page, setPage] = useState(0);
  const [request, setRequest] = useState({}); // {seat_id: time_booked}

  useEffect(() => {
    console.log(request);
  }, [request]);

  function onRequest(id, occupiedTime) {
    const new_request = { ...request };
    new_request[id] = occupiedTime;
    setRequest(new_request);
  }

  return (
    <RequestContext.Provider value={{ request, onRequest }}>
      <div>
        <Navbar setPage={setPage} />
        {page === 0 ? <Home setPage={setPage} /> : null}
        {page === 1 ? <Book setPage={setPage} onRequest={onRequest} /> : null}
        {page === 2 ? (
          <Form setPage={setPage} request={request} setRequest={setRequest} />
        ) : null}
        {page === 3 ? <About setPage={setPage} /> : null}
      </div>
    </RequestContext.Provider>
  );
}

export { View, RequestContext };

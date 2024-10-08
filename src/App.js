import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QRCodeDisplay from "./components/QRCodeDisplay";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [userDetails, setUserDetails] = useState(null);
  const [questionNom, setquestionNom] = useState(1);
  console.log(userDetails);
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<QRCodeDisplay questionNom={questionNom} />}
          />
          <Route
            path="/form/"
            element={
              <Form setUserDetails={setUserDetails} questionNom={questionNom} />
            }
          />
          <Route
            path="/result"
            element={<Result detailsOfUser={userDetails} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

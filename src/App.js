import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QRCodeDisplay from "./components/QRCodeDisplay";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [userDetails, setUserDetails] = useState(null);
  const [questionNom, setquestionNom] = useState(1);
  const [isGameFinished, setGameFinished] = useState(false);

  if (userDetails) {
    const { userAnswer, correctAnswer } = userDetails;
    if (userAnswer === correctAnswer) {
      if (questionNom < 10) {
        setTimeout(() => {
          setquestionNom((prevCount) => prevCount + 1);
          setUserDetails(null);
        }, 5000);
      } else {
        setGameFinished(true);
      }
    } else {
      setGameFinished(true);
    }
  }

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
            element={
              <Result
                detailsOfUser={userDetails}
                isGameFinished={isGameFinished}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

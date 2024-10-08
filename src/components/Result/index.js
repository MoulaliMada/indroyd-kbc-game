import React from "react";
import "./index.css";

function Result(props) {
  const { isGameFinished, detailsOfUser } = props;
  const { name, userAnswer, correctAnswer } = detailsOfUser;
  return (
    <div className="result-container">
      {userAnswer === correctAnswer ? (
        <h1>Congratulations {name} Your Answer is correct</h1>
      ) : (
        <p>{name} Your Answer is Wrong</p>
      )}
    </div>
  );
}

export default Result;

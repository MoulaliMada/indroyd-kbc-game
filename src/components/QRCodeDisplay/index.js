import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./index.css";

function QRCodeDisplay({ questionNom }) {
  const url = `https://indroyd-kbc-game.vercel.app/form`;
  const questions = [
    {
      id: 1,
      question: "Which of the following is NOT a built-in data type in Python?",
      options: ["List", "Set", "Array", "Dictionary"],
      answer: "Array",
    },
    {
      id: 2,
      question: "What is the purpose of the self keyword in Python?",
      options: [
        "It refers to the class itself.",
        "It refers to the parent class.",
        "It is not used in Python.",
        "It refers to the instance of the class.",
      ],
      answer: "It refers to the instance of the class.",
    },
    {
      id: 3,
      question: "Which of the following is a mutable data type in Python?",
      options: ["String", "Tuple", "List", "Int"],
      answer: "List",
    },
    {
      id: 4,
      question:
        "Which of the following is used to handle exceptions in Python?",
      options: ["try-except", "try-catch", "catch-try", "except-try"],
      answer: "try-except",
    },
    {
      id: 5,
      question: "print(1 == True)",
      options: ["True", "False", "None", "Error"],
      answer: "True",
    },
    {
      id: 6,
      question: "What is React primarily used for?",
      options: [
        "Building server-side applications",
        "Building user interfaces",
        "Managing databases",
        "Handling network requests",
      ],
      answer: "Building user interfaces",
    },
    {
      id: 7,
      question: "Which of the following is a key feature of React?",
      options: [
        "Two-way data binding",
        "Virtual DOM",
        "Direct DOM manipulation",
        "Global state management",
      ],
      answer: "Virtual DOM",
    },
    {
      id: 8,
      question: "What does the useState hook do in React?",
      options: [
        "It manages the lifecycle of components.",
        "It allows you to add state to functional components.",
        "It fetches data from an API.",
        "It handles side effects in components.",
      ],
      answer: "It allows you to add state to functional components.",
    },
    {
      id: 9,
      question:
        "Which lifecycle method is called after a component is mounted?",
      options: [
        "componentDidUpdate",
        "componentDidMount",
        "componentWillUnmount",
        "render",
      ],
      answer: "componentDidMount",
    },
    {
      id: 10,
      question:
        "Which of the following can be used to pass data to a component in React?",
      options: ["State", "Props", "Context", "All of the above"],
      answer: "All of the above",
    },
  ];

  const { question, options } = questions[questionNom - 1];
  return (
    <div>
      <h1 className="heading">Scan this QR Code to get question</h1>

      <div className="qr-container">
        <div>
          <p className="quetion">{question}</p>
          <ul>
            <li>{options[0]}</li>
            <li>{options[1]}</li>
            <li>{options[2]}</li>
            <li>{options[3]}</li>
          </ul>
        </div>
        <QRCodeSVG value={url} size={200} />
      </div>
    </div>
  );
}

export default QRCodeDisplay;

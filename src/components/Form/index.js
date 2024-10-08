import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Form(props) {
  const { setUserDetails, questionNom } = props;
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
  const [userName, setUserName] = useState("");
  const nomber = questionNom - 1;
  const currentQuestion = useState(questions[nomber]);
  const currentQuestion1 = currentQuestion[0];
  const [useraAnswer, setUserAnswer] = useState("");
  const [isUserNameEmpty, setisUserNameEmpty] = useState(false);
  const [isUserAnsewerEmpty, setisUserAnsewerEmpty] = useState(false);
  const navigate = useNavigate();
  const { question, options, answer } = currentQuestion1;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "") {
      setisUserNameEmpty(true);
    } else {
      setisUserNameEmpty(false);
    }
    if (useraAnswer === "") {
      setisUserAnsewerEmpty(true);
    } else {
      setisUserAnsewerEmpty(false);
    }
    if (useraAnswer !== "" && userName !== "") {
      const formData = {
        name: userName,
        userAnswer: useraAnswer,
        correctAnswer: answer,
      };
      setUserDetails(formData);
      navigate("/result");
    }
  };

  const changeName = (event) => {
    setUserName(event.target.value);
  };

  const handleChangeOption = (event) => {
    setUserAnswer(event.target.value);
  };

  return (
    <div className="bg-container">
      <form onSubmit={handleSubmit}>
        <p className="label">Enter Yor Name</p>
        <input
          onChange={changeName}
          placeholder="enter your name"
          value={userName}
          className="input-name"
        />
        {isUserNameEmpty && (
          <p className="warning-name">*Please Enter Your Name</p>
        )}

        <div className="mcq-container">
          <p className="question">{question}</p>
          <hr />
          <ul className="ul-options">
            {options.map((eachOption) => (
              <li key={eachOption} className="option">
                <input
                  id={eachOption}
                  type="radio"
                  value={eachOption}
                  checked={useraAnswer === eachOption}
                  onChange={handleChangeOption}
                />
                <label htmlFor={eachOption} className="label-option">
                  {eachOption}
                </label>
              </li>
            ))}
          </ul>
          {isUserAnsewerEmpty && (
            <p className="warning-name">*Please Enter your answer</p>
          )}
          <button className="submit-btn2" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

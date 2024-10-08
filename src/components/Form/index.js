import React, { useState } from "react";
import { useNavigate,useParams  } from "react-router-dom";

function Form({ setUserDetails }) {
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
  const { questionNom } = useParams(); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails(formData);
    navigate("/result");
  };

  return (
    <div>
      <h1>Fill in the Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

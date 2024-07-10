import React, { useState } from 'react';
import './App.css';

const data = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    question: "What is a component?",
    answer: "A component is a reusable piece of UI that can be nested, managed, and handled independently."
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension that looks similar to XML or HTML and is used in React to describe the UI structure."
  }
];

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={index}>
          <div className="question" onClick={() => handleClick(index)}>
            {item.question}
          </div>
          {activeIndex === index && (
            <div className="answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>FAQ</h1>
      <Accordion data={data} />
    </div>
  );
}

export default App;

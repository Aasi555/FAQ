import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

const user1Data = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension that looks similar to XML or HTML and is used in React to describe the UI structure."
  }
];

const user2Data = [
  {
    question: "What is a component?",
    answer: "A component is a reusable piece of UI that can be nested, managed, and handled independently."
  },
  {
    question: "What is state in React?",
    answer: "State is an object that determines how that component renders & behaves."
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

const User1 = () => (
  <div>
    <h1>User 1 FAQ</h1>
    <Accordion data={user1Data} />
    <Link to="/user2">Go to User 2</Link>
  </div>
);

const User2 = () => (
  <div>
    <h1>User 2 FAQ</h1>
    <Accordion data={user2Data} />
    <Link to="/user1">Go to User 1</Link>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/user1">
            <User1 />
          </Route>
          <Route path="/user2">
            <User2 />
          </Route>
          <Route path="/">
            <h1>Welcome to the FAQ App</h1>
            <Link to="/user1">Go to User 1</Link>
            <br />
            <Link to="/user2">Go to User 2</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

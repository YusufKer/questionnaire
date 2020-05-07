import React,{useContext} from 'react';
import './App.css';
//importing Context
import {AnswersContext} from "./answersContext"

import Question from "./Question"

function App() {
  const x = useContext(AnswersContext)
  console.log(x)
  return (
    <div className="App">
      <h1>Questionnaire</h1>
      <Question/>
    </div>
  );
}

export default App;

import React,{useState} from 'react';
import './App.css';
import Question from "./Question"

function App() {
  const [answers, setAnswers] = useState([])
  const pushAnswer = (newAnswer) =>{
    setAnswers([...answers, newAnswer])
    console.log(answers)
  }
  return (
    <div className="App">
      <h1>Questionnaire</h1>
      <Question pushAnswer={pushAnswer}/>
    </div>
  );
}

export default App;

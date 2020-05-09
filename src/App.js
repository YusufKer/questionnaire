import React,{useState, useEffect} from 'react';
import './App.css';
import Question from "./Question"

function App() {

  const [answers, setAnswers] = useState([])
  const [getAnswers, setGetAnswers] = useState()

  const submitAnswer = (userAnswer) =>{
    setAnswers([...answers,userAnswer])
    console.log(answers)
  }
  useEffect(()=>{
    setGetAnswers(false)
  },[])

  return (
    <div className="App">
      <h1>Questionnaire</h1>
      <Question getAnswers={getAnswers} submitAnswer={submitAnswer} />
      <Question getAnswers={getAnswers} submitAnswer={submitAnswer} />

      <button onClick={()=>{
        setGetAnswers(true)
        }}>Submit</button>
    </div>
  );
}

export default App;

import React,{useState, useEffect} from 'react';
import './App.css';
import Question from "./Question"

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [answers, setAnswers] = useState([])
  const pushAnswer = (newAnswer) =>{
    setAnswers([...answers, newAnswer])
  }
  useEffect(()=>{
    console.log(answers)
  },[answers])
  //
  return (
    <div className="App">
      <h1>Questionnaire</h1>
      <Question id={1} submitted={submitted} pushAnswer={pushAnswer}/>
      <Question id={2} submitted={submitted} pushAnswer={pushAnswer}/>
      <Question id={3} submitted={submitted} pushAnswer={pushAnswer}/>
      <Question id={4} submitted={submitted} pushAnswer={pushAnswer}/>
      <Question id={5} submitted={submitted} pushAnswer={pushAnswer}/>
      <button onClick={()=>setSubmitted(!submitted)}>Submit</button>
    </div>
  );
}

export default App;

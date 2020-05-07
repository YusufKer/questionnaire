import React,{useState} from 'react'

const AnswersContext = React.createContext()

function AnswersContextProvider(props){
    const [answers, setAnswers] = useState([])
    const submitAnswer = (newAnswer) =>{
        setAnswers([ newAnswer, ...answers])
    }
    return(
        <AnswersContext.Provider value={{answers,submitAnswer}}>
            {props.children}
        </AnswersContext.Provider>
    )
}

export {AnswersContextProvider, AnswersContext}
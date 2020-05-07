import React,{useState, useEffect} from "react"

function Question(){
    const [answer, setAnswer] = useState("")
    const [selected, setSelected] = useState("")
    const selectAnswer = (e) =>{
        setSelected(e.target.value)
    }
    const checkAnswer = (e) =>{
        e.preventDefault()
        setAnswer(selected)
    }
    useEffect(()=>{
        alert(answer)
    },[answer])
    
    return(
        <div className="Question">
            <p>Question</p>
            <form  onSubmit={checkAnswer}>
                <input
                    type="radio"
                    value="one"
                    name="answer"
                    onChange={selectAnswer}
                />
                <label>one</label><br/>
                <input
                    type="radio"
                    value="two"
                    name="answer"
                    onChange={selectAnswer}
                />
                <label>two</label><br/>
                <input
                    type="radio"
                    value="three"
                    name="answer"
                    onChange={selectAnswer}
                />
                <label>three</label><br/>
                <input
                    type="radio"
                    value="four"
                    name="answer"
                    onChange={selectAnswer}
                />
                <label>four</label><br/>
                <button>Submit</button>
            </form>
            
        </div>
    )
}

export default Question
import React,{useState} from "react"

function Question(){
    const [answer, setAnswer] = useState("answer")
    const checkAnswer = (e) =>{
        e.preventDefault()
        console.log(e.target.name)
    }
    return(
        <div className="Question">
            <p>Question</p>
            <form  onSubmit={checkAnswer}>
                <input
                    type="radio"
                    value="one"
                    name="answer"
                />
                <label>one</label><br/>
                <input
                    type="radio"
                    value="two"
                    name="answer"
                />
                <label>two</label><br/>
                <input
                    type="radio"
                    value="three"
                    name="answer"
                />
                <label>three</label><br/>
                <input
                    type="radio"
                    value="four"
                    name="answer"
                />
                <label>four</label><br/>
                <button>Submit</button>
            </form>
            
        </div>
    )
}

export default Question
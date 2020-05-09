import React,{useState,useEffect} from "react"

function Question({getAnswers,submitAnswer}){

    const [selected, setSelected] = useState(null)
    const select = (e) =>{
        setSelected(e.target.value)
    }
    useEffect(()=>{
        if(getAnswers){
            submitAnswer(selected)
        }
    },[selected])
    return(
        <div className="Question">
            <p>Question</p>
            <form>
                <input
                    type="radio"
                    value="one"
                    name="answer"
                    onChange={select}
                />
                <label>one</label><br/>
                <input
                    type="radio"
                    value="two"
                    name="answer"
                    onChange={select}
                />
                <label>two</label><br/>
                <input
                    type="radio"
                    value="three"
                    name="answer"
                    onChange={select}
                />
                <label>three</label><br/>
                <input
                    type="radio"
                    value="four"
                    name="answer"
                    onChange={select}
                />
                <label>four</label><br/>
            </form>
        </div>
    )
}

export default Question
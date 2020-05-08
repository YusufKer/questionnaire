import React,{useState,useEffect} from "react"

function Question({submitted,id,pushAnswer}){
    const [userSelected,setUserSelected] = useState({id})
    const selectAnswer=(e)=>{
        setUserSelected({...userSelected,answer:e.target.value})
    }
    useEffect(()=>{
        pushAnswer(userSelected)
    },[submitted])
    return(
        <div className="Question">
            <p>Question</p>
            <form>
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
            </form>
        </div>
    )
}

export default Question
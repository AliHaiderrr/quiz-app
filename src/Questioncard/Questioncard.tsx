import React, { useState } from "react";
import { QuestionPropstype } from "./../Types/type";

 const QuestionCard: React.FC<QuestionPropstype> = ({question , option, callback}) =>{


let [selectedAns, setSelectedAns] = useState("");

const handelSelected = (evt: any)=>{


    setSelectedAns(evt.target.value)
}

    return(
        <div className="question_container">

<div className="question">
<h4>{question}</h4>
</div>

<form onSubmit={(evt: React.FormEvent<EventTarget>)=>callback(evt, selectedAns)} className="form_container">

    {
option.map((opt: string, ind: number)=>{


    return ( 
        <div key={ind}>
<label className="radio">

<input name="opt"
 type="radio"
  required 
  value={opt}
  checked={selectedAns === opt}
  onChange={handelSelected}
  />
  {opt}
</label>
            
        </div>
    )
})
    

}
<input type="submit" className="submit"/>
</form>

        </div>
    )
}
export default QuestionCard
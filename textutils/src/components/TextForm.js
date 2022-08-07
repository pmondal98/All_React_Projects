import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpperCaseClick = ()=>{
    // alert("Upper Case  button clicked")
    var newtext=text.toUpperCase();
    setText(newtext);
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const [text, setText] = useState("Enter your text here");
  return (
    <div>
    <div className="mb-3">
        <label htmlFor="myBox" className="form-label">{props.heading}</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert To Upper Case</button>
    </div>
  )
}

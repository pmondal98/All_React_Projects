import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCaseClick = () => {
    // console.log("uppercase was clicked");
    var newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowerCaseClick = () => {
    // console.log("lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const [text, setText] = useState("Enter your text here");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>
          Convert To Upper Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

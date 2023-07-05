import React, { useState } from 'react'

export default function TextForm(props) {

  

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase" , "success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase" , "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // state
  const [text, setText] = useState("enter text here")
  return (
    <>
    <div style={{color: props.mode==='dark' ? 'white' : 'black'}} className='container'>
    <h1 >{props.heading}</h1>
    <div className="form-group">
    <textarea style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white', color: props.mode==='dark' ? 'white' : 'black'}}  onChange={handleOnChange} value={text} className="form-control" id="myBox" rows="8"></textarea>
    </div>
    <button onClick={handleUpClick} className="btn my-3 btn-primary">Convert to Uppercase</button>
    <button onClick={handleLoClick} className="btn mx-2 my-3 btn-primary">Convert to lowercase</button>
    </div>
    <div style={{color: props.mode==='dark' ? 'white' : 'black'}} className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
    );
}
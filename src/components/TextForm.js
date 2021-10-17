import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if (newText) {
            props.showAlert("Converted to uppercase.", "success");
        }
    }

    const handleLpClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if (newText) {
            props.showAlert("Converted to lowercase.", "success");
        }
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        if (text) {
            props.showAlert("Text Cleared.", "success");
        }
    }

    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnchange}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLpClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h6>No of words: {text.split(' ').filter((element) => { return element.length !== 0 }).length}</h6>
                <h6>No of characters: {text.length}</h6>
            </div>
        </>
    )
}

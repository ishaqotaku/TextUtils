import React, {useState} from "react";

export default function TextForm(props) {
  const [text, setText] = useState("")
  const handleOnChange = (event) => setText(event.target.value);

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase","success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase","success");
  };

  const handleClClick = () => {
    setText("");
    props.showAlert("Text Cleared","success")
  };

  const handleESClick = () => {
    let newText = text.split(/[ ]+/);

    if(newText[0] === "")
      newText.shift();

    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success");
  }

  const handleCaClick = () => {
    let arrText = text.toLowerCase().split(" ");
    let newText = arrText.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalized Case","success");
  }

  const textLength = () => {
    let newText = text.split(" ").filter(item => item);
    return newText.length;
  };

  return (
  <div>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text} placeholder="Enter your Text Here"></textarea>
        </div>
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleCaClick}>Convert to Capitalize Case</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleESClick}>Remove Extra Spaces</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleClClick}>Clear</button>
    </div>
    <div className="container my-4">
        <h2>Text Summary</h2>
        <p>{textLength()} Words and {text.length} characters</p>
        <p>{0.008 * textLength()} Minutes to Read</p>
    </div>
    <div className="container my-4">
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
  </div>
  );
}

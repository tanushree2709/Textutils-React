import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=(event)=>{
        // console.log("Uppercase was clicked " +text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase.", "success")
    }
    const handleLoClick=(event)=>{
        // console.log("Lowercase was clicked " +text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase.", "success")
    }
    const handleClearText=(event)=>{
        // console.log("Text is cleared " +text);
        let newText='';
        setText(newText)
        props.showAlert("Text has been cleared.", "success")
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard.", "success")
    }
   const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
   } 

    const [text, setText]=useState('Enter the text here');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3 my-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}

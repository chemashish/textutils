import React , { useState }from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        
        setText("You have clicked on handleUpClick")
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick=()=>{
        
        setText("You have clicked on handleUpClick")
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick=()=>{
        
        setText("You have clicked on handleUpClick")
        let newText=''
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange=(event)=>{
        console.log("Onchange");
        setText(event.target.value)
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }
    const [text, setText] = useState('');
  return (
     <>
        <div className="container" >
            <h1 style={{color:props.mode==='dark'?'white':'#042743'}}>{props.heading }</h1> 
            <div className="mb-3 ">
            <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-3 " style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} character</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something to preview here"}</p>
        </div>
     </>
    
  )
}

import React, { useState } from 'react'
import './style.scss'
const TextEditor = () => {
    let [value, setValue] = useState("");
    let [style, setStyle] = useState(false);
    let [fontValue,setFontValue] =useState("14")
    /*Input Value Capture*/
    let inputValue = (e) => {
        e.preventDefault();
        setValue(e.target.value)
    }
    /*Text Bold*/
    let BoldText = () => {
        setStyle(!style)
    }
    /*Italic */
    let Italic=()=>{
        let text = document.getElementById("inputText");
        text.classList.toggle("italic");  
    }

    return (
        <>
            <button className='btn btn-primary' onClick={BoldText}>B</button>
            <button className='btn btn-primary' onClick={Italic}>I</button>
            <input type="text" value={fontValue} />
            <textarea value={value} id="inputText" cols="30" rows="10" className={'form-control'} 
            style={{ fontWeight: style ? "600" : "400"}} 
            onChange={inputValue}></textarea>
        </>
    )
}

export default TextEditor

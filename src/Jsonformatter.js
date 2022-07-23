import React from 'react'
import { useState } from 'react'
import './App.css'




function Jsonformatter() {

  const [inputarea, setInputarea] = useState();
  const [outputarea, setOutputarea] = useState();
  
  
  function validate() {
    try {
      JSON.parse(inputarea);
      const formatter = JSON.stringify(JSON.parse(inputarea),null,4);
      setOutputarea(formatter)
      return true;
    } catch(error){
      setOutputarea(error.message)
      return false;
    }
    };
 function clearJsonFormated() {
    setOutputarea('Your JSON will appear here...');
  }

  return (
    <>
      <div className="container">
        <textarea value={inputarea} onChange={(e) => setInputarea(e.target.value)} className="large-area large-area--input" placeholder="Enter your JSON here..." />
        <div className="controls">
          <button onClick={validate} type="button" className="controls__button controls__button--format">Format</button>
          <button onClick={clearJsonFormated} type="button" className="controls__button controls__button--format">clear</button>
        </div>
        <textarea value={outputarea} readOnly className="large-area large-area--output" placeholder="Your JSON will appear here..." />
      </div>
    </>
  )
}

export default Jsonformatter

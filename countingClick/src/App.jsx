import { useState } from "react"
//import app from "./app.css"
import "./app.css"

function App() {

  let [counter,setCounter]= useState(10)
  
  const addValue=()=>{
    setCounter(counter+1)
  }

  const removeValue=()=>{
    setCounter(counter-1)
  }

  const check=()=>{
    if(counter<0){
      document.querySelector("context").innerHTML="Your click now dcreasing"
    }
    if(counter>20){
      document.querySelector("context").innerHTML="Your click now dcreasing"
    }
  }

  if(counter<=0){

    return (
      <>
        <h1>welcome to code</h1>
        <h2> Counter value :{counter}</h2>
  
        <button onClick={addValue }>Add value{counter}</button>
        <br/>
        <button onClick={check}>Value removed{counter}</button>
  
        <div id="context">now:</div>
      </>
    )
  }
  else if(counter>=20){
    return (
      <>
        <h1>welcome to code</h1>
        <h2> Counter value :{counter}</h2>
  
        <button onClick={check}>Add value{counter}</button>
        <br/>
        <button onClick={removeValue}>Value removed{counter}</button>
  
        <div id="context">Now:</div>
      </>
    )
  }
  else{
    return (
      <>
        <h1>welcome to code</h1>
        <h2> Counter value :{counter}</h2>
  
        <button onClick={addValue }>Add value{counter}</button>
        <br/>
        <button onClick={removeValue}>Value removed{counter}</button>
  
        <div id="context">Now:{check}</div>
      </>
    )

  }
  
}

export default App

import React, {useState} from 'react'

const Input = (props) => {

  const eventHandler = (event) => {
    let copy = props.userInput
    if(event.key === "Backspace"){
      let copy2 = copy.slice(0, -1)
      props.setUserInput(copy2)
    } else if(event.key === "Shift" || event.key === "Enter"){
      props.setUserInput(copy)
    } else {
      props.setUserInput( copy+= event.key)
    }
  }
  let answer = ""
  const submitHandler = (event) => {
    event.preventDefault()
    if(props.correctWordsArray[0] !== props.userInput){
      props.setUserInput("")
    } else if(props.correctWordsArray[0] === props.userInput){
      let copy = props.score
      props.setScore(copy += 1)
      props.setUserInput("")
    } else {
      props.setUserInput("")
    }
  }
  return(
    <div className="inputBox">
      <h1 className="wrongAnswer">{answer}</h1>
      <h1>{props.userInput}</h1>  
      <form onSubmit={submitHandler}>
        <input type="text" onKeyDown={eventHandler} className="inputValue" autoFocus="autofocus"/>
        <input className="inputButton" type="submit" ></input>
      </form>
      
    </div>
  )
}
export default Input
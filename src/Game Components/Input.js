import React, {useState} from 'react'
import { currentWordsArray } from './gameData'

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
  
  const submitHandler = (event) => {
    event.preventDefault()
    console.log("user input", props.userInput)
    if(props.currentWordsArray[0] !== props.userInput){
      if(props.score > 0){
        let copy = props.score
        props.setScore(copy -= 1)
        props.setUserInput("")
        props.setCat("https://upload.wikimedia.org/wikipedia/commons/3/33/Hannibal_Poenaru_-_Nasty_cat_%21_%28by-sa%29.jpg")
      } else {
        props.setUserInput("")
        props.setCat("https://upload.wikimedia.org/wikipedia/commons/3/33/Hannibal_Poenaru_-_Nasty_cat_%21_%28by-sa%29.jpg")
      }
    } else if(props.currentWordsArray[0] === props.userInput){
      let copy = props.score
      props.setScore(copy += 1)
      props.correctWordsArray.push(props.userInput)
      props.setUserInput("")
      props.setCat("https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg")
    } else {
      props.setUserInput("")
      props.setCat("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/June_odd-eyed-cat_cropped.jpg/1424px-June_odd-eyed-cat_cropped.jpg")
    }
  }
  //<h1 className="wrongAnswer">{answer}</h1>
  return(
    <div > 

      <form className="inputBox" onSubmit={submitHandler}>
        <span>
          <img className="cat" src={props.cat} alt="an image of a cat"></img>
          <input name="input" value={props.userInput} type="text" onKeyDown={eventHandler} className="inputValue" />
          <img className="cat" src={props.cat} alt="an image of a cat"></img>
        </span>
        
        <input className="inputButton" type="submit"></input>
        
      </form>
    </div>
  )
}
export default Input
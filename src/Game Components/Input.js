import React, { useEffect } from 'react';
import {
  userInput,
  setUserInput,
  currentWordsArray,
  setScore,
  score,
} from './gameData';

const Input = (props) => {
  useEffect(() => {
    window.addEventListener('keydown', eventHandler);
    return () => window.removeEventListener('keydown', (event) => {});
  }, []);

  const eventHandler = (event) => {
    console.log('start: ' + userInput);
    let copy = userInput;
    if (event.key === 'Backspace') {
      let copy2 = copy.slice(0, -1);
      setUserInput(copy2);
    } else if (event.key === 'Shift' || event.key === 'Enter') {
      setUserInput(copy);
      submitHandler(event);
    } else {
      console.log(copy + event.key);
      setUserInput((copy += event.key));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('user input', userInput);
    if (currentWordsArray[0] !== userInput) {
      if (score > 0) {
        let copy = score;
        setScore((copy -= 1));
        setUserInput('');
        props.setCat(
          'https://upload.wikimedia.org/wikipedia/commons/3/33/Hannibal_Poenaru_-_Nasty_cat_%21_%28by-sa%29.jpg',
        );
      } else {
        setUserInput('');
        props.setCat(
          'https://upload.wikimedia.org/wikipedia/commons/3/33/Hannibal_Poenaru_-_Nasty_cat_%21_%28by-sa%29.jpg',
        );
      }
    } else if (currentWordsArray[0] === userInput) {
      let copy = score;
      setScore((copy += 1));
      props.correctWordsArray.push(userInput);
      setUserInput('');
      props.setCat(
        'https://upload.wikimedia.org/wikipedia/commons/0/04/So_happy_smiling_cat.jpg',
      );
    } else {
      setUserInput('');
      props.setCat(
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/June_odd-eyed-cat_cropped.jpg/1424px-June_odd-eyed-cat_cropped.jpg',
      );
    }
  };

  //<h1 className="wrongAnswer">{answer}</h1>
  return (
    <div className="inputBox">
      <img className="cat" src={props.cat} alt="an image of a cat"></img>
      <div className="inputValue">
        <p>{userInput}</p>
      </div>
      <img className="cat" src={props.cat} alt="an image of a cat"></img>
    </div>
  );
};

export default Input;

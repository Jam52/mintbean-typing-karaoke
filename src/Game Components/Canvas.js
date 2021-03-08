import React, { useState } from 'react';

const Canvas = (props) => {
  const {
    revealLength,
    revealIntervalLength,
    numWordsRevealed,
  } = props.gameSettings;

  //toDo: funtion to randomly grab new word(s) and add to correctWords Array

  //check if timer is at 0 and set isGameFinished to true
  console.log(props.timeLeft);
  if (props.timeLeft <= 0) {
    props.endGameHandler();
  }
  return (
    //toDo: checks if timer is inside reveal window and calls functions to get words and reveal them

    <div>
      <h1>Canvas</h1>
    </div>
  );
};
export default Canvas;

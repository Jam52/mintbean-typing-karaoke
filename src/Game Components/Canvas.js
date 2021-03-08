import React, { useState } from 'react';

const Canvas = (props) => {
  const {
    revealLength,
    revealIntervalLength,
    numWordsRevealed,
  } = props.gameSettings;

  //toDo: funtion to randomly grab new word(s) and add to correctWords Array

  return (
    //toDo: checks if timer is inside reveal window and calls functions to get words and reveal them

    //toDo: check is timer is at 0 and isGameFinished to true
    <div>
      <h1>Canvas</h1>
    </div>
  );
};
export default Canvas;

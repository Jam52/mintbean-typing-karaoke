import React from 'react';

const Canvas = (props) => {
  let areWordsVisible = false;

  //shows how much time has passed since the start of the game
  const intervalElapsed =
    (30000 - props.timeLeft) % props.gameSettings.revealIntervalLength;

  //check if intervalElapsed is at the start of the reveal window then call updateCurrentWords
  if (intervalElapsed === 0) {
    props.updateCurrentWords();
  }

  //check if intervalElapsed within reveal length set areWordsVisible to true
  if (
    intervalElapsed <= props.gameSettings.revealLength &&
    intervalElapsed > 0
  ) {
    console.log('true');
    areWordsVisible = true;
  }

  // check if timer is at 0 and set isGameFinished to true
  if (props.timeLeft <= 0) {
    props.endGameHandler();
  }

  //maps current words to <p>'s
  const words = props.currentWords.map((word) => {
    return <p>{word}</p>;
  });

  return <div>{areWordsVisible ? words : <p>Can you Remember?!?!</p>}</div>;
};
export default Canvas;

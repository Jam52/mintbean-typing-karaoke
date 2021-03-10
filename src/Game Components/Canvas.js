import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card } from '@material-ui/core';

let seeWords = false

const Canvas = (props) => {
  let areWordsVisible = false;

  //shows how much time has passed since the start of the game
  const intervalElapsed =
    (30000 - props.timeLeft) % props.gameSettings.revealIntervalLength;

  //check if intervalElapsed is at the start of the reveal window then call updateCurrentWords
  if (intervalElapsed === 0) {
    props.updateCurrentWords();
    console.log("IS WORDS VISIBLE TRUE OR FALSE:", areWordsVisible) // this is always false

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
    return <p style={{...styles.cardText, ...styles.word}} >{word}</p>;
  });

  return (
    <div style={styles.container}>
      <ReactCardFlip isFlipped={areWordsVisible} flipDirection="horizontal" style={{flex:1, display: 'flex',    border: '1px solid black',}}>
        <Card style={styles.cardSize} raised='true'>
          <div style={styles.cardInner}>
            <p style={styles.cardText}>Can you</p>
            <p style={styles.cardText}>Remember?</p>
          </div>
          
        </Card>
        <Card style={styles.cardSize} raised='true'>
          <div style={styles.cardInner}>
            {words} 
          </div>
        </Card >
      </ReactCardFlip>
    </div>
    
  )
};


const styles = {
  container: {
    flex: 1, 
    display: 'flex', 
    alignSelf: 'center', 
    justifyContent: 'center', 
  }, 
  cardSize: {
    minHeight: 300,
    minWidth: 200, 
    backgroundColor: '#182436'
    
  },
  cardInner: {
    border: '1px solid blue', 
    flex: 1, 
    margin: 10, 
    height: 280, 
    paddingTop: 70, 
    boxSizing: 'border-box',
    backgroundColor: '#e4e8eb'
  },
  cardText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 700,
    padding: 'auto'
  }, 
  word: {
    paddingTop: 10,
    fontSize: 30
  }

}


export default Canvas;

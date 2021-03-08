import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Canvas from './Canvas';
import StartGame from './StartGame';
import Score from './Score'




const GamePage = () => {
  //words fetched from api when game is started (so there are new words each time)
  const [wordsData, setWordsData] = useState(null);
  const [gameSettings, setGameSettings] = useState({
    revealLength: 500,
    revealIntervalLength: 3000,
    numWordsRevealed: 1,
    isGameRunning: false,
  });
  const [correctWordsArray, setCorrectWordsArray] = useState([]);
  const [score, setScore] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isGameFinished, setIsGameFinished] = useState(false);
  //toDo: timer state, could use a hook

  //toDo: keyboard listener function listends to keyboard and updates userInput, checks if word matches word in correctWordsArray and update score

  //toDo: gameStartHandler, sets wordsData, updates Game Settings(can be expanded), Starts timer starts listener for keybord input
  const gameStartHandler = () => {};

  return(
    // View of screen without the game title
    <div style={styles.content}>
      {/* Top of page where Score, Timer, link to landing page, and settings are located*/} 
      <div style={{...styles.top, ...styles.container}}>

        {/* Score section */}
        <div style={{flex: 4, ...styles.container}}>
          <p style={{...styles.score, ...styles.container}}>
            Score: 0
          </p>
        </div>

        {/* Timer section */}
        <div style={{flex: 4, ...styles.container}}>
          <p style={{...styles.score, ...styles.container}}>
            00:00
          </p>
        </div>

        {/* Link to Landing Page */}
        <div style={styles.container}>
          <Link to="/about" style={{flex: 1, ...styles.container}}>Goes to landing page</Link>
        </div>

        {/* Settings Section */}
        <div style={{flex: 1,...styles.container}}>
          <p style={{...styles.link,...styles.container}}>
            settings
          </p>
        </div>
      </div>

      {/* Game content section */}
      <div style={{...styles.container, ...styles.gameSection}}>

        {gameSettings.isGameRunning ? (
          <Canvas
            wordsData={wordsData}
            gameSettings={gameSettings}
            setCorrectWordsArray={setCorrectWordsArray}
            setIsGameFinished={setIsGameFinished}
          />
        ) : isGameFinished ? (
          <Score score={score} />
        ) : (
          <StartGame />
        )}
      </div>

      {/* User Input Section */}
      <div style={{...styles.container, ...styles.inputSection}}>
        <div style={styles.container}>user input here</div>
      </div>
      
      {/* Footer Section  */}
      <div style={{...styles.container, ...styles.footer}}>
        <div style={styles.container}>Footer is here</div>
      </div>
    </div>
  )
}


// CSS STYLING 
const styles = {
  content:{
    display: 'flex', 
    flex:1, 
    flexDirection: 'column'
  },
  top: {
    display: "flex",
    flex: .5, 
    flexDirection: 'row'
  },
  score: {
    alignself: 'flex-start'
  },
  link: {
    alignself: 'flex-end',
    flex: 1
  }, 
  container: {
    // to see the layout better 
    border: 1,
    borderColor: 'black',
    borderStyle: 'solid'
  }, 
  gameSection: {
    flex: 7,
    display: 'flex',
  },
  inputSection: {
    flex: 1
  },
  footer:{
    flex: .5
  }
  
}

export default GamePage;

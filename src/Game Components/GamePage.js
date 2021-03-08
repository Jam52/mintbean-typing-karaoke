import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Canvas from './Canvas';
import StartGame from './StartGame';
import Score from './Score';
import useCountDown from 'react-countdown-hook';

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

  // useCountDown hook, initial values of 30 seconds (30000 milliseconds) and increments of 100 milliseconds
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(30000, 100);

  //toDo: keyboard listener function listends to keyboard and updates userInput, checks if word matches word in correctWordsArray and update score

  //toDo: gameStartHandler, sets wordsData, updates Game Settings(can be expanded), Starts timer starts listener for keybord input
  const gameStartHandler = () => {};

  return (
    <div style={styles.content}>
      <div style={{ ...styles.top, ...styles.container }}>
        {/* Top of page  Score, link to landing page, and settings*/}

        {/* Score section */}
        <div style={{ flex: 8, ...styles.container }}>
          <p style={{ ...styles.score, ...styles.container }}>Score: 0</p>
        </div>
        <div style={styles.container}>
          <Link to="/about" style={{ flex: 1, ...styles.container }}>
            Goes to landing page
          </Link>
        </div>

        <div style={{ flex: 1, ...styles.container }}>
          <p style={{ ...styles.link, ...styles.container }}>settings</p>
        </div>
      </div>

      <div style={{ ...styles.container, ...styles.gameSection }}>
        {/* Game content */}
        <div>
          <h1>Game Page</h1>
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
      </div>

      <div style={{ ...styles.container, ...styles.inputSection }}>
        {/* User Input Section */}
        <div style={styles.container}>user input here</div>
      </div>

      <div style={{ ...styles.container, ...styles.footer }}>
        <div style={styles.container}>Footer is here</div>
      </div>
    </div>
  );
};

const styles = {
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  top: {
    display: 'flex',
    flex: 0.5,
    flexDirection: 'row',
  },
  score: {
    alignself: 'flex-start',
  },
  link: {
    alignself: 'flex-end',
    flex: 1,
  },
  container: {
    // to see the layout better
    border: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  gameSection: {
    flex: 7,
  },
  inputSection: {
    flex: 1,
  },
  footer: {
    flex: 0.5,
  },
};

export default GamePage;

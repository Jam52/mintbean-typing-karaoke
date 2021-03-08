import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Canvas from './Canvas';
import StartGame from './StartGame';
import Score from './Score';
import useCountDown from 'react-countdown-hook';
import { fetchRandomWords } from '../services/randomWordApi';

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

  // useCountDown hook, initial values of 30 seconds (30000 milliseconds) and increments of 100 milliseconds, timeleft will be in milliseconds
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(5000, 100);

  //toDo: keyboard listener function listends to keyboard and updates userInput, checks if word matches word in correctWordsArray and update score

  //toDo: gameStartHandler, sets wordsData, updates Game Settings(can be expanded), Starts timer starts listener for keybord input
  const gameStartHandler = async () => {
    //fetches word data from api with max length of 4
    const wordDataFromApi = await fetchRandomWords(4);
    console.log(wordDataFromApi);
    setWordsData(wordDataFromApi);

    //starts timer and setsGame running to true to display Canvas component
    start();
    setGameSettings({ ...gameSettings, isGameRunning: true });
    setIsGameFinished(false);
  };

  //endGameHandler sets isGameFinished to true which will display the score component
  const endGameHandler = () => {
    setIsGameFinished(true);
  };

  return (
    <div style={styles.content}>
      <div style={{ ...styles.top, ...styles.container }}>
        {/* Top of page  Score, link to landing page, and settings*/}

        {/* Score section */}
        <div style={{ flex: 8, ...styles.container }}>
          <p style={{ ...styles.score, ...styles.container }}>Score: 0</p>
        </div>

        {/* Timer section */}
        <div style={{ flex: 4, ...styles.container }}>
          <p style={{ ...styles.score, ...styles.container }}>
            {Math.floor((timeLeft / 1000) % 60)}:
            {parseInt((timeLeft % 1000) / 10)}
          </p>
        </div>

        {/* Link to Landing Page */}
        <div style={styles.container}>
          <Link to="/about" style={{ flex: 1, ...styles.container }}>
            Goes to landing page
          </Link>
        </div>

        {/* Settings Section */}
        <div style={{ flex: 1, ...styles.container }}>
          <p style={{ ...styles.link, ...styles.container }}>settings</p>
        </div>
      </div>

      {/* Game content section */}
      <div style={{ ...styles.container, ...styles.gameSection }}>
        <div>
          <h1>Game Page</h1>
          {isGameFinished ? (
            <Score score={score} />
          ) : gameSettings.isGameRunning ? (
            <Canvas
              wordsData={wordsData}
              gameSettings={gameSettings}
              setCorrectWordsArray={setCorrectWordsArray}
              endGameHandler={endGameHandler}
              timeLeft={timeLeft}
            />
          ) : (
            <StartGame start={gameStartHandler} />
          )}
        </div>
      </div>

      {/* User Input Section */}
      <div style={{ ...styles.container, ...styles.inputSection }}>
        <div style={styles.container}>user input here</div>
      </div>

      {/* Footer Section  */}
      <div style={{ ...styles.container, ...styles.footer }}>
        <div style={styles.container}>Footer is here</div>
      </div>
    </div>
  );
};

// CSS STYLING
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

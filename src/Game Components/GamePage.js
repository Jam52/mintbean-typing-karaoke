import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Canvas from './Canvas';
import StartGame from './StartGame';
import Score from './Score';
import Input from './Input';
import useCountDown from 'react-countdown-hook';
import { fetchRandomWords } from '../services/randomWordApi';
import {
  currentWordsArray,
  correctWordsArray,
  updateCurrentWords,
} from './gameData';

const GamePage = () => {
  //words fetched from api when game is started (so there are new words each time)
  const [wordsData, setWordsData] = useState(null);
  const [gameSettings, setGameSettings] = useState({
    revealLength: 1000,
    revealIntervalLength: 3000,
    numWordsRevealed: 2,
    isGameRunning: false,
  });
  // const [correctWordsArray, setCorrectWords] = useState([]);
  const [score, setScore] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isGameFinished, setIsGameFinished] = useState(false);

  // useCountDown hook, initial values of 30 seconds (30000 milliseconds) and increments of 100 milliseconds, timeleft will be in milliseconds
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(30000, 100);

  //toDo: keyboard listener function listends to keyboard and updates userInput, checks if word matches word in correctWordsArray and update score

  //Sets wordsData, updates Game Settings(can be expanded), Starts timer starts listener for keybord input
  const gameStartHandler = async () => {
    const wordDataFromApi = await fetchRandomWords(4);
    setWordsData(wordDataFromApi);
    start();
    setGameSettings({ ...gameSettings, isGameRunning: true });
    setIsGameFinished(false);
  };

  //endGameHandler sets isGameFinished to true which will display the score component
  const endGameHandler = () => {
    setIsGameFinished(true);
  };

  //updateCurrentWordsHandler function to add correct word to array
  const updateCurrentWordsHandler = () => {
    updateCurrentWords(wordsData, gameSettings.numWordsRevealed);
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
          {isGameFinished ? (
            <Score score={score} />
          ) : gameSettings.isGameRunning ? (
            <Canvas
              currentWords={currentWordsArray}
              gameSettings={gameSettings}
              endGameHandler={endGameHandler}
              updateCurrentWords={updateCurrentWordsHandler}
              timeLeft={timeLeft}
            />
          ) : (
            <StartGame start={gameStartHandler} />
          )}
        </div>
      </div>

      <div style={{ ...styles.container, ...styles.inputSection }}>
        {/* User Input Section */}
        <div style={styles.container}>
          <Input
            setUserInput={setUserInput}
            userInput={userInput}
            correctWordsArray={correctWordsArray}
            setScore={setScore}
            score={score}
          />
        </div>
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
    display: 'flex',
  },
  inputSection: {
    flex: 1,
  },
  footer: {
    flex: 0.5,
  },
};

export default GamePage;

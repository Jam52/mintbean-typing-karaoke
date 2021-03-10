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
  score,
  userInput,
  setUserInput,
} from './gameData';

const GamePage = () => {
  //words fetched from api when game is started (so there are new words each time)
  const [wordsData, setWordsData] = useState(null);
  const [gameSettings, setGameSettings] = useState({
    revealLength: 1000,
    revealIntervalLength: 3000,
    numWordsRevealed: 1,
    isGameRunning: false,
  });
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [cat, setCat] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/June_odd-eyed-cat_cropped.jpg/1424px-June_odd-eyed-cat_cropped.jpg',
  );

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
      <div style={{ ...styles.top }}>
        {/* Top of page  Score, link to landing page, and settings*/}

        {/* Score section */}
        <div style={{ flex: 4 }}>
          <p style={{ ...styles.score }}>
            <Score score={score} />
          </p>
        </div>

        {/* Timer section */}
        <div style={{ flex: 2 }}>
          <p style={{ ...styles.score, textAlign: 'center' }}>
            {Math.floor((timeLeft / 1000) % 60)}:
            {parseInt((timeLeft % 1000) / 10)}
          </p>
        </div>

        {/* Link to Landing Page */}
        <div
          style={{
            flex: 3,
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'right',
          }}
        >
          <Link to="/about">
            <p style={styles.aboutLink}>About Us</p>
          </Link>
        </div>

        {/* Settings Section */}
        <div style={{ flex: 1, display: 'flex' }}>
          <p style={{ ...styles.link, textAlign: 'right', paddingRight: 15 }}>
            Settings
          </p>
        </div>
      </div>

      {/* Game content section */}
      <div style={{ ...styles.gameSection }}>
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

      <div style={{ ...styles.inputSection }}>
        <h3>Enter your words in the field below and press enter to submit</h3>
        {/* User Input Section */}

        <Input
          setUserInput={(input) => {
            console.log('ingamepage: ' + input + userInput);
            setUserInput(userInput + input);
          }}
          userInput={userInput}
          currentWordsArray={currentWordsArray}
          correctWordsArray={correctWordsArray}
          setCat={setCat}
          cat={cat}
          isGameRunnning={gameSettings.isGameRunning}
        />
      </div>

      {/* Footer Section  */}
      <div style={{ ...styles.footer }}></div>
    </div>
  );
};

// CSS STYLING
const styles = {
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    borderTop: '1px solid black',
    backgroundColor: '#806b62',
    color: 'white',
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
  aboutLink: {
    color: 'white',
    alignself: 'right',
  },
  gameSection: {
    flex: 7,
    display: 'flex',
  },
  inputSection: {
    backgroundColor: '#eddbca',
  },
  footer: {
    flex: 0.5,
    backgroundColor: '#182436',
  },
};

export default GamePage;

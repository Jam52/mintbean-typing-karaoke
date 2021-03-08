<<<<<<< HEAD
import React, { useState } from 'react';
import Canvas from './Canvas';
import StartGame from './StartGame';
=======
import React from 'react'
import { Link } from 'react-router-dom'
>>>>>>> master

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

  return (
    <div>
      <h1>Game Page</h1>
<<<<<<< HEAD
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
=======
      <Link to="/">Goes to landing page. landing page image/text here</Link>
>>>>>>> master
    </div>
  );
};
export default GamePage;

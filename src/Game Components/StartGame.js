import React from 'react';

const StartGame = (props) => {
  return (
    <div>
      <h1 onClick={props.start}>Start Game Button</h1>
    </div>
  );
};
export default StartGame;

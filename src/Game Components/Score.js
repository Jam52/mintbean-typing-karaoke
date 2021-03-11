import React from 'react';

const Score = (props) => {
  return (
    <div>
      <p style={styles.scoreText}>Score: {props.score}</p>
    </div>
  );
};

const styles = {
  scoreText: {
    paddingLeft: 15,
  },
};
export default Score;

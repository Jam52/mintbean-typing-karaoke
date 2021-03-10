import React from 'react';

const StartGame = (props) => {

  return(
    <div style={styles.container}>
        <button style={styles.button} onClick={props.start}>Start</button>
    </div>
  )
}

const styles = {
  container: {
    flex: 1, 
    display: 'flex', 
    alignSelf: 'center', 
    justifyContent: 'center', 

  }, 
  button: {
    borderWidth: 1,
    borderColor: 'black',
    border: 'solid',
    borderRadius: '50%',

    height: 200, 
    width: 200,
  }
}

export default StartGame
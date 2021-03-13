import React from 'react';

const StartGame = (props) => {

  return(
    <div style={styles.container}>
        <button style={styles.button} onClick={props.start}>
          <p style={{color: 'white'}}>Start</p>
        </button>
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
    borderWidth: .5,
    borderColor: 'black',
    border: 'solid',
    borderRadius: '50%',

    height: 200, 
    width: 200,

    color: '#131e2e',
    backgroundColor: '#182436',
    fontSize: 20
  }
}

export default StartGame
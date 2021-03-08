import React from 'react'

const StartGame = () => {

  return(
    <div style={{flex: 1, display: 'flex', alignSelf: 'center', justifyContent: 'center', ...container}}>
        <button style={styles.button}>Start</button>
    </div>
  )
}
const container = {
  // to see the layout better 
  border: 1,
  borderColor: 'black',
  borderStyle: 'solid'
}

const styles = {
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
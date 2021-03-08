import React from 'react'
import { Link } from 'react-router-dom'



const GamePage = () => {

  return(
    <div style={styles.content}>

      <div style={{...styles.top, ...styles.container}}>
        {/* Top of page  Score, link to landing page, and settings*/}

        {/* Score section */}
        <div style={{flex: 8, ...styles.container}}>
          <p style={{...styles.score, ...styles.container}}>
            Score: 0
          </p>
        </div>
        <div style={styles.container}>
          <Link to="/about" style={{flex: 1, ...styles.container}}>Goes to landing page</Link>
        </div>
       
        <div style={{flex: 1,...styles.container}}>
          <p style={{...styles.link,...styles.container}}>
            settings
          </p>
        </div>
      </div>

      <div style={{...styles.container, ...styles.gameSection}}>
        {/* Game content */}
        <p style={styles.container}>games goes here</p>
      </div>
      
      <div style={{...styles.container, ...styles.inputSection}}>
        {/* User Input Section */}
        <div style={styles.container}>user input here</div>
      </div>

      <div style={{...styles.container, ...styles.footer}}>
        <div style={styles.container}>Footer is here</div>
      </div>
    </div>
  )
}



const styles = {
  content:{
    display: 'flex', 
    flex:1, 
    flexDirection: 'column'
  },
  top: {
    display: "flex",
    flex: .5, 
    flexDirection: 'row'
  },
  score: {
    alignself: 'flex-start'
  },
  link: {
    alignself: 'flex-end',
    flex: 1
  }, 
  container: {
    // to see the layout better 
    border: 1,
    borderColor: 'black',
    borderStyle: 'solid'
  }, 
  gameSection: {
    flex: 7,
    
  },
  inputSection: {
    flex: 1
  },
  footer:{
    flex: .5
  }
  

}
export default GamePage
import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Card, makeStyles, Avatar } from '@material-ui/core'
import mona from './../mona.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minHeight: '50%',
    maxHeight: '100%',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    margin: theme.spacing(1),
    border: '2px solid'
  },
}));

const LandingPage = () => {

  const classes = useStyles();
  return(
    <div style={styles.content}>
      <div style={styles.innerContent}>
        <h1 style={{...container}}>About</h1>
        <div style={{...container, flex: 1, display: 'flex', flexDirection: 'row'}}>
          
          {/* Developers Seciton  */}
          <div style={{...container,  flex: 3}}>
            <h2 style={{...container}}>The Developers</h2>

            {/* Content Section  */}
            <div style={{...container, display: "flex", flexDirection: 'row'}}>
              <Grid container spacing={1} xs={12}>
                <Grid item xs>
                  <Card className={classes.card}>
                    <div style={{...container, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      {/* Image goes on top */}
                      <Avatar alt="Mona" src={mona} className={classes.large} />
                      {/* github link and portfolio link here  */}
                      {/* about person here  */}
                    </div>
                    
                  </Card>
                </Grid>
                <Grid item xs>
                  <Card className={classes.card}>
                    xs
                  </Card>
                </Grid>
                <Grid item xs>
                  <Card className={classes.card}>
                    xs
                  </Card>
                </Grid>
              </Grid>
            </div>
            {/* <p>hi</p> */}
          </div>
          
          {/* Game Info Section  */}
          <div style={{...container, flex: 2}}>
            <h2 style={{...container}}>The Game</h2>
            <div style={{...container}}>
              {/* Image goes here with link to game */}
              <div style={{...container}}>
                <Link to="/game">Goes to game page. Game page Image here</Link>
              </div>
              {/* Game Information */}
              <div style={{...container}}>

              </div>
              </div>
            </div>
            
        </div>
        
        


      </div>
      

      {/* Footer Section  */}
      <div style={styles.footer}></div>
    </div>
  )
}

const container = {
  border: '1px black solid'
}

const styles = {
  content: {
    backgroundColor: 'white',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',

  },
  innerContent: {
    flex: 7.5,
    // display: 'flex'
  },
  footer: {
    flex: 0.5,
    backgroundColor: '#182436',
  },
}
export default LandingPage
import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Card, makeStyles, Avatar,  } from '@material-ui/core'
import mona from './../mona.jpg'
import jamie from './../jamie.jpeg'
import scott from './../scott.jpg'
import github from './../github.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    marginLeft: 10,
    minHeight: '50%',
    maxHeight: '100%',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    marginTop: theme.spacing(2),
    border: '1px solid'
  },
}));

const LandingPage = () => {

  const classes = useStyles();
  return(
    <div style={styles.content}>
      <div style={styles.innerContent}>
        <h1 style={{ textAlign: 'center'}}>About Us</h1>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row'}}>
          
          {/* Developers Seciton  */}
          <div style={{  flex: 3}}>
            <h2 style={{ paddingLeft: 20}}>The Developers</h2>

            {/* Content Section  */}
            <div style={{ display: "flex", flexDirection: 'row'}}>
              {/* Developer 1  */}
              <Grid container spacing={1} xs={12}>
                <Grid item xs>
                    <Card className={classes.card} raised='true'>
                      <div style={styles.cardContent}>
                        {/* Image goes on top */}
                        <Avatar alt="jamie" src={jamie} className={classes.large} />
                        {/* Name goes here  */}
                        <h3>Jamie Sajdak</h3>
                        {/* github link and portfolio link here  */}
                        <div style={{display: 'flex'}}>
                          <a target="_blank" href="https://github.com/Jam52">                    
                            <Avatar alt="github" src={github} className={classes.small} />
                          </a>
                          <a target="_blank" href="https://www.jamiesajdak.com/">                    
                            <Avatar alt="portfolio" className={classes.small} style={{backgroundColor: '#182436'}}>P</Avatar>
                          </a>
                        </div>
                        
                        {/* about person here  */}
                        <div style={styles.aboutText}>
                          <p>Hello allll!</p>
                          <p>ahhh</p>
                        </div>
                      </div>
                    </Card>
                </Grid>

                {/* Developer 2 */}
                <Grid item xs>
                  <Card className={classes.card} raised='true'>
                    <div style={styles.cardContent}>
                      {/* Image goes on top */}
                      <Avatar alt="Mona" src={mona} className={classes.large} />
                      {/* Name goes here  */}
                      <h3>Mona Zheng</h3>
                      {/* github link and portfolio link here  */}
                      <div style={{display: 'flex'}}>
                        <a target="_blank" href="https://github.com/catmemberMona">                    
                          <Avatar alt="github" src={github} className={classes.small} />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/mona-a-zheng/">                    
                          <Avatar alt="linkedin" className={classes.small} style={{backgroundColor: '#182436'}}>L</Avatar>
                        </a>
                      </div>
                      
                      {/* about person here  */}
                      <div style={styles.aboutText}>
                        <p>Hello my dear visitors.</p>
                        <p>I completed the Grace Hopper Program at FullStack Academy, and I'm currently looking for work. Contact me!</p>
                        <p>This is my first hackathon (learnathon). I can definitely say that I had lots of fun and learned a lot.</p>
                      </div>
                    </div>
                    
                  </Card>
                </Grid>
            
                {/* Developer 3  */}
                <Grid item xs>
                  <Card className={classes.card} raised='true'>
                    <div style={styles.cardContent}>
                      {/* Image goes on top */}
                      <Avatar alt="scott" src={scott} className={classes.large} />
                      {/* Name goes here  */}
                      <h3>Scott Beckett</h3>
                      {/* github link and portfolio link here  */}
                      <div style={{display: 'flex'}}>
                        <a target="_blank" href="https://github.com/saxlbeckett">                    
                          <Avatar alt="github" src={github} className={classes.small} />
                        </a>
                      </div>
                      {/* about person here  */}
                      <div style={styles.aboutText}>
                        <p>I am a registered sleep EEG technician and clinical sleep educator who has a long history of research data management and recording music.</p>
                        <p>I have just graduated from cohort #31 at Launch Academy Boston to learn Fullstack web development in JavaScript!</p>
                        {/* Hackaton experience Here */}
                        {/* <p></p> */}
                      </div>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </div>
            {/* <p>hi</p> */}
          </div>
          
          {/* Game Info Section  */}
          <div style={{ flex: 2}}>
            <h2 style={{ paddingLeft: 20}}>The Game</h2>
            <div style={{...container}}>
              {/* Image goes here with link to game */}
              <div style={{...container, textAlign: 'center'}}>
                <Link to="/game">Go to Game</Link>
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
    height: '100vh'

  },
  innerContent: {
    flex: 7.5,
    // display: 'flex'
  },
  cardContent: {
    flex: 1, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    color: 'black', 
    height: 500,
    minWidth: 200
  }, 
  aboutText: {
    textAlign: 'left',
    padding: 8,
    fontSize: 14,
    // height: 500 
  },
  footer: {
    marginTop: 10, 
    flex: 0.5,
    backgroundColor: '#182436',
  },
}
export default LandingPage
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, makeStyles, Avatar } from '@material-ui/core';
import mona from './../mona.jpg';
import jamie from './../jamie.jpeg';
import scott from './../scott.jpg';
import github from './../github.png';
import linkedIn from './../linkedin.png';

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
    border: '1px solid',
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div style={styles.content}>
      <div style={styles.innerContent}>
        <h1 style={{ textAlign: 'center' }}>About Us</h1>
        <div
          style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
          className="container"
        >
          {/* Developers Seciton  */}
          <div style={{ flex: 3 }}>
            <h2 style={{ paddingLeft: 20 }}>The Developers</h2>

            {/* Content Section  */}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {/* Developer 1  */}
              <Grid container spacing={1} xs={12}>
                <Grid item={true} xs={4}>
                    <Card className={classes.card} raised={true} style={styles.cardContent}>
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'black',
                      }}
                    >
                      {/* Image goes on top */}
                      <Avatar
                        alt="jamie"
                        src={jamie}
                        className={classes.large}
                      />
                      {/* Name goes here  */}
                      <h3>Jamie Sajdak</h3>
                      {/* github link and portfolio link here  */}
                      <div style={{ display: 'flex' }}>
                        <a target="_blank" href="https://github.com/Jam52">
                          <Avatar
                            alt="github"
                            src={github}
                            className={classes.small}
                          />
                        </a>
                        <a target="_blank" href="https://github.com/Jam52">
                          <Avatar
                            alt="linkedIn"
                            src={linkedIn}
                            className={classes.small}
                          />
                        </a>
                        <a target="_blank" href="https://www.jamiesajdak.com/">
                          <Avatar
                            alt="portfolio"
                            className={classes.small}
                            style={{ backgroundColor: '#182436' }}
                          >
                            P
                          </Avatar>
                        </a>
                      </div>

                      {/* about person here  */}
                      <div style={styles.aboutText}>
                        <p>
                          Hello!! I am an industrial designer turned web
                          developer with a passion for creating and building
                          things people interact with. I have a keen interest in
                          JavaScript and a drive to learn all aspects of web
                          development from frameworks such as react and angular
                          to accessibility and best practices.
                        </p>
                        <p>
                          I am currently looking for a web developer
                          opportunity. If you are looking for a motivated,
                          creative and resourceful developer you can reach me at
                          jamie.sajdak@gmail.com or DMing me on linkedIn.
                        </p>
                      </div>
                    </div>
                  </Card>
                </Grid>

                {/* Developer 2 */}
                <Grid item={true} xs={4}>
                  <Card className={classes.card} raised={true} style={styles.cardContent}>
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'black',
                      }}
                    >
                      {/* Image goes on top */}
                      <Avatar alt="Mona" src={mona} className={classes.large} />
                      {/* Name goes here  */}
                      <h3>Mona Zheng</h3>
                      {/* github link and portfolio link here  */}
                      <div style={{display: 'flex'}}>
                      <a
                        target="_blank"
                        href="https://github.com/catmemberMona"
                      >
                        <Avatar
                          alt="github"
                          src={github}
                          className={classes.small}
                        />
                      </a>
                        <a 
                        target="_blank" 
                        href="https://www.linkedin.com/in/mona-a-zheng/"
                        >                    
                          <Avatar 
                          alt="linkedin" 
                          src={linkedIn}
                          className={classes.small} 
                          >L</Avatar>
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
                <Grid item={true} xs={4}>
                  <Card className={classes.card} raised={true} style={styles.cardContent}>
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'black',
                      }}
                    >
                      {/* Image goes on top */}
                      <Avatar
                        alt="scott"
                        src={scott}
                        className={classes.large}
                      />
                      {/* Name goes here  */}
                      <h3>Scott Beckett</h3>
                      {/* github link and portfolio link here  */}
                      <div style={{display: 'flex'}}>
                        <a target="_blank" href="https://github.com/saxlbeckett">                    
                          <Avatar 
                          alt="github" 
                          src={github} 
                          className={classes.small} />
                        </a>
                      </div>
                      {/* about person here  */}
                      <div style={styles.aboutText}>
                        <p>I am a registered sleep EEG technician and clinical sleep educator who has 
                          a long history of research data management and recording music.</p>
                        <p>I have just graduated from cohort #31 at Launch Academy Boston 
                          to learn Fullstack web development in JavaScript!</p>
                       {/* Hackaton experience Here */}
                        <p>I have never made a game before! This was a great learning experience</p>
                      </div>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </div>
            {/* <p>hi</p> */}
          </div>

          {/* Game Info Section  */}
          <div style={{ flex: 2 }} className="container">
            <h2 style={{ paddingLeft: 20 }}>The Game</h2>
            {/* Game Information */}
            <div className="game-info">
              <h3>The challange</h3>
              <p className="para">
                To create a typing game, Not only do typing games require you to
                process a large amount of keyboard input, but there are so many
                different ways you can make it even better! Come learn how to
                handle keyboard events like a pro!
              </p>
              <p className="para">
                Working as a team we split the task up, creating a kanban board
                on github projects in order to better organize and distribute
                the work. It was a fantastic exersize with a great anount of
                learning, both learning from the new technologies the task
                exposed us to but also from our teamates.
              </p>
              {/* Image goes here with link to game */}
              <Link to="/game" className="btn">
                Go to Game
              </Link>
              {/* Game Information */}
              <div >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1C7_Ut-b2uk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p style={{fontFamily: 'Helvetica Neue'}}>Mintbean Typing Karaoke<br/>
                  This project is part of a hackerthon organised by [Mintbean](https://www.mintbean.io/).<br/>
                  This hackerthon is to build a typing game with a focus on processing keyboard input and how to handle keyboard events.</p>
              </div>
              </div>
            </div>
          </div>
        </div>


      {/* Footer Section  */}
      <div style={styles.footer}></div>
    </div>
  );
};

// const container = {
//   border: '1px black solid',
// };

const styles = {
  content: {
    backgroundColor: 'white',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100vh',
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
    minHeight: 500,
    minWidth: 200
  }, 
  aboutText: {
    textAlign: 'left',
    padding: 8,
    fontSize: 14,
  },
  footer: {
    marginTop: 10,
    flex: 0.5,
    backgroundColor: '#182436',
  },
};
export default LandingPage;

import React, { Component } from 'react';
import './App.css';
import { Grid, Cell } from 'react-foundation'

function App() {
  return (
    <div className="App">
      <Grid>
        <Cell large={6} small={12} className="Left">
          <Logo />
          <br></br>
          <Contact/>
        </Cell>
        <Cell large={6} small={12} className="Right">
          <Projects/>
          <br></br>
          <Freelance />
          <br></br>
          <Skills/>
        </Cell>
      </Grid>
    </div>
  );
}

class Logo extends Component {
  render() {
    return (
      <h2 className="Logo">Adam Iverson Walter</h2>
    )
  }
}

class Contact extends Component {
  render() {
    return (
      <div className="Content">
        <p>+++++++++++++++++</p>
        <p>Contact:</p>
        <p>
          <a className="links" href="tel:">
            +1 (347) 762 4728
          </a>
        </p>
        <p>
          <a className="links" href="mailto:me@adamiwalter.com?Subject=Hello%20Adam" target="_blank">
            me @ adamiwalter.com
          </a>
        </p>
        <p>
          <a className="links" href="https://github.com/Waltxr" target="_blank">
            Github
          </a>
        </p>
        <p>
          <a className="links" href='https://drive.google.com/file/d/1fuVRVzCG_XaMqwLMi5ILx5v6Nh6R6eW9/view?usp=sharing' target="_blank">
            Resume
          </a>
        </p>
        <br></br>
        <p>Software engineer with experience building applications using Ruby on Rails and React.</p>
      </div>
    )
  }
}

class Projects extends Component {
  render() {
    return(
      <div className="Content">
        <p>+++++++++++++++++</p>
        <p>Personal Projects:</p>
        <p>Friend App // <a className="links" href='https://github.com/Waltxr/friend-app-backend' target="_blank">github.com/Waltxr/friend-app-backend</a></p>
        <p>URL shortener // <a className="links" href='https://github.com/Waltxr/url-shortener-backend' target="_blank">github.com/Waltxr/url-shortener-backend</a></p>
        <p>SpotShow // <a className="links"href='https://github.com/Waltxr/spotshow-backend' target="_blank">github.com/Waltxr/spotshow-backend</a></p>
      </div>
    )
  }
}


class Freelance extends Component {
  render() {
    return(
      <div className="Content">
        <p>Freelance Work:</p>
        <p>Harper Sage // <a className="links" href="https://harpersage.com/" target="_blank">harpersage.com</a></p>
        <p>Chrome Sparks // <a className="links" href="http://chromesparks.com/" target="_blank">chromesparks.com</a></p>
        <p>Two Feet // <a className="links" href="http://twofeetmusic.com" target="_blank">twofeet.com</a></p>
      </div>
    )
  }
}

class Skills extends Component {
  render() {
    return(
      <div className="Content">
        <p>+++++++++++++++++</p>
        <p>Skills:</p>
        <p>Ruby</p>
        <p>Rails</p>
        <p>JavaScript</p>
        <p>React</p>
        <p>HTML | CSS | SCSS | jQuery</p>
        <p>Git</p>
        <p>AWS</p>
        <p>Photoshop + Illustrator</p>
        <p>Ableton Live</p>
      </div>
    )
  }
}

export default App;

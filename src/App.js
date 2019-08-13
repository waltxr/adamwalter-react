import React, { Component } from 'react';
import './App.css';
import { Grid, Cell } from 'react-foundation'

function App() {
  return (
    <div className="App">
      <Grid >
        <Cell large={6} small={12} className="Left">
          <Logo />
          <Contact/>          
        </Cell>
        <Cell large={6} small={12} className="Right">
          <Projects/>
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
        <a href="tel:">
          <p>+1 (347) 762 4728</p>
        </a>
        <a href="mailto:me@adamiwalter.com?Subject=Hello%20Adam" target="_blank">
          <p>me @ adamiwalter.com</p>
        </a>
        <a href="https://github.com/Waltxr" target="_blank">
          <p>Github</p>
        </a>
        <a href="https://s3.amazonaws.com/adamiwalter.com/etc/adam_walter_cv.pdf" target="_blank">
          <p>Resume</p>
        </a>
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
        <p>Projects:</p>
        <p>Friend App //</p>        
        <p>URL shortener //</p>
        <p>SpotShow //</p>
      </div>
    )
  }
}

class Skills extends Component {
  render() {
    return(
      <div className="Content">
        <p>Skills:</p>
        <p>+++++++++++++++++</p>
        <p>Ruby</p>
        <p>Rails</p>
        <p>JavaScript</p>
        <p>React</p>
        <p>HTML | CSS | SCSS | jQuery</p>
        <p>React-Semantic</p>
        <p>Git</p>
        <p>AWS</p>
        <p>Photoshop + Illustrator</p>
      </div>
    )
  }
}

export default App;

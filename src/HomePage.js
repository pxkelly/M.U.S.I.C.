import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import * as Tone from 'tone';

class HomePage extends Component {
  constructor(props) {
    super(props);

    // Binds function to page
    this.handleClick = this.handleClick.bind(this);
  }

  // Starts the Tone library for the synth page
  handleClick() {
    Tone.start();
  }

  render() {
    return(
      <>
        <Container className="welcome-container">
          <Row className="section-header">
            <h1>Welcome to M.U.S.I.C.</h1>
          </Row>
          <Row className="welcome">
            <p>M.U.S.I.C. stands for Malleable User-Created Synth Instant Creator</p>
          </Row>
          <Row className="welcome">
            <p>Basically, it's a tool that allows you to create and edit a synthesizer in a simple and accessible way</p>
          </Row>
          <Row className="welcome">
            <p>This tool was created as the final project for Professor Carter's Music270 at Hamilton College by Peter Kelly</p>
          </Row>
          <Row className="welcome">
            <p>It was written in Javascript using the React library</p>
          </Row>
          <Row className="welcome">
            <a href="https://github.com/pxkelly/MUSIC">Click me to go to the GitHub repository for the code</a>
          </Row>
          <br />
          <br />
          <Row className="welcome">
            <p>Otherwise, click this button to get started!</p>
          </Row>
          <Row className="welcome">
            <Button variant="contained" color="primary" href="#synth" onClick={this.handleClick}>
              Launch M.U.S.I.C.
            </Button>
          </Row>
        </Container>

      </>
    );
  }
}

export default HomePage;

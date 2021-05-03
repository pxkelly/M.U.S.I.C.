import React, { Component } from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import * as Tone from 'tone';
import { RangeStepInput } from 'react-range-step-input';

// Global variables defined here
// synth is the synth used on the entire page
var synth = new Tone.Synth().toDestination();

class Home extends Component{
  constructor(props) {
    super(props);
    // Properties for state
    this.state = {
      Distortion: 0.0,
      ReverbRoom: 0.0,
      ReverbWet: 0.0,
      VibratoFreq: 500,
      VibratoPitch: 0.0,
      LowpassCut: 0
    }

    this.synthState = {
      Octave: 4,
      Distortion: 0.0,
      ReverbRoom: 0.0,
      ReverbWet: 0.0,
      VibratoFreq: 500,
      VibratoPitch: 0.0,
      LowpassCut: 0
    }

    // Binds function to page
    this.synthControl = this.synthControl.bind(this);
    this.updateDistortion = this.updateDistortion.bind(this);
    this.updateReverbRoom = this.updateReverbRoom.bind(this);
    this.updateReverbWet = this.updateReverbWet.bind(this);
    this.updateVibratoFreq = this.updateVibratoFreq.bind(this);
    this.updateVibratoPitch = this.updateVibratoPitch.bind(this);
    this.updateLowpassCut = this.updateLowpassCut.bind(this);
    this.resetSynth = this.resetSynth.bind(this);
 }

  // Adds an event listener for keystrokes on the page's load
  componentDidMount(){
     document.addEventListener("keydown", this.synthControl, false);
     document.querySelector('button')?.addEventListener('click', async () => {
    	await Tone.start()
    	console.log('audio is ready')
    })
   }

   // Removes the event listener when the page unloads to prevent leaks
   componentWillUnmount(){
     document.removeEventListener("keydown", this.synthControl, false);
   }

  // Controls the synth given the keystroke
  synthControl(event){
      const now = Tone.now();
      var note = "";
      var currOctave = 0;
      var newOctave = 0;
      if(event.key === "a") {
        note = "C" + this.synthState.Octave.toString();
        synth.triggerAttackRelease(note, "8n", now)
      }
      else if(event.key === "s") {
        note = "D" + this.synthState.Octave.toString();
        synth.triggerAttackRelease(note, "8n", now)
      }
      else if(event.key === "d") {
        note = "E" + this.synthState.Octave.toString();
        synth.triggerAttackRelease(note, "8n", now)
      }
      else if(event.key === "f") {
        note = "F" + this.synthState.Octave.toString();
        synth.triggerAttackRelease(note, "8n", now)
      }
      else if(event.key === "g") {
        note = "G" + this.synthState.Octave.toString();
        synth.triggerAttackRelease(note, "8n", now)
      }
      else if(event.key === "h") {
        note = "A" + this.synthState.Octave.toString();
        synth.triggerAttackRelease(note, "8n", now)
      }
      else if(event.key === "j") {
        note = "B" + this.synthState.Octave.toString();
        synth.triggerAttackRelease(note, "8n", now)
      }
      else if(event.key === "k") {
        currOctave = this.synthState.Octave;
        currOctave = currOctave + 1;
        note = "C" + currOctave.toString();
        synth.triggerAttackRelease(note, "8n", now)
      }
      else if(event.key === "z") {
        // Lowers the octave of the note by 1 and resets the state to match
        currOctave = this.synthState.Octave;
        // Makes sure you aren't decreasing the octave to a negative
        if (currOctave > 0) {
          newOctave = currOctave - 1;
          this.synthState.Octave = newOctave;
        }
      }
      else if(event.key === "x") {
        // Raises the octave of the note by 1 and resets the state to match
        currOctave = this.synthState.Octave;
        // Makes sure you aren't increasing octave too high (arbitrarily set at 7)
        if (currOctave < 7) {
          newOctave = currOctave + 1;
          this.synthState.Octave = newOctave;
        }
      }
  }

  // Resets the synth to match the current state
  resetSynth() {
    // Resets to default
    synth = new Tone.Synth().toDestination();

    // Go through all effects and set them to the proper values
    // REMEMBER TO ADD TO THIS FUNCTION AS THE PROGRAM GETS MORE INTENSIVE
    const distortion = new Tone.Distortion(this.synthState.Distortion).toDestination();
    synth.connect(distortion);

    const reverb = new Tone.JCReverb({
      roomSize: this.synthState.ReverbRoom,
      wet: this.synthState.ReverbWet
    }).toDestination();
    synth.connect(reverb);

    const vibrato = new Tone.Vibrato({
      frequency: this.synthState.VibratoFreq,
      depth: this.synthState.VibratoPitch
    }).toDestination();
    synth.connect(vibrato);

    const lowpass = new Tone.Filter(this.synthState.LowpassCut, "lowpass").toDestination();
    synth.connect(lowpass);

    const limiter = new Tone.Limiter(-50).toDestination();
    synth.connect(limiter);
  }

  // Updates the distortion given the slider
  updateDistortion(event) {
    var newDistortion = event.target.value;
    this.synthState.Distortion = newDistortion;
    this.setState({Distortion: newDistortion});
    // Make sure to call resetSynth to reset to current state values
    this.resetSynth();
  }

  // Updates the reverb room given the slider
  updateReverbRoom(event) {
    var newReverbRoom = event.target.value;
    this.synthState.ReverbRoom = newReverbRoom;
    this.setState({ReverbRoom: newReverbRoom});
    // Make sure to call resetSynth to reset to current state values
    this.resetSynth();
  }

  // Updates the reverb wet given the slider
  updateReverbWet(event) {
    var newReverbWet = event.target.value;
    this.synthState.ReverbWet = newReverbWet;
    this.setState({ReverbWet: newReverbWet});
    // Make sure to call resetSynth to reset to current state values
    this.resetSynth();
  }

  // Updates the vibrato frequency given the slider
  updateVibratoFreq(event) {
    var newVibratoFreq = event.target.value;
    this.synthState.VibratoFreq = newVibratoFreq;
    this.setState({VibratoFreq: newVibratoFreq});
    // Make sure to call resetSynth to reset to current state values
    this.resetSynth();
  }

  // Updates the vibrato pitch given the slider
  updateVibratoPitch(event) {
    var newVibratoPitch = event.target.value;
    this.synthState.VibratoPitch = newVibratoPitch;
    this.setState({VibratoPitch: newVibratoPitch});
    // Make sure to call resetSynth to reset to current state values
    this.resetSynth();
  }

  // Updates the lowpass cutoff frequency given the slider
  updateLowpassCut(event) {
    var newLowpassCut = event.target.value;
    this.synthState.LowpassCut = newLowpassCut;
    this.setState({LowpassCut: newLowpassCut});
    // Make sure to call resetSynth to reset to current state values
    this.resetSynth();
  }

  render(){
    return(
      <>
      <button id="button">Play/Pause</button>
        <Row>
          <Col>
            <h1>Welcome!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Controls:</p>
          </Col>
          <Col>
            <p>Use keys a, s, d, f, g, h, j, and k to play notes</p>
            <p>The a key corresponds to a C note, s to D, and so on</p>
            <p>Use z to decrease the octave and x to increase the octave</p>
          </Col>
        </Row>
        <p>Distortion level</p>
        <Container>
          <Col>
          <RangeStepInput
            min={0}
            max={0.5}
            value={this.state.Distortion}
            step={0.1}
            onChange={this.updateDistortion}
          />
          </Col>
        </Container>
        <p>Reverb</p>
        <Container>
          <Col>
            <p>Room Size</p>
            <RangeStepInput
              min={0}
              max={0.7}
              value={this.state.ReverbRoom}
              step={0.1}
              onChange={this.updateReverbRoom}
            />
          </Col>
          <Col>
            <p>Amount of Effected Sound</p>
            <RangeStepInput
              min={0}
              max={0.7}
              value={this.state.ReverbWet}
              step={0.1}
              onChange={this.updateReverbWet}
            />
          </Col>
        </Container>
        <p>Vibrato</p>
        <Container>
          <Col>
            <p>Frequency</p>
            <RangeStepInput
              min={500}
              max={1000}
              value={this.state.VibratoFreq}
              step={1}
              onChange={this.updateVibratoFreq}
            />
          </Col>
          <Col>
            <p>Pitch Modulation</p>
            <RangeStepInput
              min={0}
              max={0.3}
              value={this.state.VibratoPitch}
              step={0.1}
              onChange={this.updateVibratoPitch}
            />
          </Col>
        </Container>
        <p>Lowpass Filter</p>
        <Container>
          <Col>
            <p>Cutoff frequency</p>
            <RangeStepInput
              min={0}
              max={500}
              value={this.state.LowpassCut}
              step={10}
              onChange={this.updateLowpassCut}
            />
          </Col>
        </Container>
      </>
    )
  }
}

export default Home;

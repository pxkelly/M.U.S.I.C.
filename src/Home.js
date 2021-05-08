import React, { Component } from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import * as Tone from 'tone';
import { RangeStepInput } from 'react-range-step-input';
import Switch from "react-switch";

// Global variables defined here
// synth is the synth used on the entire page
var synth = new Tone.Synth().toDestination();

// There are globals for every effect on the synth for easier control
var distortion = new Tone.Distortion(0).toDestination();
var reverb = new Tone.JCReverb(0).toDestination();
var vibrato = new Tone.Vibrato(0, 0).toDestination();
var lowpass = new Tone.Filter(0, "lowpass").toDestination();

// This keeps track of all the active effects to add to the synthOff
var effects = [];

// This is the current oscilator on the synth, default is triangle wave
var oscillator = "triangle";

// keyDown keeps track if the key is pressed or not (note is playing)
var keyDown = false;

class Home extends Component{
  constructor(props) {
    super(props);
    // Properties for state
    this.state = {
      Distortion: 0.0,
      DistortionOn: false,
      ReverbRoom: 0.0,
      ReverbOn: false,
      VibratoFreq: 0,
      VibratoPitch: 0.0,
      VibratoOn: false,
      LowpassCut: 0,
      LowpassOn: false,
      TriangleOsc: true
    }

    this.synthState = {
      Octave: 4,
      DistortionOn: false,
      ReverbOn: false,
      VibratoOn: false,
      LowpassOn: false
    }

    // Binds function to page
    this.synthControl = this.synthControl.bind(this);
    this.synthOff = this.synthOff.bind(this);
    this.updateDistortion = this.updateDistortion.bind(this);
    this.toggleDistortion = this.toggleDistortion.bind(this);
    this.updateReverbRoom = this.updateReverbRoom.bind(this);
    this.toggleReverb = this.toggleReverb.bind(this);
    this.updateVibratoFreq = this.updateVibratoFreq.bind(this);
    this.updateVibratoPitch = this.updateVibratoPitch.bind(this);
    this.toggleVibrato = this.toggleVibrato.bind(this);
    this.updateLowpassCut = this.updateLowpassCut.bind(this);
    this.toggleLowpass = this.toggleLowpass.bind(this);
    this.updateOscillator = this.updateOscillator.bind(this);
    this.addEffect = this.addEffect.bind(this);
    this.removeEffect = this.removeEffect.bind(this);
    this.refreshSynth = this.refreshSynth.bind(this);
 }

  // Adds an event listener for keystrokes on the page's load
  componentDidMount(){
     document.addEventListener("keydown", this.synthControl, false);
     document.addEventListener("keyup", this.synthOff, false);
     document.querySelector('button')?.addEventListener('click', async () => {
    	await Tone.start()
    	console.log('audio is ready')
    })
   }

   // Removes the event listener when the page unloads to prevent leaks
   componentWillUnmount(){
      document.removeEventListener("keydown", this.synthControl, false);
      document.removeEventListener("keyup", this.synthOff, false);
   }

  // Controls the synth given the keystroke
  synthControl(event){
      const now = Tone.now();
      var note = "";
      var currOctave = 0;
      var newOctave = 0;
      if(event.key === "a" && !keyDown) {
        note = "C" + this.synthState.Octave.toString();
        synth.triggerAttack(note, now);
        keyDown = true;
      }
      else if(event.key === "s" && !keyDown) {
        note = "D" + this.synthState.Octave.toString();
        synth.triggerAttack(note, now);
        keyDown = true;
      }
      else if(event.key === "d" && !keyDown) {
        note = "E" + this.synthState.Octave.toString();
        synth.triggerAttack(note, now);
        keyDown = true;
      }
      else if(event.key === "f" && !keyDown) {
        note = "F" + this.synthState.Octave.toString();
        synth.triggerAttack(note, now);
        keyDown = true;
      }
      else if(event.key === "g" && !keyDown) {
        note = "G" + this.synthState.Octave.toString();
        synth.triggerAttack(note, now);
        keyDown = true;
      }
      else if(event.key === "h" && !keyDown) {
        note = "A" + this.synthState.Octave.toString();
        synth.triggerAttack(note, now);
        keyDown = true;
      }
      else if(event.key === "j" && !keyDown) {
        note = "B" + this.synthState.Octave.toString();
        synth.triggerAttack(note, now);
        keyDown = true;
      }
      else if(event.key === "k" && !keyDown) {
        currOctave = this.synthState.Octave;
        currOctave = currOctave + 1;
        note = "C" + currOctave.toString();
        synth.triggerAttack(note, now);
        keyDown = true;
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

  // Turns the synth off once the key is released
  synthOff(event){
    const now = Tone.now();
    // Create a string of possible keys that can be held
    var allKeys = "asdfghjk";
    if(allKeys.includes(event.key)) {
      synth.triggerRelease(now);
      keyDown = false;
    }
  }

  // Updates the distortion given the slider
  updateDistortion(event) {
    distortion.distortion = event.target.value;
    // Update the state (moves slider)
    this.setState({Distortion: event.target.value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Turns the distortion on or off
  toggleDistortion(checked) {
    this.synthState.DistortionOn = checked;
    // This allows the slider to move on the page itself
    this.setState({DistortionOn: checked});
    // If the distortion is turned off, reset the distortion slider
    if (!this.synthState.DistortionOn) {
      // Resets the distortion on the synth to 0
      distortion.distortion = 0;
      // Resets the state (will reset slider)
      this.setState({Distortion: 0});
      // Removes distortion from the effects list
      this.removeEffect("distortion");
      //this.refreshSynth();
    }
    // Otherwise, add distortion to the effects list
    else {
      this.addEffect("distortion");
    }
  }

  // Updates the reverb room size given the slider
  updateReverbRoom(event) {
    reverb.roomSize.input.value = event.target.value;
    //Update state (moves slider)
    this.setState({ReverbRoom: event.target.value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Turns the reverb on or off
  toggleReverb(checked) {
    this.synthState.ReverbOn = checked;
    // This allows the slider to move on the page itself
    this.setState({ReverbOn: checked});
    // If the reverb is turned off, reset the reverb slider
    if (!this.synthState.ReverbOn) {
      // Resets the reverb's room size on the synth to 0
      reverb.roomSize.input.value = 0;
      // Resets the state (will reset slider)
      this.setState({ReverbRoom: 0});
      // Removes distortion from the effects list
      this.removeEffect("reverb");
      //this.refreshSynth();
    }
    // Otherwise, add distortion to the effects list
    else {
      this.addEffect("reverb");
    }
  }

  // Updates the vibrato frequency given the slider
  updateVibratoFreq(event) {
    vibrato.frequency.value = event.target.value;
    // Update state (moves slier)
    this.setState({VibratoFreq: event.target.value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Updates the vibrato pitch given the slider
  updateVibratoPitch(event) {
    vibrato.depth.input.value = event.target.value;
    // Update state (moves slier)
    this.setState({VibratoPitch: event.target.value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Turns the vibrato on or off
  toggleVibrato(checked) {
    this.synthState.VibratoOn = checked;
    // This allows the slider to move on the page itself
    this.setState({VibratoOn: checked});
    // If the vibrato is turned off, reset the two vibrato sliders
    if (!this.synthState.VibratoOn) {
      // Resets the vibrato level on the synth to 0
      vibrato.frequency.value = 0;
      vibrato.depth.input.value = 0;
      // Resets the state (will reset slider)
      this.setState({VibratoFreq: 0});
      this.setState({VibratoPitch: 0});
      // Removes distortion from the effects list
      this.removeEffect("vibrato");
      //this.refreshSynth();
    }
    // Otherwise, add distortion to the effects list
    else {
      this.addEffect("vibrato");
    }
  }

  // Updates the lowpass cutoff frequency given the slider
  updateLowpassCut(event) {
    lowpass.frequency.value = event.target.value;
    // Update state (moves slider)
    this.setState({LowpassCut: event.target.value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Turns the lowpass filter on or off
  toggleLowpass(checked) {
    this.synthState.LowpassOn = checked;
    // This allows the slider to move on the page itself
    this.setState({LowpassOn: checked});
    // If the lowpass filter is turned off, reset the lowpass slider
    if (!this.synthState.LowpassOn) {
      // Resets the lowpass cutoff on the synth to 0
      lowpass.frequency.value = 0;
      // Resets the state (will reset slider)
      this.setState({LowpassCut: 0});
      // Removes distortion from the effects list
      this.removeEffect("lowpass");
      //this.refreshSynth();
    }
    // Otherwise, add distortion to the effects list
    else {
      this.addEffect("lowpass");
    }
  }

  updateOscillator(event) {
    
    console.log(event.target.id)
  }

  // Adds the effect to the effects list
  addEffect(effect) {
    effects.push(effect);
  }

  // Removes the effect from the effects list
  removeEffect(effect) {
    var index = effects.indexOf(effect);
    // Splices the effect out of the list
    effects.splice(index, 1);
  }

  // Updates the synth to match the current state
  refreshSynth() {
    // Resets the synth
    console.log(effects)
    synth = new Tone.Synth().toDestination();
    // Add the effects to the synth
    effects.forEach(effect => synth.connect(eval(effect)));
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
            <Switch
              onChange={this.toggleDistortion}
              checked={this.state.DistortionOn}
            />
            <RangeStepInput
              min={0}
              max={10}
              value={this.state.Distortion}
              step={0.1}
              onChange={this.updateDistortion}
              disabled={!this.synthState.DistortionOn}
            />
          </Col>
        </Container>
        <p>Reverb</p>
        <Container>
          <Col>
            <Switch
              onChange={this.toggleReverb}
              checked={this.synthState.ReverbOn}
            />
            <RangeStepInput
              min={0}
              max={0.9}
              value={this.state.ReverbRoom}
              step={0.01}
              onChange={this.updateReverbRoom}
              disabled={!this.state.ReverbOn}
            />
          </Col>
        </Container>
        <p>Vibrato</p>
        <Container>
          <Col>
            <Switch
              onChange={this.toggleVibrato}
              checked={this.state.VibratoOn}
            />
            <p>Frequency</p>
            <RangeStepInput
              min={0}
              max={10}
              value={this.state.VibratoFreq}
              step={0.1}
              onChange={this.updateVibratoFreq}
              disabled={!this.state.VibratoOn}
            />
          </Col>
          <Col>
            <p>Pitch Modulation</p>
            <RangeStepInput
              min={0}
              max={1}
              value={this.state.VibratoPitch}
              step={0.1}
              onChange={this.updateVibratoPitch}
              disabled={!this.state.VibratoOn}
            />
          </Col>
        </Container>
        <p>Lowpass Filter</p>
        <Container>
          <Col>
            <Switch
              onChange={this.toggleLowpass}
              checked={this.state.LowpassOn}
            />
            <p>Cutoff frequency</p>
            <RangeStepInput
              min={0}
              max={5000}
              value={this.state.LowpassCut}
              step={10}
              onChange={this.updateLowpassCut}
              disabled={!this.state.LowpassOn}
            />
          </Col>
        </Container>

        <Container>
          <p>Oscillator Type</p>
          <Col>
            <Form.Check
              type="radio"
              label="Sine"
              id="sine"
              name="formHorizontalRadios"
              onChange={this.updateOscillator}
            />
            <Form.Check
              type="radio"
              label="Square"
              id="square"
              name="formHorizontalRadios"
              onChange={this.updateOscillator}
            />
            <Form.Check
              type="radio"
              label="Triangle"
              id="triangle"
              name="formHorizontalRadios"
              onChange={this.updateOscillator}
              checked={this.state.TriangleOsc}
            />
            <Form.Check
              type="radio"
              label="Sawtooth"
              id="sawtooth"
              name="formHorizontalRadios"
              onChange={this.updateOscillator}
            />
          </Col>
        </Container>
      </>
    )
  }
}

export default Home;

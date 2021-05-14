import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as Tone from 'tone';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './App.css';
import './Pages.css';

// Global variables defined here
// synth is the synth used on the entire page
var synth = new Tone.AMSynth().toDestination();

// There are globals for every effect on the synth for easier control
var distortion = new Tone.Distortion(0).toDestination();
var reverb = new Tone.JCReverb(0).toDestination();
var vibrato = new Tone.Vibrato(0, 0).toDestination();
var pitch = new Tone.PitchShift(0).toDestination();
var pan = new Tone.Panner(0).toDestination();

// These are the two filters you can apply to the synth
var lowpass = new Tone.Filter(0, "lowpass").toDestination();
var highpass = new Tone.Filter(20000, "highpass").toDestination();

// This keeps track of all the active effects to add to the synthOff
var effects = [];

// Creates an envelope to attach to the synth at the default values
var attack = 0;
var decay = 0;
var sustain = 1;
var release = 0;
// Attaches the envelope to the synth
synth.envelope.attack = attack;
synth.envelope.decay = decay;
synth.envelope.sustain = sustain;
synth.envelope.release = release;

// This is the current oscillator on the synth, default is triangle wave
var oscillator = "triangle";

// keyDown keeps track if the key is pressed or not (note is playing)
var keyDown = false;

class SynthPage extends Component {
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
      Pitch: 0,
      PitchOn: false,
      Pan: 0,
      PanOn: false,
      LowpassCut: 0,
      LowpassOn: false,
      HighpassCut: 20000,
      HighpassOn: false,
      TriangleOsc: true,
      Attack: 0,
      Decay: 0,
      Sustain: 1,
      Release: 0
    }

    this.synthState = {
      Octave: 4,
      DistortionOn: false,
      ReverbOn: false,
      VibratoOn: false,
      PitchOn: false,
      PanOn: false,
      LowpassOn: false,
      HighpassOn: false
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
    this.updatePitch = this.updatePitch.bind(this);
    this.togglePitch = this.togglePitch.bind(this);
    this.updatePan = this.updatePan.bind(this);
    this.togglePan = this.togglePan.bind(this);
    this.updateLowpassCut = this.updateLowpassCut.bind(this);
    this.toggleLowpass = this.toggleLowpass.bind(this);
    this.updateHighpassCut = this.updateHighpassCut.bind(this);
    this.toggleHighpass = this.toggleHighpass.bind(this);
    this.updateAttack = this.updateAttack.bind(this);
    this.updateDecay = this.updateDecay.bind(this);
    this.updateSustain = this.updateSustain.bind(this);
    this.updateRelease = this.updateRelease.bind(this);
    this.updateOscillator = this.updateOscillator.bind(this);
    this.addEffect = this.addEffect.bind(this);
    this.removeEffect = this.removeEffect.bind(this);
    this.refreshSynth = this.refreshSynth.bind(this);
 }

  // Adds an event listener for keystrokes on the page's load
  componentDidMount(){
    document.addEventListener("keydown", this.synthControl, false, async () => {
      // Starts Tone.js
      await Tone.start();
    });
    document.addEventListener("keyup", this.synthOff, false);
   }

  // Removes the event listener when the page unloads to prevent leaks
  componentWillUnmount(){
    document.removeEventListener("keydown", this.synthControl, false);
    document.removeEventListener("keyup", this.synthOff, false);
   }

  // Controls the synth given the keystroke
  synthControl(event) {
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
  updateDistortion(event, value) {
    distortion.distortion = value;
    // Update the state (moves slider)
    this.setState({Distortion: value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Turns the distortion on or off
  toggleDistortion(event) {
    this.synthState.DistortionOn = event.target.checked;
    // This allows the slider to move on the page itself
    this.setState({DistortionOn: event.target.checked});
    // If the distortion is turned off, reset the distortion slider
    if (!this.synthState.DistortionOn) {
      // Resets the distortion on the synth to 0
      distortion.distortion = 0;
      // Resets the state (will reset slider)
      this.setState({Distortion: 0});
      // Removes distortion from the effects list
      this.removeEffect("distortion");
    }
    // Otherwise, add distortion to the effects list
    else {
      this.addEffect("distortion");
    }
  }

  // Updates the reverb room size given the slider
  updateReverbRoom(event, value) {
    reverb.roomSize.input.value = value;
    // Update state (moves slider)
    this.setState({ReverbRoom: value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Turns the reverb on or off
  toggleReverb(event) {
    this.synthState.ReverbOn = event.target.checked;
    // This allows the slider to move on the page itself
    this.setState({ReverbOn: event.target.checked});
    // If the reverb is turned off, reset the reverb slider
    if (!this.synthState.ReverbOn) {
      // Resets the reverb's room size on the synth to 0
      reverb.roomSize.input.value = 0;
      // Resets the state (will reset slider)
      this.setState({ReverbRoom: 0});
      // Removes reverb from the effects list
      this.removeEffect("reverb");
    }
    // Otherwise, add reverb to the effects list
    else {
      this.addEffect("reverb");
    }
  }

  // Updates the vibrato frequency given the slider
  updateVibratoFreq(event, value) {
    vibrato.frequency.value = value;
    // Update state (moves slier)
    this.setState({VibratoFreq: value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Updates the vibrato pitch given the slider
  updateVibratoPitch(event, value) {
    vibrato.depth.input.value = value;
    // Update state (moves slier)
    this.setState({VibratoPitch: value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Turns the vibrato on or off
  toggleVibrato(event) {
    this.synthState.VibratoOn = event.target.checked;
    // This allows the slider to move on the page itself
    this.setState({VibratoOn: event.target.checked});
    // If the vibrato is turned off, reset the two vibrato sliders
    if (!this.synthState.VibratoOn) {
      // Resets the vibrato level on the synth to 0
      vibrato.frequency.value = 0;
      vibrato.depth.input.value = 0;
      // Resets the state (will reset slider)
      this.setState({VibratoFreq: 0});
      this.setState({VibratoPitch: 0});
      // Removes vibrato from the effects list
      this.removeEffect("vibrato");
    }
    // Otherwise, add vibrato to the effects list
    else {
      this.addEffect("vibrato");
    }
  }

  // Updates the pitch shift given the slider
  updatePitch(event, value) {
    pitch.pitch = value;
    // Update state (moves slider)
    this.setState({Pitch: value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Turns the pitch shift on or off
  togglePitch(event) {
    this.synthState.PitchOn = event.target.checked;
    // This allows the slider to move on the page itself
    this.setState({PitchOn: event.target.checked});
    // If the pitch shift is turned off, reset the pitch shift slider
    if (!this.synthState.PitchOn) {
      // Resets the pitch shift on the synth to 0
      pitch.pitch = 0;
      // Resets the state (will reset slider)
      this.setState({Pitch: 0});
      // Removes pitch from the effects list
      this.removeEffect("pitch");
    }
    // Otherwise, add pitch to the effects list
    else {
      this.addEffect("pitch");
    }
  }

  // Updates the pan given the slider
  updatePan(event, value) {
    pan.pan.input.value = value;
    // Update state (moves slider)
    this.setState({Pan: value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Turns the panner on or off
  togglePan(event) {
    this.synthState.PanOn = event.target.checked;
    // This allows the slider to move on the page itself
    this.setState({PanOn: event.target.checked});
    // If the panner is turned off, reset the pan slider
    if (!this.synthState.PanOn) {
      // Resets the panner on the synth to 0
      pan.pan.input.value = 0;
      // Resets the state (will reset slider)
      this.setState({Pan: 0});
      // Removes pan from the effects list
      this.removeEffect("pan");
    }
    // Otherwise, add pan to the effects list
    else {
      this.addEffect("pan");
    }
  }

  // Updates the lowpass cutoff frequency given the slider
  updateLowpassCut(event, value) {
    lowpass.frequency.value = value;
    // Update state (moves slider)
    this.setState({LowpassCut: value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Turns the lowpass filter on or off
  toggleLowpass(event) {
    this.synthState.LowpassOn = event.target.checked;
    // This allows the slider to move on the page itself
    this.setState({LowpassOn: event.target.checked});
    // If the lowpass filter is turned off, reset the lowpass slider
    if (!this.synthState.LowpassOn) {
      // Resets the lowpass cutoff on the synth to 0
      lowpass.frequency.value = 0;
      // Resets the state (will reset slider)
      this.setState({LowpassCut: 0});
      // Removes lowpass filter from the effects list
      this.removeEffect("lowpass");
    }
    // Otherwise, add lowpass filter to the effects list
    else {
      this.addEffect("lowpass");
    }
  }

  // Updates the highpass cutoff frequency given the slider
  updateHighpassCut(event, value) {
    highpass.frequency.value = value;
    // Update state (moves slider)
    this.setState({HighpassCut: value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Turns the highpass filter on or off
  toggleHighpass(event) {
    this.synthState.HighpassOn = event.target.checked;
    // This allows the slider to move on the page itself
    this.setState({HighpassOn: event.target.checked});
    // If the highpass filter is turned off, reset the highpass slider
    if (!this.synthState.HighpassOn) {
      // Resets the highpass cutoff on the synth to 20000
      highpass.frequency.value = 20000;
      // Resets the state (will reset slider)
      this.setState({HighpassCut: 20000});
      // Removes highpass filter from the effects list
      this.removeEffect("highpass");
    }
    // Otherwise, add highpass filter to the effects list
    else {
      this.addEffect("highpass");
    }
  }

  // Updates the attack value of the envelope
  updateAttack(event, value) {
    attack = value;
    // Update state (moves slider)
    this.setState({Attack: value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Updates the decay value of the envelope
  updateDecay(event, value) {
    decay = value;
    // Update state (moves slider)
    this.setState({Decay: value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Updates the sustain value of the envelope
  updateSustain(event, value) {
    sustain = value;
    // Update state (moves slider)
    this.setState({Sustain: value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Updates the release value of the envelope
  updateRelease(event, value) {
    release = value;
    // Update state (moves slider)
    this.setState({Release: value});
    // Make sure to call refreshSynth to reset to current state values
    this.refreshSynth();
  }

  // Changes the oscillator attached to the synth
  updateOscillator(event) {
    // Update the global variable to save these changes
    oscillator = event.target.value;
    // Updates the selected button on the page
    if (event.target.value !== "triangle") {
      this.setState({TriangleOsc: false});
    }
    else {
      this.setState({TriangleOsc: true});
    }
    // Refresh the synth with the new oscillator
    this.refreshSynth();
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
    synth = new Tone.AMSynth().toDestination();
    // Add the effects to the synth
    effects.forEach(effect => synth.connect(eval(effect)));
    // Make sure the proper oscillator is used
    synth.oscillator.type = oscillator;
    // Set up the envelope
    synth.envelope.attack = attack;
    synth.envelope.decay = decay;
    synth.envelope.sustain = sustain;
    synth.envelope.release = release;
  }

  render() {
    return(
      <>
        <Container className="controls-container">
          <Row className="section-header">
            <h5>Controls</h5>
          </Row>
          <Row className="controls">
            <p>Use keys a, s, d, f, g, h, j, and k to play notes</p>
          </Row>
          <Row className="controls">
            <p>The a key corresponds to a C note, s to D, and so on</p>
          </Row>
          <Row className="controls">
            <p>Use z to decrease the octave and x to increase the octave</p>
          </Row>
        </Container>

        <br />

        <Container className="effects-container">
          <Row className="section-header">
            <h5>Synth Effects</h5>
          </Row>
          <Row className="effects">
            <Col xs={2}>
              <p>Distortion</p>
              <Row className="slider">
                <Col xs={3}>
                  <p>Level: </p>
                </Col>
                <Col className="bar" sm={1}>
                  <Slider
                    orientation="vertical"
                    min={0}
                    max={10}
                    value={this.state.Distortion}
                    step={0.1}
                    onChange={this.updateDistortion}
                    disabled={!this.synthState.DistortionOn}
                    valueLabelDisplay="auto"
                  />
                </Col>
              </Row>
            </Col>
            <Col className="switch" xs={2}>
              <Switch
                onChange={this.toggleDistortion}
                checked={this.state.DistortionOn}
                color="primary"
              />
            </Col>
            <Col xs={2}>
              <p>Reverb</p>
              <Row className="slider">
                <Col xs={3}>
                  <p>Level: </p>
                </Col>
                <Col className="bar" sm={3}>
                  <Slider
                    orientation="vertical"
                    min={0}
                    max={0.9}
                    value={this.state.ReverbRoom}
                    step={0.1}
                    onChange={this.updateReverbRoom}
                    disabled={!this.state.ReverbOn}
                    valueLabelDisplay="auto"
                  />
                </Col>
              </Row>
            </Col>
            <Col className="switch" xs={2}>
              <Switch
                onChange={this.toggleReverb}
                checked={this.synthState.ReverbOn}
                color="primary"
              />
            </Col>
            <Col xs={2}>
              <p>Vibrato</p>
              <Row className="slider">
                <Col xs={3}>
                  <p>Speed: </p>
                </Col>
                <Col className="bar" sm={1}>
                  <Slider
                    orientation="vertical"
                    min={0}
                    max={10}
                    value={this.state.VibratoFreq}
                    step={0.1}
                    onChange={this.updateVibratoFreq}
                    disabled={!this.state.VibratoOn}
                    valueLabelDisplay="auto"
                  />
                </Col>
                <Col xs={3}>
                  <p>Level: </p>
                </Col>
                <Col className="bar" sm={1}>
                  <Slider
                    orientation="vertical"
                    min={0}
                    max={1}
                    value={this.state.VibratoPitch}
                    step={0.1}
                    onChange={this.updateVibratoPitch}
                    disabled={!this.state.VibratoOn}
                    valueLabelDisplay="auto"
                  />
                </Col>
              </Row>
            </Col>
            <Col className="switch" xs={2}>
              <Switch
                onChange={this.toggleVibrato}
                checked={this.state.VibratoOn}
                color="primary"
              />
            </Col>
          </Row>
          <br />
          <Row className="effects">
            <Col xs={2}>
              <p>Detune</p>
              <Row className="slider">
                <Col xs={3}>
                  <p>Level: </p>
                </Col>
                <Col className="bar" sm={1}>
                  <Slider
                    orientation="vertical"
                    min={-24}
                    max={24}
                    value={this.state.Pitch}
                    step={1}
                    onChange={this.updatePitch}
                    disabled={!this.synthState.PitchOn}
                    valueLabelDisplay="auto"
                  />
                </Col>
              </Row>
            </Col>
            <Col className="switch" xs={2}>
              <Switch
                onChange={this.togglePitch}
                checked={this.state.PitchOn}
                color="primary"
              />
            </Col>
            <Col xs={2}>
              <p>Pan</p>
              <Row className="slider">
                <Col xs={3}>
                  <p>Level: </p>
                </Col>
                <Col className="bar" sm={3}>
                  <Slider
                    orientation="vertical"
                    min={-1}
                    max={1}
                    value={this.state.Pan}
                    step={0.1}
                    onChange={this.updatePan}
                    disabled={!this.state.PanOn}
                    valueLabelDisplay="auto"
                  />
                </Col>
              </Row>
            </Col>
            <Col className="switch" xs={2}>
              <Switch
                onChange={this.togglePan}
                checked={this.synthState.PanOn}
                color="primary"
              />
            </Col>
          </Row>
        </Container>

        <br />
        <br />

        <Container className="filter-container">
          <Row className="section-header">
            <h5>Filter Control</h5>
          </Row>
          <Row className="filters">
            <Col xs={2}>
              <p>Lowpass</p>
              <Row className="slider">
                <Col xs={3}>
                  <p>Freq: </p>
                </Col>
                <Col className="bar" sm={1}>
                  <Slider
                    orientation="vertical"
                    min={0}
                    max={5000}
                    value={this.state.LowpassCut}
                    step={10}
                    onChange={this.updateLowpassCut}
                    disabled={!this.synthState.LowpassOn}
                    valueLabelDisplay="auto"
                  />
                </Col>
              </Row>
            </Col>
            <Col className="switch" xs={2}>
              <Switch
                onChange={this.toggleLowpass}
                checked={this.state.LowpassOn}
                color="primary"
              />
            </Col>
            <Col xs={2}>
              <p>Highpass</p>
              <Row className="slider">
                <Col xs={3}>
                  <p>Freq: </p>
                </Col>
                <Col className="bar" sm={3}>
                  <Slider
                    orientation="vertical"
                    min={5000}
                    max={20000}
                    value={this.state.HighpassCut}
                    step={10}
                    onChange={this.updateHighpassCut}
                    disabled={!this.state.HighpassOn}
                    valueLabelDisplay="auto"
                  />
                </Col>
              </Row>
            </Col>
            <Col className="switch" xs={2}>
              <Switch
                onChange={this.toggleHighpass}
                checked={this.synthState.HighpassOn}
                color="primary"
              />
            </Col>
          </Row>
        </Container>

        <br />
        <br />

        <Container className="envelope-container">
          <Row className="section-header">
            <h5>Envelope Control</h5>
          </Row>
          <Row className="envelope-controls">
            <Col xs={1}>
              <p>Attack: </p>
            </Col>
            <Col className="bar" sm={1}>
              <Slider
                orientation="vertical"
                min={0}
                max={2}
                value={this.state.Attack}
                step={0.1}
                onChange={this.updateAttack}
                valueLabelDisplay="auto"
              />
            </Col>
            <Col xs={1}>
              <p>Decay: </p>
            </Col>
            <Col className="bar" sm={1}>
              <Slider
                orientation="vertical"
                min={0}
                max={2}
                value={this.state.Decay}
                step={0.1}
                onChange={this.updateDecay}
                valueLabelDisplay="auto"
              />
            </Col>
            <Col xs={1}>
              <p>Sustain: </p>
            </Col>
            <Col className="bar" sm={1}>
              <Slider
                orientation="vertical"
                min={0}
                max={1}
                value={this.state.Sustain}
                step={0.1}
                onChange={this.updateSustain}
                valueLabelDisplay="auto"
              />
            </Col>
            <Col xs={1}>
              <p>Release: </p>
            </Col>
            <Col className="bar" sm={1}>
              <Slider
                orientation="vertical"
                min={0}
                max={5}
                value={this.state.Release}
                step={0.1}
                onChange={this.updateRelease}
                valueLabelDisplay="auto"
              />
            </Col>
          </Row>
        </Container>

        <br />
        <br />

        <Container className="oscillator-container">
          <Row className="section-header">
            <h5>Oscillator Type</h5>
          </Row>
          <Row className="oscillators">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="oscillators"
                name="oscillator"
                value={oscillator}
                onChange={this.updateOscillator}
                row
              >
                <FormControlLabel
                  value="triangle"
                  control={<Radio />}
                  label="Triangle"
                />
                <FormControlLabel
                  value="sine"
                  control={<Radio />}
                  label="Sine"
                />
                <FormControlLabel
                  value="square"
                  control={<Radio />}
                  label="Square"
                />
                <FormControlLabel
                  value="sawtooth"
                  control={<Radio />}
                  label="Sawtooth"
                />
              </RadioGroup>
            </FormControl>
          </Row>
        </Container>
      </>
    );
  }
}

export default SynthPage;

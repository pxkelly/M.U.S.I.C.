(this.webpackJsonpmusic=this.webpackJsonpmusic||[]).push([[0],{54:function(_,e,t){},56:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),react_bootstrap__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(41),react_bootstrap__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(19),react_bootstrap__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(13),tone__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(24),_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(27),_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(33),_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(49),_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(90),_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(50),_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(89),_App_css__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(54),_App_css__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_18__),_Pages_css__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(79),_Pages_css__WEBPACK_IMPORTED_MODULE_19___default=__webpack_require__.n(_Pages_css__WEBPACK_IMPORTED_MODULE_19__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(8),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__),synth=(new tone__WEBPACK_IMPORTED_MODULE_11__.a).toDestination(),distortion=new tone__WEBPACK_IMPORTED_MODULE_11__.b(0).toDestination(),reverb=new tone__WEBPACK_IMPORTED_MODULE_11__.d(0).toDestination(),vibrato=new tone__WEBPACK_IMPORTED_MODULE_11__.g(0,0).toDestination(),pitch=new tone__WEBPACK_IMPORTED_MODULE_11__.f(0).toDestination(),pan=new tone__WEBPACK_IMPORTED_MODULE_11__.e(0).toDestination(),lowpass=new tone__WEBPACK_IMPORTED_MODULE_11__.c(0,"lowpass").toDestination(),highpass=new tone__WEBPACK_IMPORTED_MODULE_11__.c(2e4,"highpass").toDestination(),effects=[],attack=0,decay=0,sustain=1,release=0;synth.envelope.attack=attack,synth.envelope.decay=decay,synth.envelope.sustain=sustain,synth.envelope.release=release;var oscillator="triangle",keyDown=!1,SynthPage=function(_Component){Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(SynthPage,_Component);var _super=Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__.a)(SynthPage);function SynthPage(_){var e;return Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,SynthPage),(e=_super.call(this,_)).state={Distortion:0,DistortionOn:!1,ReverbRoom:0,ReverbOn:!1,VibratoFreq:0,VibratoPitch:0,VibratoOn:!1,Pitch:0,PitchOn:!1,Pan:0,PanOn:!1,LowpassCut:0,LowpassOn:!1,HighpassCut:2e4,HighpassOn:!1,TriangleOsc:!0,Attack:0,Decay:0,Sustain:1,Release:0},e.synthState={Octave:4,DistortionOn:!1,ReverbOn:!1,VibratoOn:!1,PitchOn:!1,PanOn:!1,LowpassOn:!1,HighpassOn:!1},e.synthControl=e.synthControl.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.synthOff=e.synthOff.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.updateDistortion=e.updateDistortion.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.toggleDistortion=e.toggleDistortion.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.updateReverbRoom=e.updateReverbRoom.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.toggleReverb=e.toggleReverb.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.updateVibratoFreq=e.updateVibratoFreq.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.updateVibratoPitch=e.updateVibratoPitch.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.toggleVibrato=e.toggleVibrato.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.updatePitch=e.updatePitch.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.togglePitch=e.togglePitch.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.updatePan=e.updatePan.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.togglePan=e.togglePan.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.updateLowpassCut=e.updateLowpassCut.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.toggleLowpass=e.toggleLowpass.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.updateHighpassCut=e.updateHighpassCut.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.toggleHighpass=e.toggleHighpass.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.updateAttack=e.updateAttack.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.updateDecay=e.updateDecay.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.updateSustain=e.updateSustain.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.updateRelease=e.updateRelease.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.updateOscillator=e.updateOscillator.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.addEffect=e.addEffect.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.removeEffect=e.removeEffect.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.refreshSynth=e.refreshSynth.bind(Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e}return Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(SynthPage,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.synthControl,!1,Object(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _(){return C_Users_peter_Desktop_music_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,tone__WEBPACK_IMPORTED_MODULE_11__.i();case 2:case"end":return _.stop()}}),_)})))),document.addEventListener("keyup",this.synthOff,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.synthControl,!1),document.removeEventListener("keyup",this.synthOff,!1)}},{key:"synthControl",value:function(_){var e=tone__WEBPACK_IMPORTED_MODULE_11__.h(),t="",s=0,a=0;"a"!==_.key||keyDown?"s"!==_.key||keyDown?"d"!==_.key||keyDown?"f"!==_.key||keyDown?"g"!==_.key||keyDown?"h"!==_.key||keyDown?"j"!==_.key||keyDown?"k"!==_.key||keyDown?"z"===_.key?(s=this.synthState.Octave)>0&&(a=s-1,this.synthState.Octave=a):"x"===_.key&&(s=this.synthState.Octave)<7&&(a=s+1,this.synthState.Octave=a):(s=this.synthState.Octave,t="C"+(s+=1).toString(),synth.triggerAttack(t,e),keyDown=!0):(t="B"+this.synthState.Octave.toString(),synth.triggerAttack(t,e),keyDown=!0):(t="A"+this.synthState.Octave.toString(),synth.triggerAttack(t,e),keyDown=!0):(t="G"+this.synthState.Octave.toString(),synth.triggerAttack(t,e),keyDown=!0):(t="F"+this.synthState.Octave.toString(),synth.triggerAttack(t,e),keyDown=!0):(t="E"+this.synthState.Octave.toString(),synth.triggerAttack(t,e),keyDown=!0):(t="D"+this.synthState.Octave.toString(),synth.triggerAttack(t,e),keyDown=!0):(t="C"+this.synthState.Octave.toString(),synth.triggerAttack(t,e),keyDown=!0)}},{key:"synthOff",value:function(_){var e=tone__WEBPACK_IMPORTED_MODULE_11__.h();"asdfghjk".includes(_.key)&&(synth.triggerRelease(e),keyDown=!1)}},{key:"updateDistortion",value:function(_,e){distortion.distortion=e,this.setState({Distortion:e}),this.refreshSynth()}},{key:"toggleDistortion",value:function(_){this.synthState.DistortionOn=_.target.checked,this.setState({DistortionOn:_.target.checked}),this.synthState.DistortionOn?this.addEffect("distortion"):(distortion.distortion=0,this.setState({Distortion:0}),this.removeEffect("distortion"))}},{key:"updateReverbRoom",value:function(_,e){reverb.roomSize.input.value=e,this.setState({ReverbRoom:e}),this.refreshSynth()}},{key:"toggleReverb",value:function(_){this.synthState.ReverbOn=_.target.checked,this.setState({ReverbOn:_.target.checked}),this.synthState.ReverbOn?this.addEffect("reverb"):(reverb.roomSize.input.value=0,this.setState({ReverbRoom:0}),this.removeEffect("reverb"))}},{key:"updateVibratoFreq",value:function(_,e){vibrato.frequency.value=e,this.setState({VibratoFreq:e}),this.refreshSynth()}},{key:"updateVibratoPitch",value:function(_,e){vibrato.depth.input.value=e,this.setState({VibratoPitch:e}),this.refreshSynth()}},{key:"toggleVibrato",value:function(_){this.synthState.VibratoOn=_.target.checked,this.setState({VibratoOn:_.target.checked}),this.synthState.VibratoOn?this.addEffect("vibrato"):(vibrato.frequency.value=0,vibrato.depth.input.value=0,this.setState({VibratoFreq:0}),this.setState({VibratoPitch:0}),this.removeEffect("vibrato"))}},{key:"updatePitch",value:function(_,e){pitch.pitch=e,this.setState({Pitch:e}),this.refreshSynth()}},{key:"togglePitch",value:function(_){this.synthState.PitchOn=_.target.checked,this.setState({PitchOn:_.target.checked}),this.synthState.PitchOn?this.addEffect("pitch"):(pitch.pitch=0,this.setState({Pitch:0}),this.removeEffect("pitch"))}},{key:"updatePan",value:function(_,e){pan.pan.input.value=e,this.setState({Pan:e}),this.refreshSynth()}},{key:"togglePan",value:function(_){this.synthState.PanOn=_.target.checked,this.setState({PanOn:_.target.checked}),this.synthState.PanOn?this.addEffect("pan"):(pan.pan.input.value=0,this.setState({Pan:0}),this.removeEffect("pan"))}},{key:"updateLowpassCut",value:function(_,e){lowpass.frequency.value=e,this.setState({LowpassCut:e}),this.refreshSynth()}},{key:"toggleLowpass",value:function(_){this.synthState.LowpassOn=_.target.checked,this.setState({LowpassOn:_.target.checked}),this.synthState.LowpassOn?this.addEffect("lowpass"):(lowpass.frequency.value=0,this.setState({LowpassCut:0}),this.removeEffect("lowpass"))}},{key:"updateHighpassCut",value:function(_,e){highpass.frequency.value=e,this.setState({HighpassCut:e}),this.refreshSynth()}},{key:"toggleHighpass",value:function(_){this.synthState.HighpassOn=_.target.checked,this.setState({HighpassOn:_.target.checked}),this.synthState.HighpassOn?this.addEffect("highpass"):(highpass.frequency.value=2e4,this.setState({HighpassCut:2e4}),this.removeEffect("highpass"))}},{key:"updateAttack",value:function(_,e){attack=e,this.setState({Attack:e}),this.refreshSynth()}},{key:"updateDecay",value:function(_,e){decay=e,this.setState({Decay:e}),this.refreshSynth()}},{key:"updateSustain",value:function(_,e){sustain=e,this.setState({Sustain:e}),this.refreshSynth()}},{key:"updateRelease",value:function(_,e){release=e,this.setState({Release:e}),this.refreshSynth()}},{key:"updateOscillator",value:function(_){oscillator=_.target.value,"triangle"!==_.target.value?this.setState({TriangleOsc:!1}):this.setState({TriangleOsc:!0}),this.refreshSynth()}},{key:"addEffect",value:function(_){effects.push(_)}},{key:"removeEffect",value:function(_){var e=effects.indexOf(_);effects.splice(e,1)}},{key:"refreshSynth",value:function refreshSynth(){synth=(new tone__WEBPACK_IMPORTED_MODULE_11__.a).toDestination(),effects.forEach((function(effect){return synth.connect(eval(effect))})),synth.oscillator.type=oscillator,synth.envelope.attack=attack,synth.envelope.decay=decay,synth.envelope.sustain=sustain,synth.envelope.release=release}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.a,{className:"controls-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"section-header",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("h5",{children:"Controls"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"controls",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Use keys a, s, d, f, g, h, j, and k to play notes"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"controls",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"The a key corresponds to a C note, s to D, and so on"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"controls",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Use z to decrease the octave and x to increase the octave"})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.a,{className:"effects-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"section-header",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("h5",{children:"Synth Effects"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"effects",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:2,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Distortion"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"slider",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Level: "})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"bar",sm:1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_12__.a,{orientation:"vertical",min:0,max:10,value:this.state.Distortion,step:.1,onChange:this.updateDistortion,disabled:!this.synthState.DistortionOn,valueLabelDisplay:"auto"})})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"switch",xs:2,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_13__.a,{onChange:this.toggleDistortion,checked:this.state.DistortionOn,color:"primary"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:2,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Reverb"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"slider",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Level: "})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"bar",sm:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_12__.a,{orientation:"vertical",min:0,max:.9,value:this.state.ReverbRoom,step:.1,onChange:this.updateReverbRoom,disabled:!this.state.ReverbOn,valueLabelDisplay:"auto"})})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"switch",xs:2,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_13__.a,{onChange:this.toggleReverb,checked:this.synthState.ReverbOn,color:"primary"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:2,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Vibrato"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"slider",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Speed: "})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"bar",sm:1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_12__.a,{orientation:"vertical",min:0,max:10,value:this.state.VibratoFreq,step:.1,onChange:this.updateVibratoFreq,disabled:!this.state.VibratoOn,valueLabelDisplay:"auto"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Level: "})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"bar",sm:1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_12__.a,{orientation:"vertical",min:0,max:1,value:this.state.VibratoPitch,step:.1,onChange:this.updateVibratoPitch,disabled:!this.state.VibratoOn,valueLabelDisplay:"auto"})})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"switch",xs:2,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_13__.a,{onChange:this.toggleVibrato,checked:this.state.VibratoOn,color:"primary"})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"effects",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:2,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Detune"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"slider",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Level: "})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"bar",sm:1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_12__.a,{orientation:"vertical",min:-24,max:24,value:this.state.Pitch,step:1,onChange:this.updatePitch,disabled:!this.synthState.PitchOn,valueLabelDisplay:"auto"})})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"switch",xs:2,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_13__.a,{onChange:this.togglePitch,checked:this.state.PitchOn,color:"primary"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:2,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Pan"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"slider",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Level: "})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"bar",sm:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_12__.a,{orientation:"vertical",min:-1,max:1,value:this.state.Pan,step:.1,onChange:this.updatePan,disabled:!this.state.PanOn,valueLabelDisplay:"auto"})})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"switch",xs:2,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_13__.a,{onChange:this.togglePan,checked:this.synthState.PanOn,color:"primary"})})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.a,{className:"filter-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"section-header",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("h5",{children:"Filter Control"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"filters",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:2,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Lowpass"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"slider",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Freq: "})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"bar",sm:1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_12__.a,{orientation:"vertical",min:0,max:5e3,value:this.state.LowpassCut,step:10,onChange:this.updateLowpassCut,disabled:!this.synthState.LowpassOn,valueLabelDisplay:"auto"})})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"switch",xs:2,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_13__.a,{onChange:this.toggleLowpass,checked:this.state.LowpassOn,color:"primary"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:2,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Highpass"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"slider",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Freq: "})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"bar",sm:3,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_12__.a,{orientation:"vertical",min:5e3,max:2e4,value:this.state.HighpassCut,step:10,onChange:this.updateHighpassCut,disabled:!this.state.HighpassOn,valueLabelDisplay:"auto"})})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"switch",xs:2,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_13__.a,{onChange:this.toggleHighpass,checked:this.synthState.HighpassOn,color:"primary"})})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.a,{className:"envelope-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"section-header",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("h5",{children:"Envelope Control"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"envelope-controls",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Attack: "})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"bar",sm:1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_12__.a,{orientation:"vertical",min:0,max:2,value:this.state.Attack,step:.1,onChange:this.updateAttack,valueLabelDisplay:"auto"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Decay: "})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"bar",sm:1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_12__.a,{orientation:"vertical",min:0,max:2,value:this.state.Decay,step:.1,onChange:this.updateDecay,valueLabelDisplay:"auto"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Sustain: "})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"bar",sm:1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_12__.a,{orientation:"vertical",min:0,max:1,value:this.state.Sustain,step:.1,onChange:this.updateSustain,valueLabelDisplay:"auto"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{xs:1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("p",{children:"Release: "})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,{className:"bar",sm:1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_12__.a,{orientation:"vertical",min:0,max:5,value:this.state.Release,step:.1,onChange:this.updateRelease,valueLabelDisplay:"auto"})})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.a,{className:"oscillator-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"section-header",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("h5",{children:"Oscillator Type"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{className:"oscillators",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_17__.a,{component:"fieldset",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15__.a,{"aria-label":"oscillators",name:"oscillator",value:oscillator,onChange:this.updateOscillator,row:!0,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__.a,{value:"triangle",control:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__.a,{}),label:"Triangle"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__.a,{value:"sine",control:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__.a,{}),label:"Sine"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__.a,{value:"square",control:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__.a,{}),label:"Square"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_16__.a,{value:"sawtooth",control:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__.a,{}),label:"Sawtooth"})]})})})]})]})}}]),SynthPage}(react__WEBPACK_IMPORTED_MODULE_7__.Component);__webpack_exports__.a=SynthPage},69:function(_,e,t){},79:function(_,e,t){},87:function(_,e,t){"use strict";t.r(e);var s=t(5),a=t.n(s),r=t(34),i=t.n(r),c=(t(69),t(58)),n=t(18),o=(t(54),t(56)),E=t(0),O=t(1),l=t(6),D=t(3),P=t(2),u=t(41),h=t(19),b=t(112),M=t(24),p=t(8),d=function(_){Object(D.a)(t,_);var e=Object(P.a)(t);function t(_){var s;return Object(E.a)(this,t),(s=e.call(this,_)).handleClick=s.handleClick.bind(Object(l.a)(s)),s}return Object(O.a)(t,[{key:"handleClick",value:function(){M.i()}},{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(u.a,{className:"welcome-container",children:[Object(p.jsx)(h.a,{className:"section-header",children:Object(p.jsx)("h1",{children:"Welcome to M.U.S.I.C."})}),Object(p.jsx)(h.a,{className:"welcome",children:Object(p.jsx)("p",{children:"M.U.S.I.C. stands for Malleable User-Created Synth Instant Creator"})}),Object(p.jsx)(h.a,{className:"welcome",children:Object(p.jsx)("p",{children:"Basically, it's a tool that allows you to create and edit a synthesizer in a simple and accessible way"})}),Object(p.jsx)(h.a,{className:"welcome",children:Object(p.jsx)("p",{children:"This tool was created as the final project for Professor Carter's Music270 at Hamilton College by Peter Kelly"})}),Object(p.jsx)(h.a,{className:"welcome",children:Object(p.jsx)("p",{children:"It was written in Javascript using React and the Tone.js library"})}),Object(p.jsx)(h.a,{className:"welcome",children:Object(p.jsx)("p",{children:"*NOTE* Tone.js is very computationally expensive, so if you hear any crackling in the audio, please refresh the page"})}),Object(p.jsx)(h.a,{className:"welcome",children:Object(p.jsx)("a",{href:"https://github.com/pxkelly/MUSIC",children:"Click me to go to the GitHub repository for the code"})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(h.a,{className:"welcome",children:Object(p.jsx)("p",{children:"Otherwise, click this button to get started!"})}),Object(p.jsx)(h.a,{className:"welcome",children:Object(p.jsx)(b.a,{variant:"contained",color:"primary",href:"#synth",onClick:this.handleClick,children:"Launch M.U.S.I.C."})})]})})}}]),t}(s.Component),m=(t(84),function(){return Object(p.jsx)("div",{className:"error",children:Object(p.jsx)("h1",{children:" ERROR: Page not found "})})});var j=function(){return Object(p.jsx)(c.a,{basename:"/",children:Object(p.jsxs)(n.c,{children:[Object(p.jsx)(n.a,{exact:!0,path:"/",component:d}),Object(p.jsx)(n.a,{path:"/synth",component:o.a}),Object(p.jsx)(n.a,{component:m})]})})},C=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,114)).then((function(e){var t=e.getCLS,s=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;t(_),s(_),a(_),r(_),i(_)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root")),C()}},[[87,1,2]]]);
//# sourceMappingURL=main.d62da5ec.chunk.js.map
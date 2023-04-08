import './App.css';
import React from "react";
//import { useEffect } from 'react';



class DrumMachine extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    sound: "",
    volume: 0.5
  }
}

handleClickQ() {
  const audio = document.querySelector("#Q");
  audio.play();
  this.setState({
    sound: "Heater 1",
  })

}
handleClickW() {
  const audio = document.querySelector("#W");
  audio.play();
  this.setState({
    sound: "Heater 2",
    
  })
}
handleClickE() {
  const audio = document.querySelector("#E");
  audio.play();
  this.setState({
    sound: "Heater 3",
  })
}
handleClickA() {
  const audio = document.querySelector("#A");
  audio.play();
  this.setState({
    sound: "Heater 4",
  })
}
handleClickS() {
  const audio = document.querySelector("#S");
  audio.play();
  this.setState({
    sound: "Clap",
  })
}
handleClickD() {
  const audio = document.querySelector("#D");
  audio.play();
  this.setState({
    sound: "Open-HH",
  })
}
handleClickZ() {
  const audio = document.querySelector("#Z");
  audio.play();
  this.setState({
    sound: "Kick-n'-Hat",
  })
}
handleClickX() {
  const audio = document.querySelector("#X");
  audio.play();
  this.setState({
    sound: "Kick",
  })
}
handleClickC() {
  const audio = document.querySelector("#C");
  audio.play();
  this.setState({
    sound: "Closed-HH",
  })
}
handleChange(event) {
  this.setState({
    volume: event.target.value
  })
}







render() {
  //const input = document.querySelector(".volumeRange");
  //const value = document.querySelector("#value");
  window.document.onkeyup = (event) => {
   switch(event.key) {
    case "q":
      return this.handleClickQ();
    case "Q":
      return this.handleClickQ();
    case "w":
      return this.handleClickW();
    case "W":
      return this.handleClickW();
    case "e":
      return this.handleClickE();
    case "E":
      return this.handleClickE();
    case "a":
      return this.handleClickA();
    case "A":
      return this.handleClickA();
    case "s":
      return this.handleClickS();
    case "S":
      return this.handleClickS();
    case "d":
      return this.handleClickD();
    case "D":
      return this.handleClickD();
    case "z":
      return this.handleClickZ();
    case "Z":
      return this.handleClickZ();
    case "x":
      return this.handleClickX();
    case "X":
      return this.handleClickX();
    case "c":
      return this.handleClickC();
    case "C":
      return this.handleClickC();
    default:
      break;
   }
  }
  

  return (
    <div className="container" id="display" /*onKeyDown={this.handleKeyDown.bind(this)}*/>
      <div className="keypadContainer">
        <div className="row1">
          <button className="drum-pad" id="heater-1" onClick={this.handleClickQ.bind(this)}><audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q</button>
          <button className="drum-pad" id="heater-2" onClick={this.handleClickW.bind(this)}><audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>W</button>
          <button className="drum-pad" id="heater-3" onClick={this.handleClickE.bind(this)}><audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>E</button>
        </div>
        <div className="row2">
          <button className="drum-pad" id="heater-4" onClick={this.handleClickA.bind(this)}><audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>A</button>
          <button className="drum-pad" id="clap" onClick={this.handleClickS.bind(this)}><audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>S</button>
          <button className="drum-pad" id="open-hh" onClick={this.handleClickD.bind(this)}><audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>D</button>
        </div>
        <div className="row3">
          <button className="drum-pad" id="kick-n'-hat" onClick={this.handleClickZ.bind(this)}><audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>Z</button>
          <button className="drum-pad" id="kick" onClick={this.handleClickX.bind(this)}><audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>X</button>
          <button className="drum-pad" id="closed-hh" onClick={this.handleClickC.bind(this)}><audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>C</button>
        </div>
      </div>
      <div className="rightContainer">
        <div className="soundType">
        {this.state.sound}
        </div>
        <div className="volumeContainer">
          <input type="range" min="0" max="100" step="1" className="volumeRange" onChange={this.handleChange.bind(this)}/>
          <output id="#value">{this.state.volume}</output>
        </div>

      </div>
    </div>
  )
}
}

function App() {
  return (
    <div>
    <div className="App" id="drum-machine">
      <DrumMachine />
    </div>
    <div><p style={{color: "white", position: "absolute", bottom: "30px", margin: "auto", right: "50%"}}>By Egute Robson</p></div>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', this.deviceOrientationHandler, false);
      console.log('listening for device orientation.......');
      document.getElementById("data").innerText = "Supported!";
    }
  }

  deviceOrientationHandler = (e) => {
    const { beta, gamma } = e;
    console.log(Math.abs(beta), Math.abs(gamma));

    if(Math.abs(beta) > 20 | Math.abs(gamma) > 20) {
        document.getElementById("data").innerText = "Severe accident alert. Immediate Action required";
    }
  }

  render() {
    return (
      <div>
        <h1 id="data">tracking device speed</h1>
      </div>
    );
  }
}

export default App;

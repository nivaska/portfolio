import React, { Component } from "react";

import MainWindow from "./MainWindow";
import "./App.css";
import icon from "../resources/app-icon.svg";

class App extends Component {
  render() {
    return (
      <div className="window-container">
        <MainWindow />
        <div className="desktop-icon">
          <div>
            <img src={icon} alt="app logo"></img>
            <p>Nivas Profile</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

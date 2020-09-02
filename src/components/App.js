import React, { Component } from "react";

import MainWindow from "./MainWindow";
import "./App.css";
import icon from "../resources/app-icon.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showApp: true,
    };
  }

  render() {
    return (
      <div className="window-container">
        {!this.state.showApp ? null : (
          <MainWindow
            Minimised={false}
            CloseWindow={() => this.setState({ showApp: false })}
          />
        )}
        <div
          className="desktop-icon"
          onDoubleClick={() => this.setState({ showApp: true })}
        >
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

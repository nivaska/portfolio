import React, { Component } from "react";
import MenuBar from "./MenuBar";
import Container from "./Container.js";

class MainWindow extends Component {
  render() {
    return (
      <div className="main-window theme-dark">
        <MenuBar title={"nivas-profile"} />
        <Container />
      </div>
    );
  }
}

export default MainWindow;

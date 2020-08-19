import React, { Component } from "react";
import MenuBar from "./MenuBar";
import Editor from "./Editor.js";

class MainWindow extends Component {
  render() {
    return (
      <div className="container-main theme-dark">
        <MenuBar title={"nivas-profile"} />
        <Editor />
      </div>
    );
  }
}

export default MainWindow;

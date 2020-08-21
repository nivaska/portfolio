import React, { Component } from "react";
import Toolbar from "./Toolbar";
import Explorer from "./explorer-components/Explorer";
import EditorFrame from "./editor-components/EditorFrame";
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEditors: [],
      openEditors: [],
      activeEditor: ""
    };
  }

  render() {
    return (
      <div className="container">
        <Toolbar />
        <Explorer />
        <EditorFrame />
      </div>
    );
  }
}

export default Container;

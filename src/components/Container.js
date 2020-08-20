import React, { Component } from "react";
import Toolbar from "./Toolbar";
import Explorer from "./explorer-components/Explorer";
class Container extends Component {
  render() {
    return (
      <div className="container">
        <Toolbar />
        <Explorer />
        <div className="editor">editor</div>
      </div>
    );
  }
}

export default Container;

import React, { Component } from "react";
import Toolbar from "./Toolbar";
import Explorer from "./Explorer";
class Container extends Component {
  render() {
    return (
      <div className="container">
        <Toolbar />
        <div style={{ background: "#a9a2a2" }}>
          <Explorer />
        </div>

        <div className="edtotr">editor</div>
      </div>
    );
  }
}

export default Container;

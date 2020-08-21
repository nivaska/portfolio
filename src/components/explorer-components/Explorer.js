import React, { Component } from "react";
import EditorSelector from "./EditorSelector";

class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="explorer">
        <EditorSelector title="OPEN EDITORS" />
        <EditorSelector title="PORTFOLIO" />
      </div>
    );
  }
}

export default Explorer;

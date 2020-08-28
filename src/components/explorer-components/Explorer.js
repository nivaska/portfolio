import React, { Component } from "react";
import EditorSelector from "./EditorSelector";
import OpenEditors from "./OpenEditors";

class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="explorer">
        <OpenEditors title="OPEN EDITORS" />
        <EditorSelector title="ANOTHER PORTFOLIO" />
      </div>
    );
  }
}

export default Explorer;

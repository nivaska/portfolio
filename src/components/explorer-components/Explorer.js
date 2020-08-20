import React, { Component } from "react";
import EditorsContainer from "./EditorsContainer";

class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="explorer">
        <EditorsContainer title="OPEN EDITORS" />
        <EditorsContainer title="PORTFOLIO" />
      </div>
    );
  }
}

export default Explorer;

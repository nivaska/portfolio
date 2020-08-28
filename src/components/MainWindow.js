import React, { Component } from "react";
import { connect } from "react-redux";

import MenuBar from "./MenuBar";
import Container from "./Container.js";

class MainWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minimised: false,
      windowClosed: props.windowClosed,
    };
  }

  render() {
    const appTitle = this.props.activeFile
      ? `${this.props.activeFile.title} - Nivas (Beta)`
      : "Nivas (Beta)";

    return this.state.windowClosed ? null : (
      <div
        className={`main-window theme-dark ${
          this.state.minimised ? "window-minimised" : ""
        }`}
      >
        <MenuBar
          title={appTitle}
          minimise={(status) => {
            this.setState({ minimised: status });
          }}
          closeApp={() => this.setState({ windowClosed: true })}
        />
        <Container />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeFile: state.activeFile,
  };
};

export default connect(mapStateToProps)(MainWindow);

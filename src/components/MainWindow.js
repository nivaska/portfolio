import React, { Component } from "react";
import { connect } from "react-redux";

import MenuBar from "./MenuBar";
import Container from "./Container.js";

class MainWindow extends Component {
  render() {
    const appTitle = this.props.activeFile
      ? `${this.props.activeFile.title} - Nivas (Beta)`
      : "Nivas (Beta)";

    return (
      <div className="main-window theme-dark">
        <MenuBar title={appTitle} />
        <Container />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeFile: state.activeFile
  };
};

export default connect(mapStateToProps)(MainWindow);

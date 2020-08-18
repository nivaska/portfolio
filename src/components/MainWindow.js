import React, { Component } from "react";

class MainWindow extends Component {
  render() {
    return (
      <div className="container-main theme-dark">
        <div className="menu-bar-top">
          <div className="toolbar-menu-list">
            <ul>
              <li>File</li>
              <li>Edit</li>
              <li>View</li>
              <li>Run</li>
              <li>Terminal</li>
              <li>Help</li>
            </ul>
          </div>
          <div class="toolbar-title">Title</div>
          <div className="toolbar-icons">
            <ul>
              <li>Minimise</li>
              <li>Maximise</li>
              <li>Close</li>
            </ul>
          </div>
        </div>
        <div className="container-editor">eitor area</div>
      </div>
    );
  }
}

export default MainWindow;

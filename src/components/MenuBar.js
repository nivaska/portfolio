import React, { Component } from "react";

class MenuBar extends Component {
  menuItems = ["File", "Edit", "View", "Run", "Terminal", "Help"];
  menuCommands = ["Minimise", "Maximise", "Close"];

  render() {
    const getMenuItemsToRender = () => {
      return this.menuItems.map((item) => <li key={item}>{item}</li>);
    };

    const getMenuCommandsToRender = () => {
      return (
        <ul>
          <li
            className="command-minimise"
            onClick={() => this.props.minimise(true)}
          >
            <button className="btn-icon">
              <i className="far fa-window-minimize"></i>
            </button>
          </li>
          <li
            className="command-maximise"
            onClick={() => this.props.minimise(false)}
          >
            <button className="btn-icon">
              <i className="far fa-window-maximize"></i>
            </button>
          </li>
          <li className="command-exit" onClick={() => this.props.closeApp()}>
            <button className="btn-icon">
              <i className="fas fa-times"></i>
            </button>
          </li>
        </ul>
      );
    };

    return (
      <div className="menubar-top">
        <div className="menubar-items">
          <span className="logo-small">
            <i className="fas fa-infinity"></i>
          </span>

          <ul>{getMenuItemsToRender()}</ul>
        </div>
        <div className="menubar-title">{this.props.title}</div>
        <div className="menubar-commands">{getMenuCommandsToRender()}</div>
      </div>
    );
  }
}

export default MenuBar;

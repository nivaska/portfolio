import React, { Component } from "react";

class MenuBar extends Component {
  menuItems = ["File", "Edit", "View", "Run", "Terminal", "Help"];
  menuCommands = ["Minimise", "Maximise", "Close"];

  render() {
    const getMenuItemsToRender = () => {
      return this.menuItems.map(item => <li>{item}</li>);
    };

    const getMenuCommandsToRender = () => {
      return (
        <ul>
          <li>
            <button className="btn-icon">
              <i className="far fa-window-minimize"></i>
            </button>
          </li>
          <li>
            <button className="btn-icon">
              <i className="far fa-window-maximize"></i>
            </button>
          </li>
          <li className="command-exit">
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
          <ul>{getMenuItemsToRender()}</ul>
        </div>
        <div class="menubar-title">{this.props.title}</div>
        <div className="menubar-commands">{getMenuCommandsToRender()}</div>
      </div>
    );
  }
}

export default MenuBar;

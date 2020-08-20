import React, { Component } from "react";

class Toolbar extends Component {
  profileLink = "https://www.linkedin.com/in/nivas-k-22152b79/";
  gitLink = "https://github.com/nivaska";

  render() {
    return (
      <div className="toolbar-left">
        <ul>
          <li>
            <button className="btn-icon-large">
              <i className="far fa-copy"></i>
            </button>
          </li>
          <li>
            <button className="btn-icon-large">
              <i className="fas fa-search fa-rotate-90"></i>
            </button>
          </li>
          <li>
            <a className="btn-icon-large" href={this.gitLink} target="_blank">
              <i className="fas fa-code-branch"></i>
            </a>
          </li>
          <li>
            <button className="btn-icon-large">
              <i className="fas fa-bug"></i>
            </button>
          </li>
          <li>
            <button className="btn-icon-large">
              <i className="fas fa-terminal"></i>
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <a
              className="btn-icon-large"
              href={this.profileLink}
              target="_blank"
            >
              <i className="far fa-user-circle"></i>
            </a>
          </li>
          <li>
            <button className="btn-icon-large">
              <i className="fas fa-cog"></i>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Toolbar;

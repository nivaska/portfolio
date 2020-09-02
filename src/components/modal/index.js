import React, { Component } from "react";
import "./modal.css";

class Modal extends Component {
  render() {
    if (!this.props.Show) return null;

    return (
      <React.Fragment>
        <div className="niv-modal">
          <div className="niv-modal-title">
            <label>{this.props.title}</label>
          </div>
          <div className="niv-modal-content">{this.props.children}</div>
          <div className="niv-modal-footer">
            <div className="niv-modal-btn">
              <button onClick={() => this.props.OkAction()}>OK</button>
            </div>
            <div className="niv-modal-btn">
              <button onClick={() => this.props.CancelAction()}>Cancel</button>
            </div>
          </div>
        </div>

        <div
          className="niv-modal-overlay"
          onClick={() => this.props.CancelAction()}
        ></div>
      </React.Fragment>
    );
  }
}

export default Modal;

import React, { Component } from "react";
import "./modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    if (!this.state.active) return null;

    return (
      <div className="niv-modal">
        <div className="niv-modal-title">
          <label>{this.props.title}</label>
        </div>
        <div className="niv-modal-content">{this.props.children}</div>
        <div className="niv-modal-footer">
          <div className="niv-modal-btn">
            {this.props.ok.enable ? (
              <button onClick={() => this.props.ok.execute}>
                {this.props.ok.label}
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="niv-modal-btn">
            {this.props.cancel.enable ? (
              <button onClick={() => this.setState({ active: false })}>
                {this.props.cancel.label}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

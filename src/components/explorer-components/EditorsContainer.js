import React, { Component } from "react";

class EditorsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      expanded: false,
    };
  }
  render() {
    const getArrowIcon = () => {
      return this.state.expanded ? (
        <i className="fas fa-angle-down"></i>
      ) : (
        <i className="fas fa-angle-right"></i>
      );
    };
    return (
      <div>
        <div
          className="editor-label"
          onClick={() => {
            this.setState({ expanded: !this.state.expanded });
          }}
        >
          <span style={{ padding: "0 5px" }}>{getArrowIcon()}</span>
          <span>{this.state.title}</span>
        </div>

        <div
          className={`editor-list ${
            !this.state.expanded ? "collapsed-edtior" : ""
          }`}
        >
          <ul>
            <li>test 1</li>
            <li>test 1</li>
            <li>test 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default EditorsContainer;

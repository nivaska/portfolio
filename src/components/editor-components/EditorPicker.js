import React, { Component } from "react";
import { connect } from "react-redux";

class EditorPicker extends Component {
  render() {
    const renderOpenFilesList = () => {
      return (
        <ul className="editor-picker-list">
          {this.props.files.map(file => (
            <li>{file.title}</li>
          ))}
        </ul>
      );
    };

    return <div className="editor-picker">{renderOpenFilesList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    files: state.openFiles
  };
};

export default connect(mapStateToProps)(EditorPicker);

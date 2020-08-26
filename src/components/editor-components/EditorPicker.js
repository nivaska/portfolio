import React, { Component } from "react";
import { connect } from "react-redux";
import { closeFile } from "../../redux/actions";

class EditorPicker extends Component {
  render() {
    const renderOpenFilesList = () => {
      return (
        <ul className="editor-picker-list">
          {this.props.files.map((file) => (
            <li>
              <span className="btn-icon-small">
                <i className="fas fa-file-alt"></i>
              </span>
              {file.title}
              <button
                className="btn-icon-small close-btn"
                onClick={() => this.props.closeFile(file)}
              >
                <i className="fas fa-times"></i>
              </button>
            </li>
          ))}
        </ul>
      );
    };

    return <div className="editor-picker">{renderOpenFilesList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    files: state.openFiles,
  };
};

export default connect(mapStateToProps, { closeFile })(EditorPicker);

import React, { Component } from "react";
import { connect } from "react-redux";
import { closeFile, openFile, setFileActive } from "../../redux/actions";

class EditorPicker extends Component {
  render() {
    const renderOpenFilesList = () => {
      const closeOpenedFile = file => {
        let newActiveFile = null;
        if (this.props.files.length > 1) {
          console.log(this.props.files);
          newActiveFile = this.props.files
            .filter(f => f.title !== file.title)
            .pop();
        }

        this.props.closeFile(file);
        this.props.setFileActive(newActiveFile);
      };

      return (
        <ul className="editor-picker-list">
          {this.props.files.map(file => {
            const activeFileStyles =
              this.props.activeFile &&
              this.props.activeFile.title === file.title
                ? "active-file"
                : "";

            return (
              <li
                className={activeFileStyles}
                key={file.title}
                onClick={() => this.props.openFile(file)}
              >
                <span className="btn-icon-small">
                  <i className="fas fa-file-alt"></i>
                </span>
                {file.title}
                <button
                  className="btn-icon-small close-btn"
                  onClick={e => {
                    e.stopPropagation();
                    closeOpenedFile(file);
                  }}
                >
                  <i className="fas fa-times"></i>
                </button>
              </li>
            );
          })}
        </ul>
      );
    };

    return <div className="editor-picker">{renderOpenFilesList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    files: state.openFiles,
    activeFile: state.activeFile
  };
};

export default connect(mapStateToProps, { closeFile, openFile, setFileActive })(
  EditorPicker
);

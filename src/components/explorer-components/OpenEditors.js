import React, { Component } from "react";
import { connect } from "react-redux";
import { closeFile, openFile, setFileActive } from "../../redux/actions";

class OpenEditors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      expanded: true
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

    const renderFilesList = () => {
      const closeOpenedFile = file => {
        let newActiveFile = null;
        if (this.props.files.length > 1)
          newActiveFile = this.props.files
            .filter(f => f.title !== file.title)
            .pop();

        this.props.closeFile(file);
        this.props.setFileActive(newActiveFile);
      };

      return (
        <ul className="list-editors">
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
                <button
                  className="btn-icon-small close-btn"
                  onClick={e => {
                    e.stopPropagation();
                    closeOpenedFile(file);
                  }}
                >
                  <i className="fas fa-times"></i>
                </button>

                <span className="file-icon">
                  <i className="fas fa-file-alt"></i>
                </span>

                <span>{file.title}</span>
              </li>
            );
          })}
        </ul>
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
          {renderFilesList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    files: state.openFiles,
    activeFile: state.activeFile
  };
};
export default connect(mapStateToProps, { closeFile, openFile, setFileActive })(
  OpenEditors
);

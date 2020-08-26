import React, { Component } from "react";
import { connect } from "react-redux";
import { openFile } from "../../redux/actions";

class EditorSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      expanded: true
    };
  }

  componentDidMount() {
    const skillsFile = this.props.files.find(f => f.title === "skills.txt");
    const experienceFile = this.props.files.find(
      f => f.title === "experience.txt"
    );
    this.props.openFile(experienceFile);
    this.props.openFile(skillsFile);
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
    files: state.allFiles,
    activeFile: state.activeFile
  };
};

export default connect(mapStateToProps, { openFile })(EditorSelector);

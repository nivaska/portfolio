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
          {this.props.files.map(file => (
            <li key={file.title} onClick={() => this.props.openFile(file)}>
              <span className="btn-icon-small">
                <i className="fas fa-file-alt"></i>
              </span>
              {file.title}
            </li>
          ))}
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
    files: state.allFiles
  };
};

export default connect(mapStateToProps, { openFile })(EditorSelector);

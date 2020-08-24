import React, { Component } from "react";
import { connect } from "react-redux";
import { closeFile } from "../../redux/actions";

class OpenEditors extends Component {
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

    const renderFilesList = () => {
      return this.props.files.map((file) => (
        <li key={file.title}>
          <span className="btn-icon-small">
            <i className="fas fa-file-alt"></i>
          </span>

          {file.title}

          <button
            className="btn-icon-small"
            onClick={() => this.props.closeFile(file)}
          >
            <i className="fas fa-times"></i>{" "}
          </button>
        </li>
      ));
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
          <ul className="list-editors">{renderFilesList()}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    files: state.openFiles,
  };
};
export default connect(mapStateToProps, { closeFile })(OpenEditors);

import React, { Component } from "react";
import { connect } from "react-redux";

class EditorContent extends Component {
  render() {
    return (
      <div
        contentEditable="true"
        spellCheck="false"
        className="editor-content"
        dangerouslySetInnerHTML={{
          __html: this.props.activeFile ? this.props.activeFile.content : ""
        }}
      ></div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeFile: state.activeFile
  };
};

export default connect(mapStateToProps)(EditorContent);

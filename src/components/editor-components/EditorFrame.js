import React, { Component } from "react";

import EditorPicker from "./EditorPicker";
import EdtiorContent from "./EditorContent";

class EditorFrame extends Component {
  render() {
    return (
      <div className="editor-frame">
        <EditorPicker />
        <EdtiorContent />
      </div>
    );
  }
}

export default EditorFrame;

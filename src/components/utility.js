import React from "react";

export const getFileIcon = fileType => {
  switch (fileType) {
    case "js":
      return <i class="fab fa-js-square"></i>;
    case "md":
      return <i class="fab fa-markdown"></i>;
    case "txt":
    default:
      return <i className="fas fa-file-alt"></i>;
  }
};

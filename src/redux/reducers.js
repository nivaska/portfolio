import { combineReducers } from "redux";
import { skills, aboutMe, readMe, contact, projects } from "../textContent";

const filesAvailable = () => {
  return [
    { title: "skills.js", type: "js", content: skills },
    { title: "about-me.txt", type: "txt", content: aboutMe },
    { title: "projects.txt", type: "txt", content: projects },
    { title: "contact.json", type: "json", content: contact },
    { title: "README.MD", type: "md", content: readMe }
  ];
};

const filesOpen = (state = [], action) => {
  switch (action.type) {
    case "FILE_CLOSED":
      return state.filter(file => file.title !== action.payload.title);
    case "FILE_OPENED":
      if (
        state.filter(file => file.title === action.payload.title).length === 0
      ) {
        return [...state, action.payload];
      }
    default:
      return state;
  }
};

const fileActive = (state = null, action) => {
  switch (action.type) {
    case "FILE_OPENED":
    case "FILE_ACTIVE":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  allFiles: filesAvailable,
  openFiles: filesOpen,
  activeFile: fileActive
});

import { combineReducers } from "redux";
import { skills } from "../textContent";

const filesAvailable = () => {
  return [
    { title: "skills.js", type: "js", content: skills },
    { title: "personal-info.txt", type: "txt", content: "c#, asp.net " },
    { title: "experience.txt", type: "txt", content: "software developer " },
    { title: "contact.txt", type: "txt", content: "nivas.anand@umlaut.com " },
    { title: "README.MD", type: "md", content: "nivas.anand@umlaut.com " }
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

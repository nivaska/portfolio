import { combineReducers } from "redux";

const filesAvailable = () => {
  return [
    { title: "skills.txt", content: "c#, asp.net " },
    { title: "personal-info.txt", content: "c#, asp.net " },
    { title: "experience.txt", content: "software developer " },
    { title: "contact.txt", content: "nivas.anand@umlaut.com " },
  ];
};

const filesOpen = (state = [], action) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "FILE_CLOSED":
      return state.filter((file) => file.title !== action.payload.title);
    case "FILE_OPENED":
      if (
        state.filter((file) => file.title === action.payload.title).length === 0
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
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  allFiles: filesAvailable,
  openFiles: filesOpen,
  activeFile: fileActive,
});
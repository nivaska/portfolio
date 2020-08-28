export const openFile = file => {
  return {
    type: "FILE_OPENED",
    payload: file
  };
};

export const closeFile = file => {
  return {
    type: "FILE_CLOSED",
    payload: file
  };
};

export const setFileActive = file => {
  return {
    type: "FILE_ACTIVE",
    payload: file
  };
};

export const setFileTab = (tab, status) => {
  return {
    type: "SET_ACTIVE_TAB",
    payload: {
      tab: tab,
      active: status
    }
  };
};

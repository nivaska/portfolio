export const openFile = (file) => {
  return {
    type: "FILE_OPENED",
    payload: file,
  };
};

export const closeFile = (file) => {
  return {
    type: "FILE_CLOSED",
    payload: file,
  };
};

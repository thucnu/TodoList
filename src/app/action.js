export const addValue = (value) => {
  return {
    type: "ADD_VALUE",
    payload: value,
  };
};
export const removeValue = (value) => {
  return {
    type: "REMOVE_VALUE",
    payload: value,
  };
};

export const changeStatus = (value) => {
  return {
    type: "CHANGE_STATUS",
    payload: value,
  }
}


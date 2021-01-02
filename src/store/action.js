export const ADD_TO_LIST = "ADD_TO_LIST";
export const DELETE_FROM_TASK = "DELETE_FROM_TASK";

export const addToList = (value) => {
  return {
    type: ADD_TO_LIST,
    value,
  };
};

export const deleteTask = (arr) => {
  return {
    type: DELETE_FROM_TASK,
    arr,
  };
};

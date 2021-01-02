import { ADD_TO_LIST, DELETE_FROM_TASK } from "./action";

const initialState = {
  list: [],
};

export function Reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_LIST:
      return {
        ...state,
        list: [...state.list, action.value],
      };
    case DELETE_FROM_TASK:
      return {
        ...state,
        list: action.arr,
      };
    default:
      return state;
  }
}

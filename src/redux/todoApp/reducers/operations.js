import {
  ADD_TODO,
  DELETE_ALL,
  REMOVE_TODO,
  UPDATE_CHECKBOX,
  UPDATE_TODO,
} from "../actions";

const initialState = [
  { id: 1, todo: "React js", completed: false },
  { id: 2, todo: "Redux", completed: false },
  { id: 3, todo: "Redux Toolkit", completed: true },
];

export const operationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_ALL:
      return [];

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case UPDATE_TODO: {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      let data = action.payload;
      const updatedArray = [...state];
      updatedArray[index] = data;
      return [...updatedArray];
    }

    case UPDATE_CHECKBOX: {
      let todoArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        todoArray.push(item);
      });
      return todoArray;
    }

    default:
      return state;
  }
};

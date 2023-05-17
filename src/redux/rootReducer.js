import { combineReducers } from "redux";
import { operationReducer } from "./todoApp/reducers/operations";

export const rootReducer = combineReducers({
  operationReducer,
  //   more reducer can be added here
});

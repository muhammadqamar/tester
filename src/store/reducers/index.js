import { combineReducers } from "redux";

import { numberReducer } from "./numberReducer";
import { todoAppReducers } from "./todoAppReducers";

const reducers = combineReducers({
  numberReducer: numberReducer,
  todoAppReducers: todoAppReducers,
});

export default reducers;

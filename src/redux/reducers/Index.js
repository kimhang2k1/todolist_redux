import { combineReducers } from "redux";
import TodoReducers from "./TodoReducers";
import visibilityFilter from "./VisibilityFilter";

const rootReducers = combineReducers({
  todo: TodoReducers,
  filter: visibilityFilter,
});

export default rootReducers;

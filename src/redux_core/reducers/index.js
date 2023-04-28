import { combineReducers } from "redux";
import { count_reducer } from "./count_reducer";
import { history_reducer } from "./history_reducer";

export const reducers = combineReducers({
  count: count_reducer,
  history: history_reducer,
});

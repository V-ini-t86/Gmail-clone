import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import sentReducer from "./sentReducer";
import snoozeReducer from "./snoozeReducer";
import starredReducer from "./starredReducer";

const allReducers = combineReducers({
  searchReducer,
  starredReducer,
  snoozeReducer,
  sentReducer,
});

export default allReducers;

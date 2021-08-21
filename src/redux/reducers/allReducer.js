import { combineReducers } from "redux";
import deleteReducer from "./deleteReducer";
import searchReducer from "./searchReducer";
import seeMailReducer from "./seeMailReducer";
import sentReducer from "./sentReducer";
import snoozeReducer from "./snoozeReducer";
import starredReducer from "./starredReducer";

const allReducers = combineReducers({
  searchReducer,
  starredReducer,
  snoozeReducer,
  sentReducer,
  seeMailReducer,
  deleteReducer,
});

export default allReducers;

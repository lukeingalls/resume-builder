import { combineReducers } from "redux";
import resume from "./resume";
import education from "./education";

export default combineReducers({
  ...resume,
  ...education,
});

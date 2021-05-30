import { combineReducers } from "redux";
import resume from "./resume";
import education from "./education";
import experience from "./experience";

export default combineReducers({
  ...education,
  ...experience,
  ...resume,
});

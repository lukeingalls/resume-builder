import { combineReducers } from "redux";
import resume from "./resume";
import aboutMe from "./aboutMe";
import education from "./education";
import experience from "./experience";

export default combineReducers({
  ...aboutMe,
  ...education,
  ...experience,
  ...resume,
});

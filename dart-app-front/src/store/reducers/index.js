import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import forgotPassword from "./forgotPasswordReducer";
import usersReducer from "./usersReducer";
import openChallengeReducer from "./openChallengeReducer";
import matchPlayedReducer from "./matchPlayedReducer";
import contentManagementReducer from "./contentManagementReducer";
export default combineReducers({
  loginReducer,
  forgotPassword,
  usersReducer,
  openChallengeReducer,
  matchPlayedReducer,
  contentManagementReducer
});

import { combineReducers } from "redux";
import formAttributes from "./postReducer";

export default combineReducers({
  avp: formAttributes
});

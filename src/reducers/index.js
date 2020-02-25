import { combineReducers } from "redux";
import article from "./article";
import cart from "./cart";
import filter from "./filter";

export default combineReducers({
  article,
  cart, 
  filter,
});
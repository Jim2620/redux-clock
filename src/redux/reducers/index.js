import { combineReducers } from "redux";
import clock from "./clock.js";

const clockApp = combineReducers({ clock });

export default clockApp;

import { combineReducers, createStore } from "redux";
import { videosReducer, userReducer } from "./Reducers/";
const store = createStore(combineReducers({ videosReducer, userReducer }));
export default store;

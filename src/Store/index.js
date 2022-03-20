import { createStore } from "redux";
import videoReducer from "./videoReducer";
const store = createStore(videoReducer);
export default store;

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { actionTypes } from "../actons";
export const addCurrentUserAction = (value) => ({
  type: actionTypes.ADD_CURRENT_USER,
  payload: value,
});
export const userAction = {
  addCurrentUserAction,
};
const initialState = {
  currentUser: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};
export default userReducer;

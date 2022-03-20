import { actionTypes } from "./actons";
export const filterVideoAction = (value) => ({
  type: actionTypes.FILTER_VIDEOS,
  payload: value,
});

export const videoAction = {
  filterVideoAction,
};
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_VIDEOS:
      return action.payload;

    default:
      return state;
  }
};
export default reducer;

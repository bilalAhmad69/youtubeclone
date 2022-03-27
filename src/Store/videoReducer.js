import { actionTypes } from "./actons";
export const filterVideoAction = (value) => ({
  type: actionTypes.FILTER_VIDEOS,
  payload: value,
});
export const filterVideoByIdAction = (value) => ({
  type: actionTypes.FILTER_VIDEOS_BY_ID,
  payload: value,
});

export const videoAction = {
  filterVideoAction,
  filterVideoByIdAction,
};
const initialState = {
  watchVideo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_VIDEOS:
      return action.payload;
    case actionTypes.FILTER_VIDEOS_BY_ID:
      return { ...state, watchVideo: action.payload };

    default:
      return state;
  }
};
export default reducer;

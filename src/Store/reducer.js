const initialState = {
  videos: JSON.parse(localStorage.getItem("videos")),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_VIDEOS":
      return { videos: [action.payload] };
    case "SEARCH":
      let searchVideo = state.videos;
      const filterVideo = searchVideo.filter((video, index) =>
        video[index].name.includes(action.payload)
      );

      console.log("searchVideo", filterVideo);
      return searchVideo;

    default:
      return state;
  }
};
export default reducer;

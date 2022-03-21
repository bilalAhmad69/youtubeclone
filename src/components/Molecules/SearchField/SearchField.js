import { MdMic } from "react-icons/md";
import { SearchInput, SearchButton, IconButton } from "../../Atomic/";
import "./searchField.css";
import { useDispatch } from "react-redux";
import { videoAction } from "../../../Store/videoReducer";
import { useEffect, useState } from "react";
const SeacrhField = () => {
  const dispatch = useDispatch();
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  useEffect(() => {
    setYoutubeVideos(JSON.parse(localStorage.getItem("videos")));
  }, []);
  const handleSearch = (event) => {
    let searchKeyWord = event.target.value;
    if (searchKeyWord.length >= 2) {
      let filterVideos = youtubeVideos.filter((video) => {
        return video.name.toLowerCase().includes(searchKeyWord.toLowerCase());
      });

      if (filterVideos.length > 0) {
        setFilteredVideos(filterVideos);
        dispatch(videoAction.filterVideoAction(filteredVideos));
      }
    }
  };
  return (
    <div className="searchFieldContainer">
      <div className="searchField">
        <SearchInput onChange={(event) => handleSearch(event)} />
        <SearchButton />
      </div>
      <IconButton className="topHeadingBtn">
        <MdMic className="topHeadingIcon" />
      </IconButton>
    </div>
  );
};
export default SeacrhField;

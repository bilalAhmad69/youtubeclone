import { MdMic } from "react-icons/md";
import { SearchInput, SearchButton, IconButton } from "../../Atomic/";
import "./searchField.css";
import { useDispatch } from "react-redux";
import { videoAction } from "../../../Store/videoReducer";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { useNavigate } from "react-router-dom";
const SeacrhField = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const videoColloctionRef = collection(db, "videos");
  useEffect(() => {
    const getVideos = async () => {
      const videosData = await getDocs(videoColloctionRef);
      setYoutubeVideos(
        videosData.docs
          .map((video) => ({ ...video.data(), id: video.id }))
          .reverse()
      );
    };
    getVideos();
  }, []);
  const handleSearch = (event) => {
    let searchKeyWord = event.target.value;
    if (searchKeyWord.length > 2) {
      let filterVideos = youtubeVideos.filter((video) => {
        return video.title.toLowerCase().includes(searchKeyWord.toLowerCase());
      });

      if (filterVideos.length > 0) {
        setFilteredVideos(filterVideos);
        dispatch(videoAction.filterVideoAction(filteredVideos));
      } else {
        navigate("/not");
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

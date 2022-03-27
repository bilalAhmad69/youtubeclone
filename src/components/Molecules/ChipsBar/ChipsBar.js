import { Chips, SectionDivider } from "../../Atomic/";
import "./chipsBar.css";
import { useDispatch } from "react-redux";
import { videoAction } from "../../../Store/videoReducer";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";
const chipsData = [
  { text: "All" },
  { text: "Cartoon" },
  { text: "Sports" },
  { text: "Song" },
  { text: "Ptv" },
  { text: "React" },
  { text: "Comedy" },
  { text: "Techonology" },
  { text: "Movies" },
  { text: "Cricket" },
  { text: "Space" },
  { text: "Cloud Computing" },
  { text: "Special" },
  ,
  ,
];
const ChipsBar = () => {
  const dispatch = useDispatch();
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const videoColloctionRef = collection(db, "videos");
  const handleChipsSearch = (text) => {
    if (text.toLowerCase() === "all") {
      dispatch(videoAction.filterVideoAction(youtubeVideos));
    }
    let filterVideos = youtubeVideos.filter((video) => {
      return video.title.toLowerCase().includes(text.toLowerCase());
    });
    if (filterVideos.length > 0) {
      setFilteredVideos(filterVideos);
      dispatch(videoAction.filterVideoAction(filteredVideos));
    }
  };
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
  });
  return (
    <div className="chipsBarContainer">
      <SectionDivider />
      {chipsData.map((chip, index) => {
        return (
          <Chips
            key={index}
            text={chip.text}
            className="chipsBtn"
            onClick={() => handleChipsSearch(chip.text)}
          />
        );
      })}

      <SectionDivider />
    </div>
  );
};
export default ChipsBar;

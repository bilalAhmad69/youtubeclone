import { VideoCard, VideoFrameLeft } from "../../Molecules";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { useSelector } from "react-redux";
import "./watchVideoFram.css";
const WatchVideoFrame = () => {
  const [videos, setVideos] = useState([]);
  const videoColloctionRef = collection(db, "videos");
  const getVideos = async () => {
    const videosData = await getDocs(videoColloctionRef);
    setVideos(
      videosData.docs
        .map((video) => ({ ...video.data(), id: video.id }))
        .reverse()
    );
  };

  useEffect(() => {
    getVideos();
  }, []);
  const videoSelector = useSelector((video) => video);
  const video = videoSelector.length > 0 ? videoSelector : videos;
  return (
    <div className="WatchVideoContainer">
      <div className="videoFrame">
        <VideoFrameLeft />
      </div>
      <div className="relatedVideos">
        <VideoCard
          layout="cols"
          metaData="dontShowAvatar"
          card="flex-row"
          width="300"
          height="150"
          marginTop="marginTop"
          videos={video}
        />
      </div>
    </div>
  );
};
export default WatchVideoFrame;

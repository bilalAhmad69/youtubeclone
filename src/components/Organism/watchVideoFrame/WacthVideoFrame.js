import { useState } from "react";
import { useSelector } from "react-redux";
import { VideoCard, VideoFrameLeft } from "../../Molecules";
import "./watchVideoFram.css";
const WatchVideoFrame = () => {
  const filteredVideoSelector = useSelector((video) => video);
  return (
    <div className="WatchVideoContainer">
      <div className="videoFrame">
        <VideoFrameLeft videoPath={filteredVideoSelector.video} />
      </div>
      <div className="relatedVideos">
        <VideoCard
          layout="cols"
          metaData="dontShowAvatar"
          card="flex-row"
          width="300"
          height="200"
        />
      </div>
    </div>
  );
};
export default WatchVideoFrame;

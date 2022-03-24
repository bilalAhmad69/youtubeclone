import { TypoGraphy, VideoFrame, IconButton } from "../../Atomic/";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { IoCutOutline, IoSaveOutline } from "react-icons/io5";

import "./videoFrameLeft.css";
const VideoFrameLeft = (props) => {
  const { onClick, videoPath } = props;
  return (
    <div className="videoContainer">
      <VideoFrame
        width="950"
        height="550"
        onClick={onClick}
        videoPath={videoPath}
      />
      <TypoGraphy text={<h3>THis is the first video </h3>} />
      <div className="videoStatistics">
        <TypoGraphy text={<label>396,40 views . 18 oct 2022</label>} />
        <div className="iconContainer">
          <IconButton className="topHeadingBtn bgnone">
            <AiOutlineLike className="topHeadingIcon" />
          </IconButton>
          <IconButton className="topHeadingBtn bgnone">
            <AiOutlineDislike className="topHeadingIcon" />
          </IconButton>
          <IconButton className="topHeadingBtn bgnone">
            <BiShare className="topHeadingIcon" />
          </IconButton>
          <IconButton className="topHeadingBtn bgnone">
            <IoCutOutline className="topHeadingIcon" />
          </IconButton>
          <IconButton className="topHeadingBtn bgnone">
            <IoSaveOutline className="topHeadingIcon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export default VideoFrameLeft;

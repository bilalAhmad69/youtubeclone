import { TypoGraphy, VideoFrame, IconButton } from "../../Atomic/";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { IoCutOutline, IoSaveOutline } from "react-icons/io5";
import { db } from "../../../utils/firebase";
import { useParams } from "react-router";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import "./videoFrameLeft.css";
import { useEffect, useState } from "react";
const VideoFrameLeft = () => {
  const [video, setVideo] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const id = useParams();
  // Get Video For Watch
  const getVideo = async () => {
    const video = doc(db, "videos", id.id);
    try {
      const videoData = await getDoc(video);
      setVideo({ ...videoData.data(), id: videoData.id });
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getVideo();
  }, []);
  // Manage Like Vdieo
  const handleLike = async ({ id }) => {
    const likeVidoesRef = doc(db, "videos", id);
    try {
      await updateDoc(likeVidoesRef, { isLiked });
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleWatch = async ({ id }) => {
    const videoDoc = doc(db, "videos", id);
    try {
      await updateDoc(videoDoc, { isWatched: true });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="videoContainer">
      {video.video && (
        <VideoFrame
          width="950"
          height="550"
          onClick={() => handleWatch(id)}
          videoPath={video.video}
          controls={true}
        />
      )}

      <TypoGraphy text={<h3>{video.title} </h3>} />
      <div className="videoStatistics">
        <TypoGraphy text={<label>396,40 views . 18 oct 2022</label>} />
        <div className="iconContainer">
          {isLiked ? (
            <IconButton
              className="topHeadingBtn bgnone"
              onClick={() =>
                handleLike({
                  id: video.id,
                  isVideoLiked: setIsLiked(!video.isLiked),
                })
              }
            >
              <AiOutlineLike
                className="topHeadingIcon"
                style={{ color: "blue" }}
              />
            </IconButton>
          ) : (
            <IconButton
              className="topHeadingBtn bgnone"
              onClick={() =>
                handleLike({
                  id: video.id,
                  isVideoLiked: setIsLiked(!video.isLiked),
                })
              }
            >
              <AiOutlineLike className="topHeadingIcon" />
            </IconButton>
          )}

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

import { TypoGraphy, Avatar, VideoFrame } from "../../Atomic/";
import "./videoCard.css";
import { useSelector } from "react-redux";
import { videoAction } from "../../../Store/videoReducer";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { useDispatch } from "react-redux";

const VideoCard = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { height, width, layout, metaData, card } = props;
  const [videos, setVideos] = useState([]);
  const [filteredVideo, setFilteredVideo] = useState();
  const videoColloctionRef = collection(db, "videos");
  useEffect(() => {
    const getVideos = async () => {
      const videosData = await getDocs(videoColloctionRef);
      setVideos(
        videosData.docs
          .map((video) => ({ ...video.data(), id: video.id }))
          .reverse()
      );
    };
    getVideos();
  }, []);
  const videoSelector = useSelector((video) => video);
  const handleVideo = (id) => {
    videos.filter((video) => {
      if (video.id === id) {
        dispatch(videoAction.filterVideoByIdAction(video));
      }
    });
    navigate(`/watch/${id}`);
  };

  if (videoSelector.length > 0) {
    return (
      <div className={layout}>
        {videoSelector.map((video) => {
          return (
            <div key={video.id} className={card}>
              <VideoFrame height={height} width={width} path={video.video} />

              <div className={metaData}>
                {metaData === "showAvatar" && (
                  <Avatar image={video.thumbNail} />
                )}
                <div>
                  <TypoGraphy
                    text={<h5 className="titleTypo">{video.title}</h5>}
                  />
                  <TypoGraphy text={<p className="detailTypo">Technology</p>} />
                  <div style={{ display: "flex" }}>
                    <TypoGraphy
                      text={<label className="detailTypo">2k views</label>}
                    />
                    <TypoGraphy
                      text={<label className="detailTypo">{video.time}</label>}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className={layout}>
        {videos ? (
          videos.map((video) => {
            return (
              <div key={video.id} className={card}>
                <VideoFrame
                  height={height}
                  width={width}
                  videoPath={video.video}
                  onClick={() => handleVideo(video.id)}
                />
                <div className={metaData}>
                  {metaData === "showAvatar" && (
                    <Avatar image={video.thumbNail} />
                  )}
                  <div>
                    <TypoGraphy
                      text={<h5 className="titleTypo">{video.title}</h5>}
                    />
                    <TypoGraphy
                      text={<p className="detailTypo">Technology</p>}
                    />
                    <div style={{ display: "flex" }}>
                      <TypoGraphy
                        text={<label className="detailTypo">2k views</label>}
                      />
                      <TypoGraphy
                        text={
                          <label className="detailTypo">{video.time}</label>
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1> Sorry Videos Not Found</h1>
        )}
      </div>
    );
  }
};
export default VideoCard;

import { useEffect, useState } from "react";
import { TypoGraphy, Avatar, Iframe } from "../../Atomic/";
import "./videoCard.css";
import { useSelector } from "react-redux";
const VideoCard = () => {
  let array = [];
  const [videos, setVideos] = useState([]);
  const videoSelector = useSelector((video) => video);
  useEffect(() => {
    setVideos(JSON.parse(localStorage.getItem("videos")));
  }, []);
  //
  if (videoSelector.length > 0) {
    return (
      <div className="cards">
        {videoSelector.map((video, index) => {
          return (
            <div key={index} className="card">
              <Iframe path={video.videoImage} />
              <div className="videoDetail">
                <Avatar image="data:image/png;base64,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" />
                <div>
                  <TypoGraphy
                    text={<h5 className="typography">{video.name}</h5>}
                  />
                  <TypoGraphy text={<p className="views">Technology</p>} />
                  <div style={{ display: "flex" }}>
                    <TypoGraphy
                      text={<label className="views">2k views</label>}
                    />
                    <TypoGraphy
                      text={<label className="views">{video.uploadTime}</label>}
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
      <div className="cards">
        {videos ? (
          videos.map((video, index) => {
            return (
              <div key={index} className="card">
                <Iframe path={video.videoImage} />
                <div className="videoDetail">
                  <Avatar image="data:image/png;base64,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" />
                  <div>
                    <TypoGraphy
                      text={<h5 className="typography">{video.name}</h5>}
                    />
                    <TypoGraphy text={<p className="views">Technology</p>} />
                    <div style={{ display: "flex" }}>
                      <TypoGraphy
                        text={<label className="views">2k views</label>}
                      />
                      <TypoGraphy
                        text={
                          <label className="views">{video.uploadTime}</label>
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

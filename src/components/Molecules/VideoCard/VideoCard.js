import { TypoGraphy, Avatar, VideoFrame } from "../../Atomic/";
import "./videoCard.css";
import { useNavigate } from "react-router";
import moment from "moment";

const VideoCard = (props) => {
  const navigate = useNavigate();
  const { height, width, layout, metaData, card, marginTop, videos, notFound } =
    props;
  const handleVideo = (id) => {
    navigate(`/watch/${id}`);
  };
  if (notFound) console.log("hello");
  return (
    <div className={layout}>
      {videos ? (
        videos.map((video) => {
          return (
            <div key={video.id} className={card}>
              <VideoFrame
                poster={video.thumbNail}
                height={height}
                width={width}
                videoPath={video.video}
                onClick={() => handleVideo(video.id)}
              />
              <div className={metaData}>
                {metaData === "showAvatar" && (
                  <Avatar image={video.thumbNail} />
                )}
                <div className={marginTop}>
                  <TypoGraphy
                    text={<h5 className="titleTypo">{video.title}</h5>}
                  />
                  <TypoGraphy text={<p className="detailTypo">Technology</p>} />
                  <div className="time_views">
                    <TypoGraphy
                      text={<label className="detailTypo">2k views</label>}
                    />
                    <TypoGraphy
                      text={
                        <label className="detailTypo">
                          {moment(video.time.toString()).fromNow()}
                        </label>
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
};
export default VideoCard;

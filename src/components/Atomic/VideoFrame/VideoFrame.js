import "./videoFrame.css";
const VideoFrame = (props) => {
  const { videoPath, width, height, onClick, controls, poster } = props;
  return (
    <video
      width={width}
      height={height}
      onClick={onClick}
      controls={controls}
      poster={poster}
      autoPlay={false}
      className="frame"
    >
      <source className="videoSize" src={videoPath} type="video/mp4" />
    </video>
  );
};
export default VideoFrame;

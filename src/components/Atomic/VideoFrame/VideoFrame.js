const VideoFrame = (props) => {
  const { videoPath, width, height, onClick } = props;

  console.log(videoPath);
  return (
    <video
      width={width}
      height={height}
      onClick={onClick}
      controls={false}
      autoPlay={false}
    >
      <source src={videoPath} type="video/mp4" />
    </video>
  );
};
export default VideoFrame;

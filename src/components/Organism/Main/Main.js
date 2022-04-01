import { ChipsBar, VideoCard } from "../../Molecules/";
import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { useSelector } from "react-redux";

const Main = () => {
  const [videos, setVideos] = useState([]);
  const videoColloctionRef = collection(db, "videos");

  const getVideos = async () => {
    const q = query(videoColloctionRef, orderBy("time", "desc"));

    const videosData = await getDocs(q);
    setVideos(
      videosData.docs.map((video) => ({ ...video.data(), id: video.id }))
    );
  };
  useEffect(() => {
    getVideos();
  }, []);
  const videoSelector = useSelector((video) => video.videosReducer);
  const video = videoSelector.length > 0 ? videoSelector : videos;
  return (
    <div>
      <ChipsBar />
      <VideoCard
        width="300"
        height="160"
        layout="rows"
        metaData="showAvatar"
        card="flex-col"
        videos={video && video}
      />
    </div>
  );
};
export default Main;

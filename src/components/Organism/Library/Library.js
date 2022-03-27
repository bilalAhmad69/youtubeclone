import { db } from "../../../utils/firebase";
import { collection, where, query, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { VideoCard } from "../../Molecules";
import { SectionDivider, TypoGraphy } from "../../Atomic";
import "./library.css";
const Library = () => {
  const [likedVideo, setLikedVideo] = useState([]);
  const [watchedVideo, setWactchedVideo] = useState([]);
  const videoRef = collection(db, "videos");
  const getLikedVideo = async () => {
    const isLiked = query(videoRef, where("isLiked", "==", true));
    const likeVideosData = await getDocs(isLiked);
    setLikedVideo(
      likeVideosData.docs.map((likeVideo) => ({
        ...likeVideo.data(),
        id: likeVideo.id,
      }))
    );
  };
  const getWatchedVideo = async () => {
    const isWatched = query(videoRef, where("isWatched", "==", true));
    const watchVideosData = await getDocs(isWatched);
    setWactchedVideo(
      watchVideosData.docs.map((watchVideo) => ({
        ...watchVideo.data(),
        id: watchVideo.id,
      }))
    );
  };
  useEffect(() => {
    getLikedVideo();
    getWatchedVideo();
  }, []);
  return (
    <div className="contianerLibrary">
      <TypoGraphy text={<h4>Liked Videos</h4>} />
      {likedVideo ? (
        <section>
          <div className="block">
            <VideoCard
              width="300"
              height="160"
              layout="rows"
              metaData="showAvatar"
              card="flex-col"
              videos={likedVideo}
            />
          </div>
          <SectionDivider width="100%" />
          <div className="block">
            <TypoGraphy text={<h4>Watched Videos</h4>} />
            <VideoCard
              width="300"
              height="160"
              layout="rows"
              metaData="showAvatar"
              card="flex-col"
              videos={watchedVideo}
            />
          </div>
        </section>
      ) : (
        <h1>Nothing is Liked</h1>
      )}
    </div>
  );
};
export default Library;

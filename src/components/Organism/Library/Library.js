import { db } from "../../../utils/firebase";
import { collection, where, query, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { VideoCard } from "../../Molecules";
import { SectionDivider, TypoGraphy } from "../../Atomic";
import { auth } from "../../../utils/firebase";
import "./library.css";
const Library = () => {
  const [likedVideo, setLikedVideo] = useState([]);
  const [watchedVideo, setWactchedVideo] = useState([]);
  const [uploadVideos, setUploadVideos] = useState([]);
  const currentUser = auth.currentUser && auth.currentUser.uid;
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

  const getYourUploadVideos = async () => {
    const yourUploadVideos = query(
      videoRef,
      where("userId", "==", currentUser)
    );
    const uploadVideosData = await getDocs(yourUploadVideos);
    setUploadVideos(
      uploadVideosData.docs.map((uploadVideo) => ({
        ...uploadVideo.data(),
        id: uploadVideo.id,
      }))
    );
  };

  useEffect(() => {
    getLikedVideo();
    getWatchedVideo();
    if (currentUser) getYourUploadVideos();
  }, []);
  return (
    <div className="contianerLibrary">
      <TypoGraphy text={<h4>Liked Videos</h4>} />
      {likedVideo.length > 0 ? (
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
        </section>
      ) : (
        <p>Nothing was Liked</p>
      )}
      {watchedVideo.length > 0 ? (
        <section>
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
        <p> Nothin was Wachted</p>
      )}
      {console.log(uploadVideos)}
      {uploadVideos.length > 0 && (
        <section>
          <SectionDivider width="100%" />
          <div className="block">
            <TypoGraphy text={<h4>Your Uploaded Videos</h4>} />
            <VideoCard
              width="300"
              height="160"
              layout="rows"
              metaData="showAvatar"
              card="flex-col"
              videos={uploadVideos}
            />
          </div>
        </section>
      )}
    </div>
  );
};
export default Library;

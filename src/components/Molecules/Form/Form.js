import { useNavigate } from "react-router";
import { SubmitButton, InputText, VideoFrame, TypoGraphy } from "../../Atomic/";
import "./form.css";
import { useState } from "react";
import { db } from "../../../utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import { storage } from "../../../utils/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Form = () => {
  let navigate = useNavigate();
  const [video, setVideo] = useState("");
  const [title, setTitle] = useState("");
  const [thumbNail, setThumbnail] = useState("");
  const [progress, setProgress] = useState(0);
  const [thumbNailProgress, setThumbNailProgress] = useState(0);

  const handleVideo = async (e) => {
    e.preventDefault();
    const value = e.target.files[0];
    if (!value) return alert("Video not selected");
    const storageRef = ref(storage, `/Videos/${value.name}`);
    const uploadVideo = uploadBytesResumable(storageRef, value);
    uploadVideo.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error.message),
      () => {
        getDownloadURL(uploadVideo.snapshot.ref).then((url) => {
          const videoUrl = url;
          setVideo(videoUrl);
        });
      }
    );
  };
  function handleThumbNail(e) {
    e.preventDefault();
    const value = e.target.files[0];
    if (!value) return alert("thumbnail not selected");
    const storageRef = ref(storage, `/thumbNails/${value.name}`);
    const uploadVideo = uploadBytesResumable(storageRef, value);
    uploadVideo.on(
      "state_changed",
      (snapshot) => {
        const prog =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setThumbNailProgress(prog);
      },
      (error) => console.log(error.message),
      () => {
        getDownloadURL(uploadVideo.snapshot.ref).then((url) => {
          setThumbnail(url);
        });
      }
    );
  }
  function handleTitle(e) {
    e.preventDefault();
    const title = e.target.value;
    setTitle(title);
  }
  const videoRef = collection(db, "/videos");
  async function handleSubmit(e) {
    e.preventDefault();
    if (!title) return alert("Enter The Title ");
    if (video === "") return alert("No VideoFile Uploaded");
    if (thumbNail === "") return alert("No ThumbnailFile Uploaded");
    await addDoc(videoRef, {
      title: title,
      thumbNail: thumbNail,
      video: video,
      time: Date.now(),
      isLiked: false,
      isWatched: false,
    });
    navigate("/");
  }
  return (
    <div className="formContainer">
      <form>
        <TypoGraphy text={<label> Video_Title </label>} />
        <InputText
          className="formTextField"
          type="text"
          onChange={handleTitle}
          value={title}
        />
        <TypoGraphy text={<label> Thumnail/Image </label>} />
        <InputText
          className="formTextField"
          type="file"
          onChange={handleThumbNail}
        />
        <TypoGraphy text={<label> {thumbNailProgress} % thumbNail</label>} />
        <SubmitButton onClick={handleSubmit} text="Submit" />
      </form>
      <div className="imageContainer">
        <VideoFrame path={video} />
        <InputText
          className="formChooseFile"
          type="file"
          onChange={handleVideo}
        />
        <TypoGraphy text={<label> {progress} % </label>} />
      </div>
    </div>
  );
};
export default Form;

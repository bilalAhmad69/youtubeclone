import { useNavigate } from "react-router";
import {
  SubmitButton,
  InputText,
  VideoFrame,
  TypoGraphy,
  IconButton,
} from "../../Atomic/";
import "./form.css";
import { useState } from "react";
import { auth, db } from "../../../utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import { storage } from "../../../utils/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Form = () => {
  let navigate = useNavigate();
  const [video, setVideo] = useState();
  const [title, setTitle] = useState("");
  const [thumbNail, setThumbnail] = useState();
  const [tags, setTags] = useState("");
  const [progress, setProgress] = useState(0);
  const [thumbNailProgress, setThumbNailProgress] = useState(0);
  // upload Videos
  const handleVideo = async (e) => {
    e.preventDefault();
    const value = e.target.files[0];
    if (!value) return alert("Video not selected");
    const size = (value.size / 1024 / 1024).toFixed(2);
    if (size < 20 && value.type == "video/mp4") {
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
    } else {
      alert("file size or  file type is not valid");
    }
  };
  // Upload Thumbnails
  function handleThumbNail(e) {
    e.preventDefault();
    const value = e.target.files[0];
    if (!value) return alert("thumbnail not selected");
    const size = (value.size / 1024 / 1024).toFixed(2);
    if (size < 2 && value.type == "image/jpeg") {
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
    } else {
      alert("file size or type is not valid");
    }
  }
  // get Title
  function handleTitle(e) {
    e.preventDefault();
    const title = e.target.value;
    setTitle(title);
  }
  function handleTags(e) {
    e.preventDefault();
    const tag = e.target.value;
    setTags(tag);
  }
  const videoRef = collection(db, "videos");
  // Upload Video
  async function handleSubmit(e) {
    e.preventDefault();
    if (!title) return alert("Enter The Title ");
    if (!tags) return alert("Insert Tags");
    if (video === "") return alert("No VideoFile Uploaded");
    if (thumbNail === "") return alert("No ThumbnailFile Uploaded");
    try {
      await addDoc(videoRef, {
        title: title,
        thumbNail: thumbNail,
        tags: tags,
        video: video,
        time: Date(),
        userId: auth.currentUser.uid,
        isLiked: false,
        isWatched: false,
      });
      navigate("/");
    } catch (e) {
      alert(e.message);
    }
  }
  return (
    <div className="formContainer">
      <form>
        <TypoGraphy text={<label className="title"> Upload Video </label>} />
        <div className="row">
          <TypoGraphy text={<label className="label">Video Title </label>} />
          <InputText
            className="inputField"
            type="text"
            onChange={handleTitle}
            value={title}
          />
        </div>
        <div className="row">
          <TypoGraphy text={<label className="label">Tags </label>} />
          <InputText
            className="inputField"
            type="text"
            onChange={handleTags}
            value={tags}
          />
        </div>
        <div className="row">
          <TypoGraphy
            text={<label className="label">Upload Thumbnail</label>}
          />
          <div className="flex-row">
            <InputText type="file" onChange={handleThumbNail} />
            <TypoGraphy
              text={
                <label className="uploading">
                  {thumbNailProgress} % Upoading...
                </label>
              }
            />
          </div>
        </div>
        <div className="row">
          <TypoGraphy text={<label className="label">Upload Video</label>} />
          <div className="flex-row">
            <InputText type="file" onChange={handleVideo} />
            <TypoGraphy
              text={
                <label className="uploading">{progress} % Upoading...</label>
              }
            />
          </div>
        </div>
        <IconButton onClick={handleSubmit} className="formBtn">
          {"Submit"}
        </IconButton>
      </form>
    </div>
  );
};
export default Form;

import { useNavigate } from "react-router";
import SubmitButton from "../../Atomic/Buttons/SubmitButton/SubmitButton";
import InputText from "../../Atomic/Inputs/InputText/InputText";
import Iframe from "../../Atomic/Iframe/Iframe";
import "./form.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
const initialVideos = localStorage.getItem("videos")
  ? JSON.parse(localStorage.getItem("videos"))
  : [];

const Form = () => {
  let navigate = useNavigate();
  // current Time
  let today = new Date();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = time;
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [uploads, setUploads] = useState(initialVideos);
  const dispatch = useDispatch();

  function handleImage(e) {
    e.preventDefault();
    const read = new FileReader();
    read.addEventListener("load", () => {
      setImage(read.result);
    });
    read.readAsDataURL(e.target.files[0]);
  }
  function handleTitle(e) {
    e.preventDefault();
    const title = e.target.value;
    setTitle(title);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (title == "") return setTitle("Enter Title");
    if (image == "") return setImage("Inser File");
    const newVideo = { name: title, uploadTime: time, videoImage: image };
    const videos = uploads.unshift(newVideo);
    setUploads([...uploads, videos]);
    localStorage.setItem("videos", JSON.stringify(uploads));
    dispatch({ type: "ADD_VIDEOS", payload: [...uploads] });
    navigate("/");
  }
  return (
    <div className="formContainer">
      <form>
        <InputText
          className="formTextField"
          type="text"
          onChange={handleTitle}
          value={title}
        />
        <InputText
          className="formTextField"
          type="text"
          placeholder={dateTime}
        />
        <SubmitButton onClick={handleSubmit} text="Submit" />
      </form>
      <div className="imageContainer">
        <Iframe path={image} />
        <InputText
          className="formChooseFile"
          type="file"
          onChange={handleImage}
        />
      </div>
    </div>
  );
};
export default Form;

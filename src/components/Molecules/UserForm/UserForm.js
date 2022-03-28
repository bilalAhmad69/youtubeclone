import { useState } from "react";
import { InputText, SubmitButton, TypoGraphy } from "../../Atomic";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../utils/firebase";

import "./userForm.css";
import { actionTypes } from "../../../Store/actons";
const UserForm = (props) => {
  const { userEmail, userPassword, userConfirmPassword, userName, formName } =
    props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    e.preventDefault();
    setConfirmPassword(e.target.value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "")
      return alert("Kindly fill All the Fields");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("sucessFully LogIn");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    )
      return alert("kindly fill all the fields");
    if (password !== confirmPassword) return alert("password does not match");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="formsContainer">
      <form className="userForm">
        <TypoGraphy text={<label>{formName}</label>} />
        {userName && (
          <div className="formRows">
            <InputText placeholder="Name" onChange={handleName} />
          </div>
        )}
        {userEmail && (
          <div className="formRows">
            <InputText placeholder="Email" onChange={handleEmail} />
          </div>
        )}
        {userPassword && (
          <div className="formRows">
            <InputText
              placeholder="Password"
              onChange={handlePassword}
              type="password"
            />
          </div>
        )}
        {userConfirmPassword && (
          <div className="formRows">
            <InputText
              placeholder="Confirm Password"
              onChange={handleConfirmPassword}
              type="password"
            />
          </div>
        )}
        {formName === "Create Account" ? (
          <div className="formRows">
            <SubmitButton
              text={"Create Account"}
              onClick={(e) => handleSubmit(e)}
            />
            <TypoGraphy
              text={
                <label>
                  Already Have Acount
                  <Link to="/login" className="loginLink">
                    Log In
                  </Link>
                </label>
              }
            />
          </div>
        ) : (
          <div className="formRows">
            <SubmitButton text={formName} onClick={(e) => handleLogin(e)} />
            <TypoGraphy
              text={
                <label>
                  Dont Have Acount
                  <Link to="/signup" className="loginLink">
                    Create Account
                  </Link>
                </label>
              }
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default UserForm;
